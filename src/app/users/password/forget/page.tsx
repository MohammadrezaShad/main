import {Forget as ForgetView} from '@/components';
import {ForgetPasswordStateProvider} from '@/providers';

export default async function Forget() {
  return (
    <ForgetPasswordStateProvider>
      <ForgetView />
    </ForgetPasswordStateProvider>
  );
}
