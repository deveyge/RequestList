import { useCallback } from "react"


export const useLocalStorage = () => {
  const getItem = useCallback((key: string) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.warn(`Не удается прочитать ключ ${key} из localStorage`, error);
      return null;
    }
  }, [])
  const setItem = useCallback((key: string, value: any) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn(`Не удается поместить ключ ${key} в localStorage`, error);
    }
  }, [])
  return { getItem, setItem};
}