import { useState } from 'react'
import { AccordionItem } from './AccordionItem'

import styles from './styles.module.css'

export interface Step {
  id: number
  title: string
  description: string
  image?: string
}

interface AccordionProps {
  steps: Step[]
}

export const Accordion = ({ steps }: AccordionProps) => {
  const [openSteps, setOpenSteps] = useState<Set<number>>(new Set())

  const handleToggle = (stepId: number) => {
    setOpenSteps((prev) => {
      const next = new Set(prev)
      if (next.has(stepId)) {
        next.delete(stepId)
      } else {
        next.add(stepId)
      }
      return next
    })
  }

  return (
    <div className={styles.accordion}>
      {steps.map((step, index) => (
        <AccordionItem
          key={step.id}
          step={step.id}
          title={step.title}
          description={step.description}
          isActive={openSteps.has(step.id)}
          isLast={index === steps.length - 1}
          onToggle={() => handleToggle(step.id)}
          image={step.image}
        />
      ))}
    </div>
  )
}
