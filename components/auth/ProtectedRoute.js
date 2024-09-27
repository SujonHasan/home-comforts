import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return; 
    if (!session) router.push(`/auth/signin?callbackUrl=${router.asPath}`);
  }, [session, status, router]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (session) {
    return children;
  }

  return null;
};

export default ProtectedRoute;