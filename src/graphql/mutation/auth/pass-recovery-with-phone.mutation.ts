import {Mutation, type SetPasswordInput} from '@/graphql';
import {gqlFetch} from '@/services';

export async function passRecoveryWithPhoneMutation(args: SetPasswordInput): Promise<Mutation> {
  const res = await gqlFetch({
    url: process.env.NEXT_PUBLIC_API as string,
    query: `
    mutation PassRecoveryWithPhone($input: SetPasswordInput!) {
      auth {
        passRecoveryWithPhone(input: $input) {
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
