"use client";

import * as contentful from "contentful-management";

const PUBLISH = false; // Set to false to easily delete content from Contentful

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

export const createEntryItem = async ({
  brand,
  category,
  occasions,
  fabric,
  file,
  fileDescription,
  fileName,
  fileType,
  notes,
  price,
  seasons,
  secondHand,
  size,
}: createEntryItemProps) => {
  const assetId = await createAssetFromFiles({
    fileName,
    fileDescription,
    fileType,
    file,
  });

  client()
    .then((environment) =>
      environment.createEntry("item", {
        fields: {
          size: {
            "en-US": size,
          },
          price: {
            "en-US": price,
          },
          notes: {
            "en-US": notes,
          },
          secondHand: {
            "en-US": secondHand,
          },
          brand: {
            "en-US": {
              sys: {
                type: "Link",
                linkType: "Entry",
                id: brand,
              },
            },
          },
          season: {
            "en-US": seasons?.map((season) => ({
              sys: {
                type: "Link",
                linkType: "Entry",
                id: season,
              },
            })),
          },
          occasion: {
            "en-US": occasions?.map((occasion) => ({
              sys: {
                type: "Link",
                linkType: "Entry",
                id: occasion,
              },
            })),
          },
          fabric: {
            "en-US": {
              sys: {
                type: "Link",
                linkType: "Entry",
                id: fabric,
              },
            },
          },
          category: {
            "en-US": {
              sys: {
                type: "Link",
                linkType: "Entry",
                id: category,
              },
            },
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
    })
    .catch(console.error);
};

export const createSimpleEntry = async (type: string, title: string) => {
  return client()
    .then((environment) =>
      environment.createEntry(type, {
        fields: {
          title: {
            "en-US": title,
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
