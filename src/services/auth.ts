export const setToken = (token: string) => {
  localStorage.setItem('@Auth:token', JSON.stringify({ token }));
};

export const getToken = () => {
  const { token } =
    JSON.parse(localStorage.getItem('@Auth:token') as string) || {};
  if (token) return token;
};
