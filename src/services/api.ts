import { getToken } from './auth';

const useFetch = async (
  URL: string,
  method = 'GET',
  body?: object,
): Promise<Response> => {
  const headers = new Headers();

  headers.append('Authorization', `Bearer ${getToken()}`);
  headers.append('Content-type', 'application/json');

  const response = await fetch(URL, {
    method,
    headers,
    body: JSON.stringify(body),
  });

  if (response.status === 401) {
    (window as any).handleAuth(false);
  } else if (response.status !== 200) {
    throw new Error(`${response.status}`);
  }
  return response;
};

export default useFetch;
