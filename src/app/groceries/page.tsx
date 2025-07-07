import { PageTitle } from "@/components/pageTitle/pageTitle";
import { WeekMenuOverview } from "@/components/weekMenuOverview/weekMenuOverview";

export default async function Page() {
  return (
    <>
      <PageTitle title="Boodschappen" />
      <WeekMenuOverview />
    </>
  );
}
