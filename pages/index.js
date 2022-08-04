import MainButton from "../components/mainButton";
import Logo from "../components/logo";
import Layout from "../components/mainLayout";

export default function Home() {
  return (
    <Layout>
      <Logo />
      <h1 className="font-bold text-2xl mb-3">
        Add your drone license to <br />
        <a href="https://www.apple.com/wallet/" className="text-[#2336A4]">
          Apple Wallet
        </a>
      </h1>
      <p className="md:mb-24 mb-10">
        Adding your drone license to Apple Wallet allows you to carry your drone
        license in accessable, offline and safe place while you are enjoying
        flying your drone. All european drone licenses are compatible. This
        website allows you to add your own, for free and with full privacy.
        Entire website is fully-open source.
      </p>
      <MainButton text="Create your own!" href="/create" />
    </Layout>
  );
}
