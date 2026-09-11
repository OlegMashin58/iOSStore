import { Button, Text } from '@shared/ui'
import { RightArrowIcon } from '@assets/icons'
import { SelectedChip } from '../selected-chip/SelectedChip'
import type { ICatalogApps } from '@features/catalog/types'
import { getDeclinedWord } from '@shared/config/utils'
import { Dropdown } from 'antd'
import Overflow from 'rc-overflow'

import styles from './floatBar.module.less'

interface IFloatBarProps {
  count?: number
  selectedApps: ICatalogApps[]
  onClick: () => void
  onRemove: (id: string) => void
}

export const FloatBar = ({
  count,
  onClick,
  selectedApps,
  onRemove,
}: IFloatBarProps) => {
  return (
    <div className={styles.floatBar}>
      <div className={styles.leftContainer}>
        <Text
          variant="normal"
          text={`Выбрано: ${count} ${getDeclinedWord(Number(count), ['приложение', 'приложения', 'приложений'])}`}
        />

        <div className={styles.chipContainer}>
          <Overflow
            data={selectedApps}
            itemKey="id"
            maxCount="responsive"
            renderItem={(app) => (
              <SelectedChip
                appName={app.name}
                appLogo={app.icon}
                onRemove={() => onRemove(app.id)}
              />
            )}
            renderRest={(omittedApps) => (
              <Dropdown
                classNames={{ root: styles.dropdownRoot }}
                trigger={['click']}
                popupRender={() => (
                  <div className={styles.dropdownContent}>
                    {omittedApps.map((app) => (
                      <SelectedChip
                        key={app.id}
                        appName={app.name}
                        appLogo={app.icon}
                        onRemove={() => onRemove(app.id)}
                      />
                    ))}
                  </div>
                )}
              >
                <button className={styles.more}>+{omittedApps.length}</button>
              </Dropdown>
            )}
          />
        </div>
      </div>

      <Button
        onClick={onClick}
        view="primary"
        title={'Перейти к заказу'}
        icon={RightArrowIcon}
      />
    </div>
  )
}
