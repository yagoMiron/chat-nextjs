"use client";
import styles from "./styles.module.css";

interface Props {
  title: string;
  type: "text" | "email" | "tel" | "password" | "number" | "date";
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  required?: boolean;
  value?: any;
  customValidity?: string;
  setter?: Function;
  mask?: React.MutableRefObject<HTMLInputElement | null>;
  hideAsterisk?: boolean;
}

const TextInput = ({
  title,
  type,
  placeholder,
  maxLength,
  minLength,
  required,
  value,
  customValidity,
  setter,
  mask,
  hideAsterisk,
}: Props) => {
  const nome = title.toLowerCase().replace(" ", "_");

  return (
    <div className={styles.campo}>
      <label htmlFor={nome} className={styles.title}>
        {title}
        <span className={styles.required}>
          {required && !hideAsterisk && "*"}
        </span>
        :
      </label>

      <input
        ref={mask}
        minLength={minLength}
        type={type}
        name={nome}
        className={setter ? "" : styles.borderNone}
        value={value}
        disabled={setter ? false : true}
        placeholder={placeholder}
        maxLength={255}
        required={required}
        onChange={(e) => {
          if (setter) {
            const v = e.target.value;
            setter(v);
            e.currentTarget.setCustomValidity("");
          }
        }}
      />
    </div>
  );
};

export default TextInput;
