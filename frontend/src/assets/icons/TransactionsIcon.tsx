interface ITransactionsIconProps {
  width?: string
  height?: string
  className?: string
  fill?: string
}

export const TransactionsIcon = ({
  width = '24px',
  height = '24px',
  className = '',
  fill = '#000',
}: ITransactionsIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3 8C3 6.34315 4.34315 5 6 5H18C19.6569 5 21 6.34315 21 8V16C21 17.6569 19.6569 19 18 19H6C4.34315 19 3 17.6569 3 16V8Z"
        stroke={fill}
        strokeWidth="2"
      />
      <path d="M3 10H21" stroke={fill} strokeWidth="2" />
      <path
        d="M14 15L17 15"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
