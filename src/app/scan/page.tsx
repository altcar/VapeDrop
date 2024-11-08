import Foot from "../component/webstuff/footer";
export default function Home() {
  return (
    <>
      <div className="flex flex-row w-full [&>*]:mx-3 [&>*]:h-[45px]">
        <div className="flex justify-center items-center rounded-lg w-full border-2">Scan</div>
        <div className="flex justify-center items-center rounded-lg w-full border-2">Your QR</div>
      </div>
      <div className="flex justify-center items-center h-[50vh]">
        <div className="w-[300px] h-[300px] bg-white min-h-[200px]"></div>
      </div>
      <Foot></Foot>
    </>
  );
}
