import { forwardRef, useState } from "react";
import { Icon, Icons } from "../Icon";

import classNames from "classnames";

export const TextInputControl = forwardRef(
  (
    {
      onChange,
      onUnFocus,
      value,
      label,
      name,
      autoComplete,
      className,
      placeholder,
      onFocus,
      passwordToggleable,
    },
    ref,
  ) => {
    if (passwordToggleable) inputClass += " pr-12";

    const [showPassword, setShowPassword] = useState(true);
    const inputType = passwordToggleable ? (showPassword ? "password" : "text") : "text";

    const input = (
      <div className="relative">
        <input
          type={"text"}
          ref={ref}
          className={classNames(className)}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          value={value}
          name={name}
          autoComplete={autoComplete}
          onBlur={() => onUnFocus()}
          onFocus={() => onFocus()}
          onKeyDown={(e) =>
            e.key === "Enter" ? e.target.blur() : null
          }
        />
        {passwordToggleable && (
          <button
            type="button"
            className="absolute top-1/2 -translate-y-1/2 right-1 text-xl p-3"
            onClick={() => setShowPassword(!showPassword)}
          >
            <Icon icon={showPassword ? Icons.EYE : Icons.EYE_SLASH} />
          </button>
        )}
      </div>
    );

    if (label) {
      return (
        <label>
          <span>{label}</span>
          {input}
        </label>
      );
    }

    return input;
  }
);
