import { PageTitle } from "@components/pageTitle/pageTitle";
import { fetcher } from "@/utils/fetcher";
import { RecipeOverviewQuery } from "@/data/queries/recipeOverview";
import { recipeOverviewAdapter } from "@/data/adapters/recipeOverview";
import RecipeOverview from "@/components/recipeOverview/recipeOverview";

export default async function Page() {
  const data = await recipeOverviewAdapter(await fetcher(RecipeOverviewQuery));

  // order recipes by title
  data.recipes.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });

  return (
    <>
      <PageTitle title="Alle recepten" />
      <RecipeOverview recipes={data.recipes} />
    </>
  );
}
