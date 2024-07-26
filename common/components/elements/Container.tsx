interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  [propName: string]: React.ReactNode | string | undefined;
}

const Container = ({ children, className = "", ...others }: ContainerProps) => {
  return (
    <div className={`mt-20 p-8 lg:mt-0 ${className} `} {...others}>
      {children}
    </div>
  );
};

export default Container;
