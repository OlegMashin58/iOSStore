import { useRef, useEffect, useState } from 'react'

import styles from './styles.module.css'
import { StepItem } from '@features/guide-page/ui/stage-item/StepItem'

interface AccordionItemProps {
  step: number
  title: string
  description: string
  isActive: boolean
  isLast: boolean
  onToggle: () => void
  image?: string
}

export const AccordionItem = ({
  step,
  title,
  description,
  isActive,
  isLast,
  onToggle,
  image,
}: AccordionItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isActive ? contentRef.current.scrollHeight : 0)
    }
  }, [isActive])

  return (
    <div className={styles.item}>
      {/* Таймлайн */}
      <div className={styles.timeline}>
        <div
          className={`${styles.stepNumber} ${isActive ? styles.active : ''}`}
        >
          {step}
        </div>
        {!isLast && <div className={styles.line} />}
      </div>

      {/* Контент */}
      <div className={styles.content}>
        <button
          className={`${styles.header} ${isActive ? styles.headerActive : ''}`}
          onClick={onToggle}
        >
          <div className={styles.headerText}>
            {!isActive && (
              <>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.subtitle}>{description}</p>{' '}
              </>
            )}
          </div>

          <svg
            className={`${styles.chevron} ${isActive ? styles.chevronOpen : ''}`}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className={styles.body} style={{ maxHeight: height }}>
          <div ref={contentRef} className={styles.bodyInner}>
            <StepItem
              step={step}
              title={title}
              description={description}
              image={image}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
