import {dehydrate} from '@tanstack/react-query';

import {Home as HomeView} from '@/components';
import {getQueryClient} from '@/helpers';
import {Hydrate} from '@/providers';

export default async function Home() {
  const queryClient = getQueryClient();
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <HomeView />
    </Hydrate>
  );
}
