import cookie from 'cookie';
export const saveThemeToLocalStorage = (theme) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('currentTheme', theme);
  }
};

export const getThemeFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('currentTheme');
  }
  return null;
};

export const saveThemeToCookie = (theme) => {
  if (typeof document !== 'undefined') {
    document.cookie = `currentTheme=${theme};path=/`;
  }
};

export const getThemeFromCookie = () => {
  if (typeof document !== 'undefined') {
    const match = document.cookie.match(new RegExp('(^| )currentTheme=([^;]+)'));
    if (match) return match[2];
  }
  return null;
};

export const getThemeFromServerCookie = (req) => {
  if (req && req.headers && req.headers.cookie) {
    const cookies = cookie.parse(req.headers.cookie);
    return cookies.theme || 'Light';
  }
  return 'Light';
};