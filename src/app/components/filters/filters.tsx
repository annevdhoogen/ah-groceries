import { CHEATS, NO_CHEAT } from "@/constants/types";
import Checkbox from "../checkbox/checkbox";
import { Input } from "../formElements/formElements";
import * as styles from "./filters.css";
import Radio from "../radio/radio";
import { Button } from "../button/button";

type FiltersProps = {
  className?: string;
  onFilterChange: (filter: {
    type: string;
    value?: string | number;
    selected?: boolean;
  }) => void;
  filters: {
    title: string;
    cheat: string[];
    days: number;
  };
};

export const Filters = ({
  className,
  onFilterChange,
  filters,
}: FiltersProps) => {
  const cheatsToShow = [NO_CHEAT, ...CHEATS];

  return (
    <div className={className}>
      <form className={styles.form}>
        <h2>Filters</h2>

        <div className={styles.container}>
          <Input
            id="filter-title"
            value={filters.title}
            label="Zoek op titel of ingredient"
            onChange={(e) =>
              onFilterChange({
                type: "title",
                value: e.target.value,
              })
            }
          />
        </div>

        <div className={styles.container}>
          <span>Filter op cheats:</span>
          <div className={styles.checkboxes}>
            {cheatsToShow.map((cheat) => (
              <Checkbox
                key={cheat}
                id={cheat}
                checked={filters.cheat.includes(cheat)}
                label={cheat}
                onChange={() =>
                  onFilterChange({
                    type: "cheat",
                    value: cheat,
                    selected: !filters.cheat.includes(cheat),
                  })
                }
              />
            ))}
          </div>
        </div>

        <div className={styles.container}>
          <span>Filter op dagen:</span>
          <div className={styles.checkboxes}>
            <Radio
              name="days"
              id="days-all"
              label="Alle"
              checked={filters.days === 0}
              onChange={() => onFilterChange({ type: "days", value: 0 })}
            />
            <Radio
              name="days"
              id="days-1"
              label="1 dag"
              checked={filters.days === 1}
              onChange={() => onFilterChange({ type: "days", value: 1 })}
            />
            <Radio
              name="days"
              id="days-2"
              label="2 dagen"
              checked={filters.days === 2}
              onChange={() => onFilterChange({ type: "days", value: 2 })}
            />
          </div>
        </div>

        <div className={styles.container}>
          <Button
            variant="ghost"
            label="Reset filters"
            onClick={(event) => {
              event.preventDefault(); // Prevent form submission
              onFilterChange({ type: "reset" });
            }}
          />
        </div>
      </form>
    </div>
  );
};
