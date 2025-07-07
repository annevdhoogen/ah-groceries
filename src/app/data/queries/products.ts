import { graphql } from "@/generated";

export const ProductsQuery = graphql(`
  query Products {
    productCollection(limit: 100) {
      items {
        sys {
          id
        }
        title
        ahId
      }
    }
  }
`);
