import React from 'react';
import InputProps from './input.type';

const Input = ({ name, value, placeholder, onChange }: InputProps) => {
  return (
    <input
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-2 w-full rounded-lg shadow-lg hover:shadow-xl"
    ></input>
  );
};

export default Input;
