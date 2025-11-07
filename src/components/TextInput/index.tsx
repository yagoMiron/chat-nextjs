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
  value,
  setter,
  mask,
}: Props) => {
  const nome = title.toLowerCase().replace(" ", "_");

  return (
    <div className={styles.campo}>
      <input
        ref={mask}
        minLength={minLength}
        type={type}
        name={nome}
        className={setter ? "" : styles.borderNone}
        value={value}
        disabled={setter ? false : true}
        placeholder={placeholder}
        maxLength={maxLength || 255}
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
