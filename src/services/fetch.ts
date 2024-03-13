interface GqlFetchProps<T> {
  url: string;
  query: string;
  variables?: T;
  headers?: HeadersInit;
}

export const gqlFetch = <T>({url, query, variables, headers}: GqlFetchProps<T>) =>
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(headers || {}),
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
