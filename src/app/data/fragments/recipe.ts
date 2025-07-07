import { graphql } from "@/generated";

export const RecipeFragment = graphql(`
  fragment RecipeFragment on Recipe {
    sys {
      id
    }
    title
    subtitle
    type
    image {
      sys {
        id
      }
      url
      width
      height
    }
    book
    pageNumber
    days
    cheatmeal
    productsCollection(limit: 40) {
      items {
        ...ProductFragment
      }
    }
    optionalProductsCollection(limit: 40) {
      items {
        ...ProductFragment
      }
    }
    lemonAmount
    limeAmount
    calories
    carbs
    protein
    fat
    description {
      json
    }
  }
`);
