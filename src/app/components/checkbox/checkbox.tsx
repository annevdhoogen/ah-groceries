"use client";

import React from "react";
import * as styles from "./checkbox.css";
import classNames from "classnames";

interface CheckboxProps {
  id: string;
  label: string;
  checked?: boolean;
  className?: string;
  onChange?: (isChecked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  checked = false,
  className = "",
  onChange,
}) => {
  return (
    <label htmlFor={id} className={classNames(styles.label, className)}>
      <input
        className={styles.input}
        id={id}
        name={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange && onChange(e.target.checked)}
      />
      {label}
    </label>
  );
};

export default Checkbox;
