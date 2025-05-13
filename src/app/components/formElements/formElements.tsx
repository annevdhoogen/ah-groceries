import { FieldsetHTMLAttributes, InputHTMLAttributes, RefObject } from "react";
import * as styles from "./formElements.css";
import classNames from "classnames";

interface Input
  extends InputHTMLAttributes<HTMLInputElement | HTMLSelectElement> {
  id: string;
  name?: string;
  type?: string;
  label: string;
  innerRef?: RefObject<HTMLInputElement | HTMLSelectElement>;
}

export const Input = ({
  id,
  type = "text",
  label,
  innerRef,
  required,
  ...props
}: Input) => {
  return (
    <div
      className={
        type === "checkbox" ? styles.checkboxContainer : styles.container
      }
    >
      <label
        className={type !== "checkbox" ? styles.label : undefined}
        htmlFor={id}
      >
        {label} {required && "*"}
      </label>
      <input
        required={required}
        className={styles.input}
        type={type}
        id={id}
        name={id}
        ref={innerRef as RefObject<HTMLInputElement>}
        {...props}
      />
    </div>
  );
};

interface SelectProps extends Input {
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
}

export const Select = ({
  id,
  label,
  onChange,
  children,
  innerRef,
  required,
  ...props
}: SelectProps) => {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={id}>
        {label} {required && "*"}
      </label>
      <select
        required={required}
        className={styles.input}
        id={id}
        name={id}
        onChange={onChange}
        ref={innerRef as RefObject<HTMLSelectElement>}
        {...props}
      >
        {children}
      </select>
    </div>
  );
};

interface FieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legend: string;
  children: React.ReactNode;
  horizontal?: boolean;
  border?: boolean;
}

export const Fieldset = ({
  legend,
  children,
  horizontal = false,
  border = false,
  className,
  ...props
}: FieldsetProps) => {
  return (
    <div className={styles.container}>
      <fieldset
        className={classNames(
          styles.fieldset({ horizontal, border }),
          className
        )}
        {...props}
      >
        <legend className={styles.label}>{legend}</legend>
        {children}
      </fieldset>
    </div>
  );
};
