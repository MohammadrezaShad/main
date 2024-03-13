import {Query, type SigninInput} from '@/graphql';
import {gqlFetch} from '@/services';

export async function signinQuery(args: SigninInput): Promise<Query> {
  const res = await gqlFetch({
    url: process.env.NEXT_PUBLIC_API as string,
    query: `
    query Signin($input: SigninInput!) {
        auth {
          signin(input: $input) {
            accessToken
            refreshToken
            success
          }
        }
      }
`,
    variables: {input: {...args}},
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const response = await res.json();
  if (response.errors?.[0]?.message) {
    throw new Error(response.errors?.[0]?.message);
  }
  return response.data;
}
