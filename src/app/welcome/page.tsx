"use client"
// app/welcome/page.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const WelcomePage = () => {
  const router = useRouter();

  useEffect(() => {
    // 10 seconds ke baad home page par redirect karna
    const timer = setTimeout(() => {
      router.push('/home'); // Home page ka URL
    }, 3000); // 10 seconds (10000 milliseconds)

    // Cleanup on component unmount
    return () => clearTimeout(timer);
  }, [router]);

  return (
      <div className='flex items-center justify-center min-h-screen bg-[url("/welcome.jpg")] bg-cover bg-center bg-opacity-50'></div>
  );
};

export default WelcomePage;