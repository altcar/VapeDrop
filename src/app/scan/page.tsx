import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <>
        <div className="mx-[20px] mt-8">
      <Link href="/" className="w-[40px] h-[40px] border-2 border-white rounded-full flex justify-center items-center ml-3"> <Image src="/hamburger (1).svg" width={40} height={40} alt="account" className="rotate-90 "></Image>
      </Link>
      
      <div className="flex justify-center items-center h-[50vh]">
        <div className="w-[300px] h-[300px] bg-white min-h-[200px]"></div>
      </div>
      <div className="flex flex-row w-full [&>*]:mx-3 [&>*]:h-[45px]">
        <div className="flex justify-center items-center rounded-lg w-full border-2">Scan</div>
        <div className="flex justify-center items-center rounded-lg w-full border-2">Your QR</div>
      </div>
      </div>
    </>
  );
}
