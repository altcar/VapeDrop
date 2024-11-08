"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
export default function Home() {
    const [login, setLogin] = useState(true);
    return (
        <>
            <div className="m-4">
                <div className="mx-[20px] my-8 flex justify-between">
                    <Link href="/" className="w-[40px] h-[40px] border-2 border-white rounded-full flex justify-center items-center ml-3"> <Image src="/hamburger (1).svg" width={40} height={40} alt="account" className="rotate-90 "></Image>
                    </Link>
                    {!login && <a href="/api/login" className="border-2 p-2">Login</a>}
                    {login && (<a href="/api/logout" className="border-2 p-2">Logout</a>)}
                </div>
                {login && (<>
                    <a href="/account/personal" className="block border-2 pl-8 py-2 my-3">Your Detail</a>
                    <a href="/account/points"   className="block border-2 pl-8 py-2 my-3">Points & Awards</a>
                    <a href="/account/history"  className="block border-2 pl-8 py-2 my-3">History</a>
                    <a href="/account/delete"   className="block border-2 pl-8 py-2 my-3">Delete account</a>
                    <a href="/account/learn"    className="block border-2 pl-8 py-2 my-3">Learn more about vapedrop</a>
                    <a href="/account/join"     className="block border-2 pl-8 py-2 my-3">Join our team</a>
                    <a href="/account/legal"    className="block border-2 pl-8 py-2 my-3">Legal Stuff</a>
                </>)}
            </div>
        </>
    )
}
