import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const data = window.localStorage.getItem(key);
    if (!data) return initialValue;
    return JSON.parse(data);
  });

  const setLocalStorage = (data) => {
    setValue(data);
    window.localStorage.setItem(key, JSON.stringify(data));
  };

  return [value, setLocalStorage];
};
