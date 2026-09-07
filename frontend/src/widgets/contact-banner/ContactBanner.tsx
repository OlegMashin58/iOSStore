import { Divider, Text } from '@shared/ui'
import { CONTACT_BUTTONS, PHONE_OPTIONS } from './config/consts'
import { LinkButton, PhoneTag } from './ui'

import styles from './contactBanner.module.less'

export const ContactBanner = () => {
  const renderSocialButtons = () => {
    return CONTACT_BUTTONS.map((item) => (
      <LinkButton
        id={item.id}
        icon={item.icon}
        link={item.link}
        messengerName={item.messengerName}
        nickName={item.nickName}
      />
    ))
  }

  const renderPhoneTags = () => {
    return PHONE_OPTIONS.map((phone) => (
      <PhoneTag id={phone.id} number={phone.number} label={phone.label} />
    ))
  }

  return (
    <div className={styles.contactBannerContainer}>
      <div className={styles.rightContainer}>
        <Text variant="hero" text={'Связь со мной'} />

        <Text
          variant="normal"
          text={
            <p>
              Вы можете написать мне в мессенджерах <br /> или позвонить по
              телефону.
            </p>
          }
        />

        <div className={styles.phonesContainer}>{renderPhoneTags()}</div>
      </div>

      <Divider variant="vertical" />

      <div className={styles.leftContainer}>
        <div className={styles.textContainer}>
          <Text variant="title" text={'Я в соцсетях'} />
          <Text variant="normal" text={'Пишите и задавайте вопросы'} />
        </div>
        <div className={styles.socialButtonsContainer}>
          {renderSocialButtons()}
        </div>
      </div>
    </div>
  )
}
