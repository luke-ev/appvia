import { Typography } from "antd"
import { ReactNode } from "react"

interface Props {
  children: ReactNode
  title: string
}

const StepLayout = ({ children, title }: Props) => {
  return (
    <div className="flex flex-col w-full md:w-3/5">
      <Typography.Title level={2}>
        {title}
      </Typography.Title>
      {children}
    </div>
  )
}

export default StepLayout
