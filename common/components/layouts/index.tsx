import Sidebar from "./sidebar";

type LayoutsProps = {
  children: React.ReactNode;
};

export default function Layouts({ children }: LayoutsProps) {
  return (
    <div className="px-12">
      <div className="flex gap-5 py-4">
        <Sidebar />
        <main className="w-4/5">{children}</main>
      </div>
    </div>
  );
}
