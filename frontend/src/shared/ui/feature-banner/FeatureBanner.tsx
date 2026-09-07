import { FeatureItem } from './ui'
import { FEATURE_OPTIONS } from './config/consts'

import styles from './featureBunner.module.less'

export const FeatureBanner = () => {
  const renderFeatures = () => {
    return FEATURE_OPTIONS.map((feature) => (
      <FeatureItem
        title={feature.title}
        icon={feature.icon}
        description={feature.description}
      />
    ))
  }

  return <div className={styles.featureBannerContainer}>{renderFeatures()}</div>
}
