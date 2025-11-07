"use client";
import styles from "./styles.module.css";

type Props = {
  title?: string;
  value: any;
  options: [value: string, title: string][];
  setter?: Function;
  required?: boolean;
};

const SelectInput = ({ title, value, options, setter, required }: Props) => {
  return (
    <div className={styles.campo}>
      {title && <label>{title}:</label>}
      <select
        className={setter ? "" : styles.borderNone}
        disabled={setter ? false : true}
        value={value}
        required={required}
        onChange={
          setter &&
          ((e) => {
            const v = e.target.value;
            setter(v);
            e.currentTarget.setCustomValidity("");
          })
        }
      >
        {options.map((option, index) => (
          <option value={option[0]} key={index}>
            {option[1]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
