import { Text } from '../../shared/ui'

export const BrokenLink = () => {
  return (
    <div>
      <Text variant="hero" text={'Ссылка устарела'} />

      <Text
        variant="normal"
        text={
          'Срок действия этой ссылки истёк или она была отозвана. Запросите новую ссылку у отправителя.'
        }
      />
    </div>
  )
}
