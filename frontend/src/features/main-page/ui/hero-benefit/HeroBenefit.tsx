import { Text } from '@shared/ui'

import styles from './heroBenefit.module.less'

interface IHeroBenefitProps {
  icon: string
  title: string
}

export const HeroBenefit = ({ icon, title }: IHeroBenefitProps) => {
  return (
    <div className={styles.heroBenefits}>
      <img src={icon} />
      <Text text={title} variant="normal" />
    </div>
  )
}
