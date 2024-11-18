"use client";

import Past from "@/app/component/webstuff/drophistory";
import Link from 'next/link';
import Image from 'next/image';

import { useEffect, useState } from 'react';
import { firestore } from "@/../config/firebaseconfig";
import { doc, getDoc,collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore';


import { useAuthContext } from '@/app/component/login';

export default function Home() {
  const { loginState, handleLogin, handleLogout } = useAuthContext();

  console.log(loginState);
  const [locationData, setLocationData] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);

  
  useEffect(() => {
      const fetchData = async () => {
        if(loginState?.uid != undefined){
          const docRef = doc(firestore, 'user', loginState.uid); // Adjust the path as needed
          const docSnap = await getDoc(docRef);
          console.log(docSnap);
          if (docSnap.exists()) {
              const data = docSnap.data();
              setName(JSON.stringify(data, null, 2));
          } else {
              console.log("No such document!");
          }

      };
    }

      fetchData();
  }, [loginState]);




  
  return (<>  <div className="m-4">
    <div className="mx-[20px] my-8 flex justify-between">
        <Link href="/account" className="w-[40px] h-[40px] border-2 border-white rounded-full flex justify-center items-center ml-3"> <Image src="/hamburger (1).svg" width={40} height={40} alt="account" className="rotate-90 "></Image>
        </Link>

      
       </div> 
       <h1>You have earned {" "}
        <div className="font-semibold text-3xl inline mx-2">{name == null? "please log in": JSON.parse(name).points}</div>
         
         {" "}
         points</h1> 
       </div>
</>
  );
}
