import React from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <nav>
        <div className="flex justify-center pt-8 relative z-20 bg-white bg-opacity-80 p-4 mx-auto">
          <Image
            src="/innoventure.png"
            width="500"
            height="500"
            alt="Innoventure Sjec"
            className="h-auto w-auto"
          />
          <div className="flex justify-center mt-8">
            {" "}
            <Link href="/form">
              <button className="absolute right-0 top-8 border-2 border-[#EA3A36] rounded-lg px-3 pr-2 py-2 text-[#EA3A36] cursor-pointer hover:bg-[#EA3A36] hover:text-[#FFFFFF]">
                Login
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <div className="mt-4 text-center">
        <div className="flex flex-col items-center mt-8">
          <Image
            src="/primebg.png"
            width="2000"
            height="2000"
            alt="Prime Background"
            className="h-auto w-auto"
          />
          <span className=" text-[#EA3A36] mt-4">
            Accelerated Entrepreneurial Experience
          </span>
        </div>
        <div className="mt-8 px-4">
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Prime 2024 is the ultimate platform for showcasing the top products
            of the year. Join us as we celebrate innovation, excellence, and the
            incredible achievements of our participants. From cutting-edge
            technology to groundbreaking designs, Prime 2024 highlights the best
            of the best. Stay tuned for an exciting journey into the future of
            products.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Link href="/leaderboard">
          <button className="border-2 border-[#EA3A36] rounded-lg px-3 pr-2 py-2 text-[#EA3A36] cursor-pointer hover:bg-[#EA3A36] hover:text-[#FFFFFF]">
            Leaderboard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
