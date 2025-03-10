import React from "react";

interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  register: any;
  required?: boolean;
  errors?: any;
  placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  name,
  register,
  required = false,
  errors,
  placeholder = "",
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={name}
        {...register(name, { required: required })}
        placeholder={placeholder}
        className="w-full p-2 border rounded"
      />
      {errors?.[name] && (
        <p className="text-red-500 text-xs">{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default InputField;
