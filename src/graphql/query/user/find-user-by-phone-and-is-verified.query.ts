import {type FindUserByPhoneInput, Query} from '@/graphql';
import {gqlFetch} from '@/services';

export async function findUserByPhoneAndIsVerified(args: FindUserByPhoneInput): Promise<Query> {
  const res = await gqlFetch({
    url: process.env.NEXT_PUBLIC_API as string,
    query: `
        query FindUserByPhoneAndIsVerified($input: FindUserByPhoneInput!) {
          user {
            findUserByPhoneAndIsVerified(input: $input) {
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
