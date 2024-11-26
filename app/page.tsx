import Image from "next/image";
import React from "react";
import SearchBox from "./components/Search/search";

const Home = () => {
  return (
    <header className="w-full h-[12%] absolute top-0 left-0 flex flex-row items-center justify-between p-5">
      <Image
        src="/images/profile.jpeg"
        alt="profile"
        width={38}
        height={38}
        className="rounded-[50%] border shadow"
      />
      <SearchBox />
    </header>
  );
};

export default Home;
