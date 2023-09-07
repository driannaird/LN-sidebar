import Sidebar from "../elements/sidebar";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="px-12 py-8">{children}</div>
    </div>
  );
};

export default PageLayout;
