import { graphql } from "@/generated";

export const ProductFragment = graphql(`
  fragment ProductFragment on Product {
    sys {
      id
    }
    title
    ahId
  }
`);
