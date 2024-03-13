import {Mutation} from '@/graphql';
import {gqlFetch} from '@/services';

export async function refreshTokenMutation(accessToken: string): Promise<Mutation> {
  const res = await gqlFetch({
    url: process.env.NEXT_PUBLIC_API as string,
    query: `
    mutation RefreshToken {
        auth {
          refreshToken {
            accessToken
            refreshToken
            success
          }
        }
      }
`,
    headers: {Authorization: `Bearer ${accessToken}`},
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
