"use client";

import React from "react";
import * as styles from "./radio.css";
import classNames from "classnames";

interface RadioProps {
  id: string;
  name: string;
  label: string;
  checked?: boolean;
  className?: string;
  onChange?: (isChecked: boolean) => void;
}

const Radio: React.FC<RadioProps> = ({
  id,
  label,
  name,
  checked = false,
  className = "",
  onChange,
}) => {
  return (
    <label htmlFor={id} className={classNames(styles.label, className)}>
      <input
        className={styles.input}
        id={id}
        name={name}
        type="radio"
        checked={checked}
        onChange={(e) => onChange && onChange(e.target.checked)}
      />
      {label}
    </label>
  );
};

export default Radio;
