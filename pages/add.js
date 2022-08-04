import Logo from "../components/logo";
import Layout from "../components/mainLayout";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Add() {
  const router = useRouter();
  return (
    <Layout className="flex flex-col justify-center items-center">
      <Logo />
      <h1 className="font-bold text-2xl mb-8 text-center">
        Good news your license is ready to download!
      </h1>
      <Link
        href={{
          pathname: "/api/DronePass.pkpass",
          query: router.query,
        }}
      >
        <img src="/wallet.svg" className="h-16" />
      </Link>
    </Layout>
  );
}
