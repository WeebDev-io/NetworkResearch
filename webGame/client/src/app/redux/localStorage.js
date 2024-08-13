export const saveThemeToLocalStorage = (theme) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('currentTheme', theme);
  }
};

export const getThemeFromLocalStorage = () => {
  if (typeof localStorage !== 'undefined') {
   return localStorage.getItem('currentTheme') || 'Dark';
  }else {
    return 'Dark';
  }
};