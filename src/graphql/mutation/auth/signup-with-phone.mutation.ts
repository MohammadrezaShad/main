import {Mutation, type SignupWithPhoneInput} from '@/graphql';
import {gqlFetch} from '@/services';

export async function signupWithPhoneMutation(args: SignupWithPhoneInput): Promise<Mutation> {
  const res = await gqlFetch({
    url: process.env.NEXT_PUBLIC_API as string,
    query: `
    mutation SignupWithPhone($input: SignupWithPhoneInput!) {
        auth {
          signupWithPhone(input: $input) {
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
