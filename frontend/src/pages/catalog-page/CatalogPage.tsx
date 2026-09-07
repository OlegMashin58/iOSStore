import { CATALOG_APPS } from '@features/catalog/consts'
import { CatalogCard } from '@features/catalog/ui/catalog-card/CatalogCard'
import { FeatureBanner, HeroBlock } from '@shared/ui'
import { Footer, Header } from '@widgets'

import styles from './catalogPage.module.less'
import { useMemo, useState } from 'react'
import { FloatBar } from '@features/catalog/ui/float-bar/FloatBar'

const TEXT_CONSTANTS = {
  TITLE: 'Каталог приложений',
  DESCRIPTION:
    'Скачивайте недоступные приложения для IPhone. Без подписок и скрытых платежей.',
}

export const CatalogPage = () => {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())

  const toggleCard = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const selectedApps = useMemo(
    () => CATALOG_APPS.filter((app) => selectedIds.has(app.id)),
    [selectedIds],
  )

  const handleOrder = async () => {
    const appNames = selectedApps.map((app) => app.name).join(', ')
    // Формируем красивое сообщение
    const message = `Здравствуйте! Хочу заказать следующие приложения: ${appNames}.\nПодскажите, пожалуйста, актуально ли объявление и возможна ли доставка?`

    // 1. Копируем в буфер
    try {
      await navigator.clipboard.writeText(message)
      alert('Сообщение скопировано! Перейдите в чат и вставьте его (Ctrl+V).')
    } catch (err) {
      console.error('Не удалось скопировать текст', err)
      // Фолбэк для старых браузеров или если нет прав
      alert('Скопируйте текст вручную:\n\n' + message)
    }

    // 2. Открываем чат на Авито
    // ВАЖНО: itemId должен быть реальным ID объявления продавца
    const avitoItemId = '123456789' // <-- ЗАМЕНИ НА РЕАЛЬНЫЙ ID
    const link = `https://www.avito.ru/profile/messenger/channel/u2i-cb_VlX7YqSfcCDJJAUmjlA`
    window.open(link, '_blank')
  }

  const handleClear = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev)
      next.delete(id)
      return next
    })
  }

  const hasSelected = selectedApps.length > 0

  console.log('selectedApps', selectedApps)

  const catalogList = () => {
    return CATALOG_APPS.map((app) => (
      <CatalogCard
        icon={app.icon}
        name={app.name}
        id={app.id}
        type={app.type}
        selected={selectedIds.has(app.id)}
        onToggle={toggleCard}
      />
    ))
  }

  return (
    <>
      <Header />
      <HeroBlock
        title={TEXT_CONSTANTS.TITLE}
        description={TEXT_CONSTANTS.DESCRIPTION}
      />
      <div className={styles.catalogPage}>
        <div className={styles.catalogListContainer}>
          {catalogList()}

          {hasSelected && (
            <FloatBar
              onClick={handleOrder}
              count={selectedApps.length}
              selectedApps={selectedApps}
              onRemove={handleClear}
            />
          )}
        </div>
        <FeatureBanner />
      </div>

      <Footer />
    </>
  )
}
