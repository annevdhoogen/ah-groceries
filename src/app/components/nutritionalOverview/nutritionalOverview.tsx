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

  return (
    <dl
      className={classNames(
        styles.nutritionalOverview,
        typographyStyles.smallLabel
      )}
    >
      {!!calories && (
        <Item label="Calories" value={`${calories * portionSizeNumber}kcal`} />
      )}
      {!!carbs && (
        <Item label="Carbs" value={`${carbs * portionSizeNumber}g`} />
      )}
      {!!protein && (
        <Item label="Protein" value={`${protein * portionSizeNumber}g`} />
      )}
      {!!fat && <Item label="Fat" value={`${fat * portionSizeNumber}g`} />}
    </dl>
  );
};
