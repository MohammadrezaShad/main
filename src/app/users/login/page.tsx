import {Login as LoginView} from '@/components';
import {LoginStateProvider} from '@/providers';

export default async function Home() {
  return (
    <LoginStateProvider>
      <LoginView />
    </LoginStateProvider>
  );
}
