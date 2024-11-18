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



          const q = query(collection(firestore, "past"), where("user", "==", loginState.uid),orderBy("time", "desc"));
            const querySnapshot = await getDocs(q);
            const locationarray:any[] = [];
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              // console.log(doc.id, " => ", doc.data());
              locationarray.push(doc.data());
            });
            console.log(locationarray);
            setLocationData(JSON.stringify(locationarray, null, 2));
      };
    }

      fetchData();
  }, [loginState]);




  
  return (<>  <div className="m-4">
    <div className="mx-[20px] my-8 flex justify-between">
        <Link href="/account" className="w-[40px] h-[40px] border-2 border-white rounded-full flex justify-center items-center ml-3"> <Image src="/hamburger (1).svg" width={40} height={40} alt="account" className="rotate-90 "></Image>
        </Link>

      
       </div> 
        {(() => {
  try {
    const data = JSON.parse(locationData ?? "");
    return data.map((element: any, index: React.Key | null | undefined) => (
      <div key={index}>{<Past sendedlocation={element.location} sendedtime={JSON.stringify(element.time)}/>}</div>
    ));
  } catch (error) {
    // console.error("Failed to parse locationData:", error);
    return null;
  }
})()}
       </div>
</>
  );
}
