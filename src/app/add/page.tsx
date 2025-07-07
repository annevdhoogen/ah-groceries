import { AddRecipe } from "@/components/addRecipe/addRecipe";
import { PageTitle } from "@/components/pageTitle/pageTitle";

export default async function Page() {
  return (
    <>
      <PageTitle title="Recept toevoegen" />
      <AddRecipe />
    </>
  );
}
