"use client";

import Image from "next/image";
import Foot from "./component/webstuff/footer";
import Past from "./component/webstuff/drophistory";
import profile from "../../public/profile.svg";
export default function Home() {
  let greeting = "";

  const now = new Date();
  switch (true) {
    case now.getHours() > 5 && now.getHours() <= 12:
      greeting = "Good morning!"
      break;
    case now.getHours() > 12 && now.getHours() <= 18:
      greeting = "Good afternoon!"
      break;
    case now.getHours() > 18 && now.getHours() <= 23:
      greeting = "Good evening!"
      break;
    case now.getHours() >= 0 && now.getHours() <= 5:
      greeting = "Good night!"
      break;
    default:
      break;
  }
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const name = "John Doe";

  return (<>
    <div className="mx-[20px] mt-8">
      <div className="flex justify-between flex-row">
        <div className="flex flex-col">
          <h2>{weekday[new Date().getDay()]}{", "}{new Date().getDate()} {new Date().toLocaleString('default', { month: 'long' })} {new Date().getFullYear()}</h2>
          <h1 className="text-2xl font-semibold">{greeting}{" "}{name ?? ""}</h1>
        </div>
        <Image src={profile} width={45} height={45} alt="account" className=" invert"></Image>

      </div>
      <div className="h-[35vh] bg-purple-700 rounded-xl my-4 w-full overflow-hidden">
        <div className="flex flex-row justify-between px-5 py-3 border-b-[1px] items-center ">
          <div className="flex flex-row justify-center items-center ">
            <div className="w-[35px] h-[35px] flex justify-center items-center invert"
              dangerouslySetInnerHTML={{
                __html:
                  `<svg fill="#000000" width="24px" height="24px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M829.44 911.36c45.245 0 81.92-36.675 81.92-81.92V194.56c0-45.245-36.675-81.92-81.92-81.92H194.56c-45.245 0-81.92 36.675-81.92 81.92v634.88c0 45.245 36.675 81.92 81.92 81.92h634.88zm0 40.96H194.56c-67.866 0-122.88-55.014-122.88-122.88V194.56c0-67.866 55.014-122.88 122.88-122.88h634.88c67.866 0 122.88 55.014 122.88 122.88v634.88c0 67.866-55.014 122.88-122.88 122.88z"/><path d="M727.746 234.526l-.358.247c.12-.078.239-.16.358-.247zm-304.56 198.992l53.506 34.806c9.143 5.947 12.02 18.016 6.545 27.449L322.853 772.067l277.96-181.589-53.507-34.807c-9.143-5.947-12.02-18.016-6.545-27.449l160.378-276.284-277.953 181.579zm14.854 58.527l-63.524-41.323c-12.402-8.068-12.42-26.221-.033-34.313L704.13 201.06c29.158-20.549 66.411 12.954 48.276 44.151l-166.448 286.74 63.524 41.323c12.402 8.068 12.42 26.221.034 34.313L319.883 822.934c-29.153 20.564-66.398-12.925-48.29-44.148l166.448-286.74z"/></svg>`,
              }} ></div>
            <div className="ml-5">
              <h2 className="text-xs">So far you have earned</h2>
              <p className="font-extrabold text-2xl">1,200</p>
            </div>
          </div>

          <a href="/scan" className="bg-green-500 w-[40px] h-[40px] flex justify-center items-center rounded-lg text-3xl">+</a>
        </div>
        <div className="pl-6 pt-6">
          <p className="font-bold mb-7">Looking for</p>
          <a href="/find" className=" relative bg-green-500/90 font-extrabold p-3 rounded-xl z-20">Find Vapebox</a>
          <Image src="/map.jpg" width={135} height={0} alt="vector map" className="opacity-90 relative bottom-[3rem] z-10 -right-[140px] scale-[1.7] object-none"></Image>
        </div>

      </div>
      <div className="mb-32">
        <div className="flex flex-row justify-between font-bold">
          <h2>Past Deposits</h2>
          <a href="">View all	&rarr;</a>
        </div>

        <Past></Past>
        <Past></Past>
        <Past></Past>
      </div>
    </div>
    <button className="fixed h-[60px] w-[60px] bottom-[60px] right-[20px] flex justify-center items-center rounded-full bg-yellow-300">

      <div className="w-[25px] h-[25px] "
        dangerouslySetInnerHTML={{
          __html:
            `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google Maps</title><path d="M19.527 4.799c1.212 2.608.937 5.678-.405 8.173-1.101 2.047-2.744 3.74-4.098 5.614-.619.858-1.244 1.75-1.669 2.727-.141.325-.263.658-.383.992-.121.333-.224.673-.34 1.008-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887-.284-.874-.581-1.713-1.019-2.525-.51-.944-1.145-1.817-1.79-2.671L19.527 4.799zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18.247.31.494.622.737.936l4.984-5.925-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.377 3.377 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198l.001-.007zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689-.058-.05-3.607-3.035zM14.661.436l-3.838 4.563a.295.295 0 0 1 .027-.01c1.6-.551 3.403.15 4.22 1.626.176.319.323.683.377 1.045.068.446.085.773.012 1.22l-.003.016 3.836-4.561A8.382 8.382 0 0 0 14.67.439l-.009-.003zM9.466 5.868L14.162.285l-.047-.012A8.31 8.31 0 0 0 11.986 0a8.439 8.439 0 0 0-6.169 2.766l-.016.018 3.665 3.084z"/></svg>`,
        }} ></div>
    </button>
    <Foot></Foot>
  </>
  );
}
