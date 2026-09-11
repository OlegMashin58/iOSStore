import { steps } from '@features/guide-page/consts'
import { FeatureBanner, HeroBlock } from '@shared/ui'
import { Accordion } from '@shared/ui/accordion/Accordion'

import styles from './guidePage.module.less'

export const GuidePage = () => {
  return (
    <>
      <HeroBlock
        title={
          <p>
            Инструкция по установке <br /> приложения на iPhone
          </p>
        }
        description={
          'Следуйте пошаговой инструкции, чтобы установить приложение на ваш iPhone'
        }
      />
      <div className={styles.guidePageContainer}>
        <Accordion steps={steps} />
        <FeatureBanner />
      </div>
    </>
  )
}
