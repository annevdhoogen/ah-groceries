"use client";

import * as contentful from "contentful-management";

const PUBLISH = true; // Set to false to easily delete content from Contentful

interface createAssetFromFilesProps {
  fileName: string;
  fileDescription: string;
  fileType: string;
  file: ArrayBuffer | string;
}

interface createEntryItemProps extends createAssetFromFilesProps {
  brand: string;
  category: string | null;
  fabric: string | null;
  notes: string | null;
  occasions: string[] | null;
  price: number | null;
  seasons: string[] | null;
  secondHand: boolean;
  size: string | null;
}

export const client = () => {
  return contentful
    .createClient({
      accessToken: process.env.CONTENTFUL_MANAGEMENET_TOKEN || "",
    })
    .getSpace(process.env.CONTENTFUL_SPACE_ID || "")
    .then((space) =>
      space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT || "")
    );
};

export const createAssetFromFiles = async ({
  fileName,
  fileDescription,
  fileType,
  file,
}: createAssetFromFilesProps) => {
  return client()
    .then((environment) =>
      environment.createAssetFromFiles({
        fields: {
          title: {
            "en-US": fileName,
          },
          description: {
            "en-US": fileDescription,
          },
          file: {
            "en-US": {
              contentType: fileType,
              fileName: fileName,
              file: file,
            },
          },
        },
      })
    )
    .then((asset) => asset.processForAllLocales())
    .then((asset) => {
      PUBLISH && asset.publish();
      return asset.sys.id;
    })
    .catch(console.error);
};

export interface createRecipeItemProps {
  title: string;
  subtitle: string;
  type: string;
  book: string;
  cheats: string[];
  pageNumber: number;
  days: number;
  lemonAmount: number;
  limeAmount: number;
  requiredProducts: string[];
  optionalProducts: string[];
  file: createAssetFromFilesProps;
}

export const createRecipeItem = async (data: createRecipeItemProps) => {
  const assetId = await createAssetFromFiles(data.file);

  return client()
    .then((environment) =>
      environment.createEntry("recipe", {
        fields: {
          title: {
            "en-US": data.title,
          },
          subtitle: {
            "en-US": data.subtitle,
          },
          type: {
            "en-US": data.type,
          },
          book: {
            "en-US": data.book,
          },
          cheatmeal: {
            "en-US": data.cheats,
          },
          pageNumber: {
            "en-US": data.pageNumber,
          },
          days: {
            "en-US": data.days,
          },
          lemonAmount: {
            "en-US": data.lemonAmount,
          },
          limeAmount: {
            "en-US": data.limeAmount,
          },
          products: {
            "en-US": data.requiredProducts?.map((product) => ({
              sys: {
                type: "Link",
                linkType: "Entry",
                id: product,
              },
            })),
          },
          optionalProducts: {
            "en-US": data.optionalProducts?.map((product) => ({
              sys: {
                type: "Link",
                linkType: "Entry",
                id: product,
              },
            })),
          },
          image: {
            "en-US": {
              sys: {
                type: "Link",
                linkType: "Asset",
                id: assetId,
              },
            },
          },
        },
      })
    )
    .then((entry) => {
      PUBLISH && entry.publish();
      return entry.sys.id;
    })
    .catch(console.error);
};
