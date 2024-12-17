// app/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    // Immediately redirect to /welcome page
    router.push('/welcome');
  }, [router]);

  return null; // No UI rendered, as it's just for redirecting
};

export default HomePage;