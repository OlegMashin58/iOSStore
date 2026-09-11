interface IPlusIconProps {
  width?: string
  height?: string
  stroke?: string
  className?: string
}

export const PlusIcon = ({
  width = '24',
  height = '24',
  stroke = '#151515',
  className = '',
}: IPlusIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 5V19M5 12H19"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
