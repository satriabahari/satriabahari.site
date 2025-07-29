export type ServiceProps = {
  color: string;
  title: string;
  description: string;
  label: string;
  children: React.ReactNode;
  icon?: JSX.Element;
  className?: string;
  isShow?: boolean;
};
