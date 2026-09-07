interface ISuccessIconProps {
  className?: string
}

export const SuccessIcon = ({ className }: ISuccessIconProps) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="12" fill="#BE9070" />
      <path
        d="M7.5 12.2L10.35 15L16.5 8.8"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
