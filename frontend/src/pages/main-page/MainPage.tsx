import { ContactBanner, Footer, Header } from '@widgets'

import styles from './mainPage.module.less'
import { MainPageHero } from '@features/main-page/ui'

export const MainPage = () => {
  return (
    <div className={styles.mainPageContainer}>
      <Header />

      <MainPageHero />

      <ContactBanner />
      <Footer />
    </div>
  )
}
