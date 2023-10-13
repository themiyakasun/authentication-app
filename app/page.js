'use client';

import { getProviders, signIn, signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { redirects } from '@next.config';

const Home = () => {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      window.location.href = '/signin';
    },
  });
  return (
    <div className='p-8'>
      <div>{session?.data?.user?.email}</div>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
};

Home.requiredAuth = true;

export default Home;
