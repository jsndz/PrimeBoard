import React from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <nav className="relative z-20 bg-white bg-opacity-80 shadow-md">
        <div className="flex flex-col items-center py-4 px-6 mx-auto">
          <Image
            src="/innoventure.png"
            width="500"
            height="500"
            alt="Innoventure Sjec"
            className="w-auto h-auto"
          />
        </div>
      </nav>

      <main className="text-center mt-12">
        <div className="relative flex flex-col items-center">
          <Image
            src="/primebg.png"
            width="2000"
            height="2000"
            alt="Prime Background"
            className="w-full h-auto max-w-full"
          />
          <span className=" bottom-4 text-[#EA3A36] text-2xl font-semibold bg-white px-4 py-2 rounded-lg mt-9">
            Accelerated Entrepreneurial Experience
          </span>
        </div>

        <section className="mt-12 px-6">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Prime 2024 is the ultimate platform for showcasing the top products
            of the year. Join us as we celebrate innovation, excellence, and the
            incredible achievements of our participants. From cutting-edge
            technology to groundbreaking designs, Prime 2024 highlights the best
            of the best. Stay tuned for an exciting journey into the future of
            products.
          </p>
        </section>

        <div className="mt-12">
          <Link href="/leaderboard">
            <button className="border-2 border-[#ff8d35] rounded-full px-4 py-2 mr-5 text-[#ff8d35] cursor-pointer hover:bg-[#ff8d35] hover:text-[#FFFFFF] transition-colors duration-300">
              Leaderboard
            </button>
          </Link>
          <Link href="/form">
            <button className="mt-4 border-2 border-[#ff8d35] rounded-lg px-4 py-2 text-[#ff8d35] cursor-pointer hover:bg-[#ff8d35] hover:text-[#FFFFFF] transition-colors duration-300">
              Login
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Page;
