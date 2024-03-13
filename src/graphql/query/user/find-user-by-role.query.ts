import {type FindUsersByRoleInput, PermissionData, Query, RoleData, UserData} from '@/graphql';
import {gqlFetch} from '@/services';

export async function findUsersByRoleQuery(
  args: FindUsersByRoleInput,
  accessToken: string,
): Promise<Query> {
  const res = await gqlFetch({
    url: process.env.NEXT_PUBLIC_API as string,
    query: `
      ${UserData}
      ${RoleData}
      ${PermissionData}
      query FindUsersByRole($input: FindUsersByRoleInput!) {
        user {
          findUsersByRole(input: $input) {
            results {
              ...UserData
            }
            success
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
