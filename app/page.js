'use client';

import { FcGoogle } from 'react-icons/fc';
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
    // <div className='flex justify-center items-center h-screen w-screen'>
    //   <div className='flex justify-center items-center h-auto w-64 border-2 border-black rounded-[10px] cursor-pointer p-3'>
    //     <FcGoogle fontSize={30} className='mr-2' />
    //     <span className='text-lg capitalize'>Sign in with google</span>
    //   </div>
    // </div>
  );
};

Home.requiredAuth = true;

export default Home;
