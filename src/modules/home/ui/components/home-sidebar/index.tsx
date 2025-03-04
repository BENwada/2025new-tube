import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import MainSection from "./main-section";

const HomeSidebar = () => {
  return (
    <Sidebar>
      <SidebarContent className="bg-background">
        <MainSection />
      </SidebarContent>
    </Sidebar>
  );
};

export default HomeSidebar;
