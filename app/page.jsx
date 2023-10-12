import { FcGoogle } from 'react-icons/fc';

const Home = () => {
  return (
    <div className='flex justify-center items-center h-screen w-screen'>
      <div className='flex justify-center items-center h-auto w-64 border-2 border-black rounded-[10px] cursor-pointer p-3'>
        <FcGoogle fontSize={30} className='mr-2' />
        <span className='text-lg capitalize'>Sign in with google</span>
      </div>
    </div>
  );
};

export default Home;
