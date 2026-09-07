import { Text } from '@shared/ui'

import styles from './stepTag.module.less'

interface IStepTagProps {
  step: number
}

export const StepTag = ({ step }: IStepTagProps) => {
  return (
    <div className={styles.tagContainer}>
      <Text text={`Шаг ${step}`} variant="small" />
    </div>
  )
}
