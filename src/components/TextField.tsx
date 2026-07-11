import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { useId } from "react";

const fieldClasses =
  "w-full rounded-xl border border-border-subtle bg-paper px-4 py-3 font-sans text-[15px] text-ink placeholder:text-grey-400 transition-[border-color,box-shadow] duration-(--motion-fast) focus:border-border-strong focus:outline-none focus:ring-2 focus:ring-ink/15 disabled:opacity-40";

const labelClasses = "mb-1.5 block font-sans text-[13px] font-medium text-ink-2";

type TextFieldProps = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function TextField({ label, className = "", id, ...rest }: TextFieldProps) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  return (
    <div className={className}>
      {label && (
        <label htmlFor={fieldId} className={labelClasses}>
          {label}
        </label>
      )}
      <input id={fieldId} className={fieldClasses} {...rest} />
    </div>
  );
}

type TextAreaProps = {
  label?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextArea({ label, className = "", id, rows = 3, ...rest }: TextAreaProps) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  return (
    <div className={className}>
      {label && (
        <label htmlFor={fieldId} className={labelClasses}>
          {label}
        </label>
      )}
      <textarea id={fieldId} rows={rows} className={`${fieldClasses} resize-none`} {...rest} />
    </div>
  );
}
