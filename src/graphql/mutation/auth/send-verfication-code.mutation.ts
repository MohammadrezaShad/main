import {Mutation, type SendVerificationCodeInput} from '@/graphql';
import {gqlFetch} from '@/services';

export async function sendVerificationCodeMutation(
  args: SendVerificationCodeInput,
): Promise<Mutation> {
  const res = await gqlFetch({
    url: process.env.NEXT_PUBLIC_API as string,
    query: `
    mutation SendVerificationCode($input: SendVerificationCodeInput!) {
        auth {
          sendVerificationCode(input: $input) {
            success
          }
        }
      }
`,
    variables: {input: {...args}},
  });
  console.log(res);
  if (!res.ok) {
    throw new Error('Failed to mutate');
  }
  const response = await res.json();
  if (response.errors?.[0]?.message) {
    throw new Error(response.errors?.[0]?.message);
  }
  return response.data;
}
