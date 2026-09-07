type DeclensionForms = [string, string, string]

export const getDeclinedWord = (
  value: number,
  forms: DeclensionForms,
): string => {
  const normalizedValue = Math.abs(value) % 100
  const lastDigit = normalizedValue % 10

  if (normalizedValue > 10 && normalizedValue < 20) {
    return forms[2]
  }

  if (lastDigit > 1 && lastDigit < 5) {
    return forms[1]
  }

  if (lastDigit === 1) {
    return forms[0]
  }

  return forms[2]
}
