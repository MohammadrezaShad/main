import {PermissionData, Query, RoleData, UserData} from '@/graphql';
import {gqlFetch} from '@/services';

export async function getProfileQuery(accessToken: string): Promise<Query> {
  const res = await gqlFetch({
    url: process.env.NEXT_PUBLIC_API as string,
    query: `
    ${RoleData}
    ${PermissionData}
     ${UserData}
     query GetProfile{
        auth{
          getProfile{
            result{
             ...UserData
            }
          }
        }
      }
`,
    headers: {Authorization: `Bearer ${accessToken}`},
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
