import { Text } from '@shared/ui'
import { StepTag } from '../step-tag/StepTag'

import styles from './stepItem.module.less'

interface IStepItemProps {
  step: number
  image?: string
  title: string
  description: string
}

export const StepItem = ({
  step,
  image,
  title,
  description,
}: IStepItemProps) => {
  return (
    <div className={styles.stepItemContainer}>
      {/* <div className={styles.stepLine}>{stepPosition}</div> */}

      {/* <div > */}
      {image && <img src={image} className={styles.imageContainer} />}
      {/* </div> */}

      <div className={styles.textContainer}>
        <StepTag step={step} />
        <Text text={title} variant="title" />

        <Text text={description} variant="normal" />
      </div>
    </div>
  )
}
