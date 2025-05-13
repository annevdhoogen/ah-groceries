/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: { input: any; output: any; }
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: { input: any; output: any; }
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: { input: any; output: any; }
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: { input: any; output: any; }
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  __typename: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  recipeCollection?: Maybe<RecipeCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsRecipeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export type ContentfulMetadata = {
  __typename: 'ContentfulMetadata';
  concepts: Array<Maybe<TaxonomyConcept>>;
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataConceptsDescendantsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataConceptsFilter = {
  descendants?: InputMaybe<ContentfulMetadataConceptsDescendantsFilter>;
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataFilter = {
  concepts?: InputMaybe<ContentfulMetadataConceptsFilter>;
  concepts_exists?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *       Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/gyyzqz4qo3su/content_types/product) */
export type Product = Entry & _Node & {
  __typename: 'Product';
  _id: Scalars['ID']['output'];
  ahId?: Maybe<Scalars['Int']['output']>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ProductLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/gyyzqz4qo3su/content_types/product) */
export type ProductAhIdArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gyyzqz4qo3su/content_types/product) */
export type ProductLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/gyyzqz4qo3su/content_types/product) */
export type ProductTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ProductCollection = {
  __typename: 'ProductCollection';
  items: Array<Maybe<Product>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ProductFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProductFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProductFilter>>>;
  ahId?: InputMaybe<Scalars['Int']['input']>;
  ahId_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ahId_gt?: InputMaybe<Scalars['Int']['input']>;
  ahId_gte?: InputMaybe<Scalars['Int']['input']>;
  ahId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  ahId_lt?: InputMaybe<Scalars['Int']['input']>;
  ahId_lte?: InputMaybe<Scalars['Int']['input']>;
  ahId_not?: InputMaybe<Scalars['Int']['input']>;
  ahId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProductLinkingCollections = {
  __typename: 'ProductLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  recipeCollection?: Maybe<RecipeCollection>;
};


export type ProductLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ProductLinkingCollectionsRecipeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ProductLinkingCollectionsRecipeCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ProductLinkingCollectionsRecipeCollectionOrder {
  BookAsc = 'book_ASC',
  BookDesc = 'book_DESC',
  DaysAsc = 'days_ASC',
  DaysDesc = 'days_DESC',
  LemonAmountAsc = 'lemonAmount_ASC',
  LemonAmountDesc = 'lemonAmount_DESC',
  LimeAmountAsc = 'limeAmount_ASC',
  LimeAmountDesc = 'limeAmount_DESC',
  PageNumberAsc = 'pageNumber_ASC',
  PageNumberDesc = 'pageNumber_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum ProductOrder {
  AhIdAsc = 'ahId_ASC',
  AhIdDesc = 'ahId_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Query = {
  __typename: 'Query';
  _node?: Maybe<_Node>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  entryCollection?: Maybe<EntryCollection>;
  product?: Maybe<Product>;
  productCollection?: Maybe<ProductCollection>;
  recipe?: Maybe<Recipe>;
  recipeCollection?: Maybe<RecipeCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryProductArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ProductOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductFilter>;
};


export type QueryRecipeArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryRecipeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<RecipeOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RecipeFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/gyyzqz4qo3su/content_types/recipe) */
export type Recipe = Entry & _Node & {
  __typename: 'Recipe';
  _id: Scalars['ID']['output'];
  book?: Maybe<Scalars['String']['output']>;
  cheatmeal?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  contentfulMetadata: ContentfulMetadata;
  days?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Asset>;
  lemonAmount?: Maybe<Scalars['Int']['output']>;
  limeAmount?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<RecipeLinkingCollections>;
  optionalProductsCollection?: Maybe<RecipeOptionalProductsCollection>;
  pageNumber?: Maybe<Scalars['Int']['output']>;
  productsCollection?: Maybe<RecipeProductsCollection>;
  subtitle?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/gyyzqz4qo3su/content_types/recipe) */
