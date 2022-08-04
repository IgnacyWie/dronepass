import { TbDrone } from "react-icons/tb";

export default function Logo() {
  return (
    // eslint-disable-next-line @next/next/no-html-link-for-pages
    <a href="/" className="flex space-x-2">
      <TbDrone className="text-4xl font-bold text-[#2336A4] " />
      <h1 className="font-bold text-[#2336A4] text-3xl md:mb-12 mb-2">
        DronePass
      </h1>
    </a>
  );
}
