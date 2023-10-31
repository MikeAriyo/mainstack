import Navigation from "../nav/Navigation";

interface IDashboardLayout {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<IDashboardLayout> = ({ children }) => {
  return (
    <div className="mx-5">
      <Navigation />

      <div className="px-40 py-20">{children}</div>
    </div>
  );
};

export default DashboardLayout;
