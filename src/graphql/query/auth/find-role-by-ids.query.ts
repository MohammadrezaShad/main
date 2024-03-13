import {type FindRoleByIdsInput, PermissionData, Query, RoleData} from '@/graphql';
import {gqlFetch} from '@/services';

export async function findRoleByIdsQuery(
  args: FindRoleByIdsInput,
  accessToken: string,
): Promise<Query> {
  const res = await gqlFetch({
    url: process.env.NEXT_PUBLIC_API as string,
    query: `
    ${RoleData}
    ${PermissionData}
    query FindRoleByIds($input: FindRoleByIdsInput!) {
        auth {
          role {
            findRoleByIds(input: $input) {
              results {
                ...RoleData
              }
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
    throw new Error('Failed to fetch data');
  }
  const response = await res.json();
  if (response.errors?.[0]?.message) {
    throw new Error(response.errors?.[0]?.message);
  }
  return response.data;
}
