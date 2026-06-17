import DashboardMembership from "@/components/dashboard/membership";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Dashboard Membership Epyra - Real Estate React Next js",
};
const index = () => {
   return (
      <Wrapper>
         <DashboardMembership />
      </Wrapper>
   )
}

export default index