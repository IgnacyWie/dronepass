import Link from "next/link";

export default function MainButton(props) {
  return (
    <div className="text-white text-center bg-[#2336A4] py-4 px-7 rounded-xl">
      <Link href={props.href}>{props.text}</Link>
    </div>
  );
}
