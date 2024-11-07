import Checkbox from "../checkbox/checkbox";
import { productProps } from "../recipe/recipe";
import * as styles from "./groceryList.css";

interface GroceryListProps {
  title: string;
  products?: productProps[];
  checkedOptionalProducts?: productProps[];
  totalLemons?: number;
  totalLimes?: number;
  onChange?: (checked: boolean, product: productProps) => void;
}

export const GroceryList = ({
  title,
  products,
  checkedOptionalProducts,
  totalLemons = 0,
  totalLimes = 0,
  onChange,
}: GroceryListProps) => {
  interface productCountMapProductInterface extends productProps {
    amount: number;
  }

  const productCountMap: {
    [key: string]: productCountMapProductInterface;
  } = {};

  products &&
    products.forEach((product) => {
      const existingProduct = productCountMap[product.ahId];
      if (existingProduct) {
        productCountMap[product.ahId].amount++;
      } else {
        productCountMap[product.ahId] = {
          title: product.title,
          ahId: product.ahId,
          amount: 1,
        };
      }
    });

  return (
    <section className={styles.groceries}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>
        {Object.values(productCountMap).map(
          (product: productCountMapProductInterface) => (
            <li className={styles.listItem} key={product.title}>
              {onChange ? (
                <Checkbox
                  id={product.title}
                  label={`${product.amount}x ${product.title}`}
                  checked={checkedOptionalProducts?.some(
                    (p) => p.ahId === product.ahId && p.title === product.title
                  )}
                  onChange={(isChecked) => {
                    onChange(isChecked, {
                      title: product.title,
                      ahId: product.ahId,
                    });
                  }}
                />
              ) : (
                <>
                  {product.amount}x {product.title}
                </>
              )}
            </li>
          )
        )}
        {totalLemons > 0 && (
          <li className={styles.listItem}>{totalLemons}x Citroen</li>
        )}
        {totalLimes > 0 && (
          <li className={styles.listItem}>{totalLimes}x Limoen</li>
        )}
      </ul>
    </section>
  );
};
