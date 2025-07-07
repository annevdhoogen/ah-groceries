"use client";

import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { Input, Select } from "@/components/formElements/formElements";
import * as styles from "./addRecipe.css";
import { BOOKS, CHEATS, TYPES } from "@/constants/types";
import { Button } from "@/components/button/button";
import { fetcher } from "@/utils/fetcher";
import { ProductsQuery } from "@/data/queries/products";
import { productsAdapter } from "@/data/adapters/products";
import { createRecipeItem } from "@/utils/client";

export interface ProductsProps {
  items: {
    sys: {
      id: string;
    };
    title: string;
    ahId: number;
  }[];
}

export const AddRecipe = () => {
  const [isLoading, setIsLoading] = useState(false);

  // image
  const [imageArrayBuffer, setImageArrayBuffer] = useState<
    string | ArrayBuffer
  >();
  const [imageName, setImageName] = useState("");
  const [imageType, setImageType] = useState("");
  const [imagePreview, setImagePreview] = useState<string | undefined>();
  const imageInputRef = useRef<HTMLInputElement>(null);

  // products
  const [allProducts, setAllProducts] = useState<ProductsProps>({ items: [] });
  const [requiredProducts, setRequiredProducts] = useState<ProductsProps>({
    items: [],
  });
  const [optionalProducts, setOptionalProducts] = useState<ProductsProps>({
    items: [],
  });

  useEffect(() => {
    fetcher(ProductsQuery)
      .then((data) => productsAdapter(data))
      .then((data) => setAllProducts(data));
  }, []);

  const onImageChange = () => {
    const imageValue = imageInputRef.current?.files?.[0];
    const reader = new FileReader();
    const imageType = imageValue?.type || "";
    const imageName = imageValue?.name || "";

    reader.onload = () => {
      const imgArr = reader.result || "";
      const blob = new Blob([imgArr], { type: imageType });
      const urlCreator = window.URL || window.webkitURL;
      const imageUrl = urlCreator.createObjectURL(blob);

      setImageArrayBuffer(imgArr);
      setImageName(imageName);
      setImageType(imageType);
      setImagePreview(imageUrl);
    };

    imageValue && reader.readAsArrayBuffer(imageValue);
  };

  const submitForm = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      title: formData.get("title") as string,
      subtitle: formData.get("subtitle") as string,
      type: formData.get("type") as string,
      book: formData.get("book") as string,
      cheats: formData.getAll("cheats") as string[],
      pageNumber: parseInt(formData.get("pageNumber") as string, 10),
      days: parseInt(formData.get("days") as string, 10),
      lemonAmount: parseInt(formData.get("lemonAmount") as string, 10),
      limeAmount: parseInt(formData.get("limeAmount") as string, 10),
      requiredProducts: requiredProducts.items.map((product) => product.sys.id),
      optionalProducts: optionalProducts.items.map((product) => product.sys.id),
      file: {
        fileName: imageName,
        fileDescription: imageName,
        fileType: imageType,
        file: imageArrayBuffer || "",
      },
    };

    setIsLoading(true);

    await createRecipeItem(data);

    setIsLoading(false);

    console.log("TODO: show message");
    // router.push(ROUTES.recipes);
  };

  const renderProductSelection = (
    id: string,
    label: string,
    productList: ProductsProps,
    setProductList: Dispatch<SetStateAction<ProductsProps>>
  ) => {
    return (
      <>
        <Select
          id={id}
          label={label}
          onChange={(event) => {
            const selectedProductId = event.target.value;
            const selectedProduct = allProducts.items.find(
              (product) => product.sys.id === selectedProductId
            );

            if (selectedProduct) {
              event.target.value = "";
              setProductList((prev) => ({
                items: [...prev.items, selectedProduct],
              }));
            }
          }}
        >
          <option value="">Selecteer een product</option>
          {allProducts.items.map((product) => (
            <option
              key={`to-add-${id}-${product.sys.id}`}
              value={product.sys.id}
            >
              {product.title}
            </option>
          ))}
        </Select>
        {productList.items.length > 0 && (
          <ul>
            {productList.items.map((product) => {
              return (
                <li key={`added-${id}-${product.sys.id}-${Math.random()}`}>
                  {product.title}
                  <Button
                    variant="ghost"
                    icon
                    label="x"
                    onClick={() =>
                      setProductList((prev) => ({
                        items: prev.items.filter(
                          (item) => item.sys.id !== product.sys.id
                        ),
                      }))
                    }
                  />
                </li>
              );
            })}
          </ul>
        )}
      </>
    );
  };

  return null; // TEMP

  return (
    <form className={styles.form} onSubmit={(e) => submitForm(e)}>
      <div className={styles.mainItems}>
        <Input required id="title" label="Titel" />
        <Input id="subtitle" label="Subtitle" />
        <Input
          id="image"
          type="file"
          label="Foto"
          accept="image/jpg, image/jpeg, image/png"
          onChange={() => onImageChange()}
          innerRef={imageInputRef}
        />
        {imagePreview && (
          <div className={styles.imagePreviewContainer}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imagePreview}
              alt={imageName}
              className={styles.imagePreview}
            />
          </div>
        )}

        <Select required id="type" label="Type">
          <option defaultChecked value={TYPES.recipe}>
            {TYPES.recipe}
          </option>
          <option value={TYPES.weekly}>{TYPES.weekly}</option>
          <option value={TYPES.snack}>{TYPES.snack}</option>
          <option value={TYPES.lunch}>{TYPES.lunch}</option>
        </Select>

        <Select id="book" label="Boek">
          <option value="">Selecteer een boek</option>
          {BOOKS.map((book) => (
            <option key={book} value={book}>
              {book}
            </option>
          ))}
        </Select>

        <Select multiple id="cheats" label="Cheatmeal">
          {CHEATS.map((cheat) => (
            <option key={cheat} value={cheat}>
              {cheat}
            </option>
          ))}
        </Select>
        <Input id="pageNumber" label="Pagina" type="number" />
        <Input
          id="days"
          label="Voor hoeveel dagen?"
          type="number"
          defaultValue="1"
        />

        <Input
          id="lemonAmount"
          label="Hoeveel citroenen?"
          type="number"
          defaultValue="0"
        />

        <Input
          id="limeAmount"
          label="Hoeveel limoenen?"
          type="number"
          defaultValue="0"
        />
      </div>

      <div className={styles.products}>
        {renderProductSelection(
          "required-products",
          "Voeg producten toe",
          requiredProducts,
          setRequiredProducts
        )}

        {renderProductSelection(
          "optional-products",
          "Voeg optionele producten toe",
          optionalProducts,
          setOptionalProducts
        )}

        <Button label="Voeg recept toe" type="submit" />
      </div>

      <div className={styles.productOverview}>
        <p>TODO: add products to drag & drop from?</p>
      </div>
    </form>
  );
};
