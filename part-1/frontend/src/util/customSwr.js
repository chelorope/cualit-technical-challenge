import useSWRV from "swrv";

const options = {
  refreshInterval: 0,
  ttl: 0,
  dedupingInterval: 2000,
  revalidateOnFocus: true,
  revalidateDebounce: 0,
  shouldRetryOnError: true,
  errorRetryInterval: 5000,
  errorRetryCount: 5,
};

const { VITE_API_DOMAIN } = import.meta.env;
const customFetch = (url) =>
  fetch(VITE_API_DOMAIN ? VITE_API_DOMAIN + url : url).then((r) => r.json());

export default (url) => useSWRV(url, customFetch, options);
