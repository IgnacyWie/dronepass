import Logo from "../components/logo";
import Layout from "../components/mainLayout";
import InputField from "../components/inputField";
import Hstack from "../components/hstack";
import MainButton from "../components/mainButton";
import { useState, useEffect } from "react";

export default function Create(props) {
  const [name, setName] = useState("");
  const [pid, setPid] = useState("");
  const [licenseURL, setLicenseURL] = useState("");
  const [authority, setAuthority] = useState("");
  const [category, setCategory] = useState("");
  const [expiration, setExpiration] = useState("");
  const [country, setCountry] = useState("");
  const [all, setAll] = useState(false);

  useEffect(() => {
    if (
      name &&
      pid &&
      licenseURL &&
      category &&
      expiration &&
      country &&
      authority != ""
    ) {
      setAll(true);
    }
  });

  return (
    <Layout className="">
      <Logo />
      <form className="space-y-5 mb-12">
        <h1 className="font-bold text-2xl">
          Customize info on your{" "}
          <a href="https://www.apple.com/wallet/" className="text-[#2336A4]">
            license
          </a>
        </h1>
        <InputField placeholder="Full Name" value={name} setValue={setName} />
        <Hstack className="space-x-2"></Hstack>
        <InputField
          placeholder="Pilot Identification Number"
          value={pid}
          setValue={setPid}
        />
        <InputField
          placeholder="Authority"
          value={authority}
          setValue={setAuthority}
        />
        <div>
          <InputField
            placeholder="Your license URL"
            value={licenseURL}
            setValue={setLicenseURL}
          />
          <p className="text-xs text-gray-500 ml-1 mt-1">
            The url that appears after scanning QR code from your existing drone
            license.
          </p>
        </div>
        <Hstack className="space-x-2">
          <InputField
            placeholder="Category"
            value={category}
            setValue={setCategory}
          />
        </Hstack>
        <Hstack className="space-x-2">
          <InputField
            placeholder="Expiration Date"
            value={expiration}
            setValue={setExpiration}
          />
          <InputField
            placeholder="Country"
            value={country}
            setValue={setCountry}
          />
        </Hstack>
      </form>
      <MainButton
        text="Next, Add your license to your wallet"
        href={{
          pathname: "/add",
          query: {
            name: name,
            pid: pid,
            url: licenseURL,
            authority: authority,
            category: category,
            expiration: expiration,
            country: country,
          },
        }}
      />
      <p className="text-gray-500 text-xs mt-2 ml-2">
        All fields are mandatory. Without them the document will not be valid.
      </p>
    </Layout>
  );
}
