import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

@Injectable()
export class StorageService {
  private readonly client: S3Client;
  private readonly bucket: string;

  constructor(private readonly configService: ConfigService) {
    this.client = new S3Client({
      region: this.configService.getOrThrow<string>('S3_REGION'),
      endpoint: this.configService.get<string>('S3_ENDPOINT') || undefined,
      credentials: {
        accessKeyId: this.configService.getOrThrow<string>('S3_ACCESS_KEY'),
        secretAccessKey: this.configService.getOrThrow<string>('S3_SECRET_KEY'),
      },
      forcePathStyle: Boolean(this.configService.get<string>('S3_ENDPOINT')),
    });

    this.bucket = this.configService.getOrThrow<string>('S3_BUCKET');
  }

  async getDownloadUrl(key: string, expiresIn = 300) {
    const command = new GetObjectCommand({
      Bucket: this.bucket,
      Key: key,
    });

    return getSignedUrl(this.client, command, {
      expiresIn,
    });
  }
}
