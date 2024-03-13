import {Mutation, SetPasswordInput} from '@/graphql';
import {gqlFetch} from '@/services';

export async function setPasswordMutation(args: SetPasswordInput): Promise<Mutation> {
  const res = await gqlFetch({
    url: process.env.NEXT_PUBLIC_API as string,
    query: `
    mutation SetPassword($input: SetPasswordInput!) {
        auth {
          setPassword(input: $input) {
            success
          }
        }
      }
`,
    variables: {input: {...args}},
  });
  if (!res.ok) {
    throw new Error('Failed to mutate');
  }
  const response = await res.json();
  if (response.errors?.[0]?.message) {
    throw new Error(response.errors?.[0]?.message);
  }
  return response.data;
}
