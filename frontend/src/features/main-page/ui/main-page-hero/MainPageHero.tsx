import { Text } from '@shared/ui'
import { HeroBenefit } from '../hero-benefit/HeroBenefit'
import { BENEFITS_OPTIONS } from '@features/main-page/constants'

import styles from './mainPageHero.module.less'

const TEXTS = {
  TITLE: 'Приложения для вашего IPhone',
  DESCRIPTION:
    'Безопасная установка недоступных приложений, моментальная доставка и поддержка 24/7.',
}

export const MainPageHero = () => {
  const renderBenefits = () => {
    return BENEFITS_OPTIONS.map((benefit) => (
      <HeroBenefit icon={benefit.icon} title={benefit.title} />
    ))
  }

  return (
    <div className={styles.mainPageHero}>
      <div className={styles.textContainer}>
        <Text variant="hero" text={TEXTS.TITLE} />
        <Text variant="normal" text={TEXTS.DESCRIPTION} />
      </div>

      {renderBenefits()}
    </div>
  )
}
