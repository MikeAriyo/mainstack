import MainstackLogo from "@/svgs/MainstackLogo";
import Navigation from "../nav/Navigation";

interface IDashboardLayout {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<IDashboardLayout> = ({ children }) => {
  return (
    <div className="md:mx-5">
      <div className="md:hidden flex justify-center items-center pt-4">
        <MainstackLogo />
      </div>
      <Navigation />

      <div className="px-12 py-8 md:px-40 md:py-20">{children}</div>
    </div>
  );
};

export default DashboardLayout;
