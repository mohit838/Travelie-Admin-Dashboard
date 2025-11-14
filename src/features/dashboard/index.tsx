import EntityPage from "@/shared/components/custom-entity-page/entity-page";
import MainDashboard from "./components/dashboard";
import { DASHBOARD_BREADCRUMBS } from "./constant";

const DashboardIndexPage = () => {
  return (
    <EntityPage title="" breadcrumbs={DASHBOARD_BREADCRUMBS}>
      <MainDashboard />
    </EntityPage>
  );
};

export default DashboardIndexPage;
