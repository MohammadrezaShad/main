import {type BulkDeleteRoleInput, Mutation} from '@/graphql';
import {gqlFetch} from '@/services';

export async function bulkDeleteRoleMutation(
  args: BulkDeleteRoleInput,
  accessToken: string,
): Promise<Mutation> {
  const res = await gqlFetch({
    url: process.env.NEXT_PUBLIC_API as string,
    query: `
    mutation BulkDeleteRole($input: BulkDeleteRoleInput!) {
        auth {
          role {
            bulkDeleteRole(input: $input) {
              success
            }
          }
        }
      }
`,
    headers: {Authorization: `Bearer ${accessToken}`},
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
