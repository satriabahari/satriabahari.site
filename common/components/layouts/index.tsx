import Sidebar from "./sidebar";

type LayoutsProps = {
  children: React.ReactNode;
};

export default function Layouts({ children }: LayoutsProps) {
  return (
    <div className="flex w-full">
      <Sidebar />
      <main className="w-4/5 p-4">{children}</main>
    </div>
  );
}
