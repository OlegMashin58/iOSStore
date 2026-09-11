import { Button } from '@shared/ui'

export const TestPage = () => {
  const manifestUrl = `${window.location.origin}/manifest.plist`

  const handleInstall = () => {
    window.location.href = `itms-services://?action=download-manifest&url=${encodeURIComponent(manifestUrl)}`
  }

  return (
    <div>
      <Button view="primary" onClick={handleInstall}>
        Нажал стал петушком драным
      </Button>
    </div>
  )
}
