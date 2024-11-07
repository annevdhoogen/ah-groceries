import { PageTitle } from "@components/pageTitle/pageTitle";
import { ROUTES } from "@/constants/routes";
import { fetcher } from "@/utils/fetcher";
import { Recipe } from "@/components/recipe/recipe";
import { recipeAdapter } from "@/data/adapters/recipe";
import { RecipeQuery } from "@/data/queries/recipe";

export default async function Page({ params }: { params: { id: string } }) {
  const data = await recipeAdapter(
    await fetcher(RecipeQuery, { id: params.id })
  );

  const { title, type } = data;

  return (
    <>
      <PageTitle
        title={`${type}: ${title}`}
        items={[{ label: "⬅️", href: ROUTES.recipes }]}
      />
      <Recipe {...data} />
    </>
  );
}
