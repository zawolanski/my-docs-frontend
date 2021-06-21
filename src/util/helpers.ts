export const setItemInLocalStorage = (name: string, value: string): void => {
  localStorage.setItem(name, value);
};

export const removeItemFromStorage = (name: string): void => {
  localStorage.removeItem(name);
};

export const getItemFromStorage = (name: string): string | null =>
  localStorage.getItem(name);
