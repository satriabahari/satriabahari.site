type ContainerProps = {
  children: React.ReactNode
  className?: string;
  [propName: string]: React.ReactNode | string | undefined;
}

export default function Container({children, className = "", ...others}: ContainerProps) {
  return (
    <div className={`mt-20 mb-10 lg:mt-0 p-8 ${className} `} {...others}>
      {children}
    </div>
  )
}
