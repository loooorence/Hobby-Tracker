import { useEffect } from 'react';
import InstanceWindow from '../components/InstanceWindow';
import { useAuth } from '../context/Auth.context';
import { useRouter } from 'next/router';

function HT() {
  const { user, isLoggedIn } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [isLoggedIn, router]);

  return isLoggedIn ? (
    <div>
      <h2>Hobby Tracker</h2>
      <InstanceWindow />
    </div>
  ) : null;
}

export default HT;
