"use client";

import Link from 'next/link';

import Image from 'next/image';
import { useAuthContext } from '@/app/component/login';

export default function Home() {
  const { loginState, handleLogin, handleLogout } = useAuthContext();

  
  return (<>    <div className="m-4">
    <div className="mx-[20px] my-8 flex justify-between">
        <Link href="/account" className="w-[40px] h-[40px] border-2 border-white rounded-full flex justify-center items-center ml-3"> <Image src="/hamburger (1).svg" width={40} height={40} alt="account" className="rotate-90 "></Image>
        </Link>

      
       </div> {JSON.stringify(loginState, null, 5)}
       </div>
</>
  );
}