export type RecipeBookArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gyyzqz4qo3su/content_types/recipe) */
export type RecipeCheatmealArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gyyzqz4qo3su/content_types/recipe) */
export type RecipeDaysArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gyyzqz4qo3su/content_types/recipe) */
export type RecipeImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gyyzqz4qo3su/content_types/recipe) */
export type RecipeLemonAmountArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gyyzqz4qo3su/content_types/recipe) */
export type RecipeLimeAmountArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gyyzqz4qo3su/content_types/recipe) */
export type RecipeLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/gyyzqz4qo3su/content_types/recipe) */
export type RecipeOptionalProductsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<RecipeOptionalProductsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/gyyzqz4qo3su/content_types/recipe) */
export type RecipePageNumberArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gyyzqz4qo3su/content_types/recipe) */
export type RecipeProductsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<RecipeProductsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/gyyzqz4qo3su/content_types/recipe) */
export type RecipeSubtitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gyyzqz4qo3su/content_types/recipe) */
export type RecipeTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/gyyzqz4qo3su/content_types/recipe) */
export type RecipeTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type RecipeCollection = {
  __typename: 'RecipeCollection';
  items: Array<Maybe<Recipe>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type RecipeFilter = {
  AND?: InputMaybe<Array<InputMaybe<RecipeFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<RecipeFilter>>>;
  book?: InputMaybe<Scalars['String']['input']>;
  book_contains?: InputMaybe<Scalars['String']['input']>;
  book_exists?: InputMaybe<Scalars['Boolean']['input']>;
  book_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  book_not?: InputMaybe<Scalars['String']['input']>;
  book_not_contains?: InputMaybe<Scalars['String']['input']>;
  book_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cheatmeal_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cheatmeal_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cheatmeal_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cheatmeal_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  days?: InputMaybe<Scalars['Int']['input']>;
  days_exists?: InputMaybe<Scalars['Boolean']['input']>;
  days_gt?: InputMaybe<Scalars['Int']['input']>;
  days_gte?: InputMaybe<Scalars['Int']['input']>;
  days_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  days_lt?: InputMaybe<Scalars['Int']['input']>;
  days_lte?: InputMaybe<Scalars['Int']['input']>;
  days_not?: InputMaybe<Scalars['Int']['input']>;
  days_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  lemonAmount?: InputMaybe<Scalars['Int']['input']>;
  lemonAmount_exists?: InputMaybe<Scalars['Boolean']['input']>;
  lemonAmount_gt?: InputMaybe<Scalars['Int']['input']>;
  lemonAmount_gte?: InputMaybe<Scalars['Int']['input']>;
  lemonAmount_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lemonAmount_lt?: InputMaybe<Scalars['Int']['input']>;
  lemonAmount_lte?: InputMaybe<Scalars['Int']['input']>;
  lemonAmount_not?: InputMaybe<Scalars['Int']['input']>;
  lemonAmount_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  limeAmount?: InputMaybe<Scalars['Int']['input']>;
  limeAmount_exists?: InputMaybe<Scalars['Boolean']['input']>;
  limeAmount_gt?: InputMaybe<Scalars['Int']['input']>;
  limeAmount_gte?: InputMaybe<Scalars['Int']['input']>;
  limeAmount_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  limeAmount_lt?: InputMaybe<Scalars['Int']['input']>;
  limeAmount_lte?: InputMaybe<Scalars['Int']['input']>;
  limeAmount_not?: InputMaybe<Scalars['Int']['input']>;
  limeAmount_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  optionalProducts?: InputMaybe<CfProductNestedFilter>;
  optionalProductsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageNumber?: InputMaybe<Scalars['Int']['input']>;
  pageNumber_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  pageNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  pageNumber_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  pageNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  pageNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  pageNumber_not?: InputMaybe<Scalars['Int']['input']>;
  pageNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  products?: InputMaybe<CfProductNestedFilter>;
  productsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type RecipeLinkingCollections = {
  __typename: 'RecipeLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type RecipeLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type RecipeOptionalProductsCollection = {
  __typename: 'RecipeOptionalProductsCollection';
  items: Array<Maybe<Product>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum RecipeOptionalProductsCollectionOrder {
  AhIdAsc = 'ahId_ASC',
  AhIdDesc = 'ahId_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum RecipeOrder {
  BookAsc = 'book_ASC',
  BookDesc = 'book_DESC',
  DaysAsc = 'days_ASC',
  DaysDesc = 'days_DESC',
  LemonAmountAsc = 'lemonAmount_ASC',
  LemonAmountDesc = 'lemonAmount_DESC',
  LimeAmountAsc = 'limeAmount_ASC',
  LimeAmountDesc = 'limeAmount_DESC',
  PageNumberAsc = 'pageNumber_ASC',
  PageNumberDesc = 'pageNumber_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export type RecipeProductsCollection = {
  __typename: 'RecipeProductsCollection';
  items: Array<Maybe<Product>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum RecipeProductsCollectionOrder {
  AhIdAsc = 'ahId_ASC',
  AhIdDesc = 'ahId_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Sys = {
  __typename: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  /** The locale that was requested. */
  locale?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *         Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-concepts
 */
export type TaxonomyConcept = {
  __typename: 'TaxonomyConcept';
  id?: Maybe<Scalars['String']['output']>;
};

export type _Node = {
  _id: Scalars['ID']['output'];
};

export type CfProductNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfProductNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfProductNestedFilter>>>;
  ahId?: InputMaybe<Scalars['Int']['input']>;
  ahId_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ahId_gt?: InputMaybe<Scalars['Int']['input']>;
  ahId_gte?: InputMaybe<Scalars['Int']['input']>;
  ahId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  ahId_lt?: InputMaybe<Scalars['Int']['input']>;
  ahId_lte?: InputMaybe<Scalars['Int']['input']>;
  ahId_not?: InputMaybe<Scalars['Int']['input']>;
  ahId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProductFragmentFragment = { __typename: 'Product', title?: string | null, ahId?: number | null, sys: { __typename: 'Sys', id: string } };

export type RecipeFragmentFragment = { __typename: 'Recipe', title?: string | null, subtitle?: string | null, type?: string | null, book?: string | null, pageNumber?: number | null, days?: number | null, cheatmeal?: Array<string | null> | null, lemonAmount?: number | null, limeAmount?: number | null, sys: { __typename: 'Sys', id: string }, image?: { __typename: 'Asset', url?: string | null, width?: number | null, height?: number | null, sys: { __typename: 'Sys', id: string } } | null, productsCollection?: { __typename: 'RecipeProductsCollection', items: Array<{ __typename: 'Product', title?: string | null, ahId?: number | null, sys: { __typename: 'Sys', id: string } } | null> } | null, optionalProductsCollection?: { __typename: 'RecipeOptionalProductsCollection', items: Array<{ __typename: 'Product', title?: string | null, ahId?: number | null, sys: { __typename: 'Sys', id: string } } | null> } | null };

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = { __typename: 'Query', productCollection?: { __typename: 'ProductCollection', items: Array<{ __typename: 'Product', title?: string | null, ahId?: number | null, sys: { __typename: 'Sys', id: string } } | null> } | null };

export type RecipeQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type RecipeQuery = { __typename: 'Query', recipe?: { __typename: 'Recipe', title?: string | null, subtitle?: string | null, type?: string | null, book?: string | null, pageNumber?: number | null, days?: number | null, cheatmeal?: Array<string | null> | null, lemonAmount?: number | null, limeAmount?: number | null, sys: { __typename: 'Sys', id: string }, image?: { __typename: 'Asset', url?: string | null, width?: number | null, height?: number | null, sys: { __typename: 'Sys', id: string } } | null, productsCollection?: { __typename: 'RecipeProductsCollection', items: Array<{ __typename: 'Product', title?: string | null, ahId?: number | null, sys: { __typename: 'Sys', id: string } } | null> } | null, optionalProductsCollection?: { __typename: 'RecipeOptionalProductsCollection', items: Array<{ __typename: 'Product', title?: string | null, ahId?: number | null, sys: { __typename: 'Sys', id: string } } | null> } | null } | null };

export type RecipeOverviewQueryVariables = Exact<{ [key: string]: never; }>;


export type RecipeOverviewQuery = { __typename: 'Query', recipeCollection?: { __typename: 'RecipeCollection', items: Array<{ __typename: 'Recipe', title?: string | null, subtitle?: string | null, type?: string | null, book?: string | null, pageNumber?: number | null, days?: number | null, cheatmeal?: Array<string | null> | null, lemonAmount?: number | null, limeAmount?: number | null, sys: { __typename: 'Sys', id: string }, image?: { __typename: 'Asset', url?: string | null, width?: number | null, height?: number | null, sys: { __typename: 'Sys', id: string } } | null, productsCollection?: { __typename: 'RecipeProductsCollection', items: Array<{ __typename: 'Product', title?: string | null, ahId?: number | null, sys: { __typename: 'Sys', id: string } } | null> } | null, optionalProductsCollection?: { __typename: 'RecipeOptionalProductsCollection', items: Array<{ __typename: 'Product', title?: string | null, ahId?: number | null, sys: { __typename: 'Sys', id: string } } | null> } | null } | null> } | null };

export const ProductFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"ahId"}}]}}]} as unknown as DocumentNode<ProductFragmentFragment, unknown>;
export const RecipeFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecipeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Recipe"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"book"}},{"kind":"Field","name":{"kind":"Name","value":"pageNumber"}},{"kind":"Field","name":{"kind":"Name","value":"days"}},{"kind":"Field","name":{"kind":"Name","value":"cheatmeal"}},{"kind":"Field","name":{"kind":"Name","value":"productsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"40"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"optionalProductsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"40"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lemonAmount"}},{"kind":"Field","name":{"kind":"Name","value":"limeAmount"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"ahId"}}]}}]} as unknown as DocumentNode<RecipeFragmentFragment, unknown>;
export const ProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"ahId"}}]}}]}}]}}]} as unknown as DocumentNode<ProductsQuery, ProductsQueryVariables>;
export const RecipeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Recipe"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recipe"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecipeFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"ahId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecipeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Recipe"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"book"}},{"kind":"Field","name":{"kind":"Name","value":"pageNumber"}},{"kind":"Field","name":{"kind":"Name","value":"days"}},{"kind":"Field","name":{"kind":"Name","value":"cheatmeal"}},{"kind":"Field","name":{"kind":"Name","value":"productsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"40"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"optionalProductsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"40"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lemonAmount"}},{"kind":"Field","name":{"kind":"Name","value":"limeAmount"}}]}}]} as unknown as DocumentNode<RecipeQuery, RecipeQueryVariables>;
export const RecipeOverviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RecipeOverview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recipeCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecipeFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"ahId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecipeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Recipe"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"book"}},{"kind":"Field","name":{"kind":"Name","value":"pageNumber"}},{"kind":"Field","name":{"kind":"Name","value":"days"}},{"kind":"Field","name":{"kind":"Name","value":"cheatmeal"}},{"kind":"Field","name":{"kind":"Name","value":"productsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"40"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"optionalProductsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"40"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lemonAmount"}},{"kind":"Field","name":{"kind":"Name","value":"limeAmount"}}]}}]} as unknown as DocumentNode<RecipeOverviewQuery, RecipeOverviewQueryVariables>;