import Image from "next/image";
import UserLink from "./../components/UserLink";
export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-dvh">
      <h1 className="quicksand text-3xl font-bold text-[#474747] text-center mt-8 tracking-wider	">
        Link. Generate. Shine
      </h1>
      <h2 className="quicksand text-4xl font-bold text-[#474747] text-center pt-3 p-8 ">
        Make a <span className="text-[#405dbb] font-semibold">LINKFOLIO</span>
      </h2>
      <UserLink />
    </div>
  );
}
