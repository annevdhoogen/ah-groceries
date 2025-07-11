import {
  CHEATS,
  DEFAULT_FILTERS,
  NO_CHEAT,
  SORT_OPTIONS,
} from "@/constants/types";
import Checkbox from "../checkbox/checkbox";
import { Input, Select } from "../formElements/formElements";
import * as styles from "./filters.css";
import Radio from "../radio/radio";
import { useState, useCallback } from "react";
import { Button } from "../button/button";
import * as typographyStyles from "@/style/typography.css";

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
    sort: string;
  };
};

export const Filters = ({
  className,
  onFilterChange,
  filters,
}: FiltersProps) => {
  const cheatsToShow = [NO_CHEAT, ...CHEATS];
  const [isVisible, setIsVisible] = useState(false);
  const [titleValue, setTitleValue] = useState(filters.title);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const debouncedTitleChange = useCallback(
    (value: string) => {
      if (timeoutId) clearTimeout(timeoutId);
      const newTimeoutId = setTimeout(() => {
        onFilterChange({
          type: "title",
          value: value,
        });
      }, 300);
      setTimeoutId(newTimeoutId);
    },
    [onFilterChange, timeoutId]
  );

  const activeFilters = Object.keys(filters).filter((key) => {
    if (key === "title") {
      return filters.title !== DEFAULT_FILTERS.title;
    }
    if (key === "cheat") {
      return filters.cheat.length > DEFAULT_FILTERS.cheat.length;
    }
    if (key === "days") {
      return filters.days !== DEFAULT_FILTERS.days;
    }
    // sort is not a filter, so we don't need to show it
    return false;
  });

  return (
    <div className={className}>
      <form className={styles.form}>
        <button
          className={styles.toggleButton}
          onClick={(e) => {
            e.preventDefault();
            setIsVisible(!isVisible);
          }}
        >
          <h2>Filters</h2>
          {!isVisible && activeFilters.length > 0 && (
            <span className={styles.filterNumber}>{activeFilters.length}</span>
          )}
          <span className={typographyStyles.smallLabel}>
            {isVisible ? "Sluit" : "Open"}
          </span>
        </button>

        <div className={styles.toggleContainer({ isVisible })}>
          <div className={styles.container}>
            <Input
              id="filter-title"
              value={titleValue}
              label="Zoek op titel of ingredient"
              onChange={(e) => {
                const value = e.target.value;
                setTitleValue(value);
                debouncedTitleChange(value);
              }}
            />
          </div>

          <div className={styles.container}>
            <Select
              id="filter-sort"
              label="Sorteer op"
              value={filters.sort}
              onChange={(e) => {
                onFilterChange({ type: "sort", value: e.target.value });
              }}
            >
              {SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
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
              className={styles.resetButton}
              variant="ghost"
              label="Reset filters"
              onClick={(event) => {
                event.preventDefault(); // Prevent form submission
                onFilterChange({ type: "reset" });
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
