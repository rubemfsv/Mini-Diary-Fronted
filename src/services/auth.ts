export const setToken = (token: string) => {
  localStorage.setItem('@Auth:token', JSON.stringify({ token }));
};

export const getToken = () => {
  const { token } =
    JSON.parse(localStorage.getItem('@Auth:token') as string) || {};
  if (token) return token;
};

export const setUserId = (id: string) => {
  localStorage.setItem('@Auth:id', JSON.stringify({ id }));
};

export const getUserId = () => {
  const { id } = JSON.parse(localStorage.getItem('@Auth:id') as string) || {};
  if (id) return id;
};
