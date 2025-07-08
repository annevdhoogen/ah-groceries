import * as typographyStyles from "@/style/typography.css";
import * as styles from "./nutritionalOverview.css";
import classNames from "classnames";

interface NutritionalOverviewProps {
  calories?: number;
  carbs?: number;
  protein?: number;
  fat?: number;
  portionSize: string;
  small?: boolean;
}

interface ItemProps {
  label: string;
  value: string;
}

export const NutritionalOverview = ({
  calories,
  carbs,
  protein,
  fat,
  portionSize,
  small = false,
}: NutritionalOverviewProps) => {
  if (!calories && !carbs && !protein && !fat) {
    return null;
  }

  const portionSizeNumber = portionSize !== "" ? parseFloat(portionSize) : 0;

  const Item = ({ label, value }: ItemProps) => {
    return (
      <div className={styles.item({ small })}>
        <dt>{label}</dt>
        <dd>{value}</dd>
      </div>
    );
  };

  const getValue = (value: number, decimalPlaces: number = 1) => {
    if (value === 0) {
      return "0";
    }
    return (value * portionSizeNumber).toFixed(decimalPlaces);
  };

  return (
    <dl
      className={classNames(
        styles.nutritionalOverview,
        typographyStyles.smallLabel
      )}
    >
      {!!calories && (
        <Item label="Calories" value={`${getValue(calories, 0)}kcal`} />
      )}
      {!!carbs && <Item label="Carbs" value={`${getValue(carbs)}g`} />}
      {!!protein && <Item label="Protein" value={`${getValue(protein)}g`} />}
      {!!fat && <Item label="Fat" value={`${getValue(fat)}g`} />}
    </dl>
  );
};
