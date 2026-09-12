interface IDownloadIconProps {
  width?: string
  height?: string
  stroke?: string
  className?: string
}

export const DownloadIcon = ({
  width = '24',
  height = '24',
  stroke = '#151515',
  className = '',
}: IDownloadIconProps) => {
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
        d="M12 4V17M18 11L12 17L6 11M6 20H18"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
