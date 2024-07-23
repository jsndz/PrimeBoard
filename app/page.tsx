import React from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="bg-gradient-to-r from-[#87cefa] to-[#ffffff] min-h-screen w-full flex flex-col bg-center">

      <nav className="relative z-20 bg-black bg-opacity-90 shadow-md">
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

      <main className="flex-1 text-center mt-12">
        <div className="relative flex flex-col items-center">
          <Image
            src="/primebg.png"
            width="1500"
            height="800"
            alt="Prime Background"
            className="w-full h-auto max-w-full"
          />
          <span className="bottom-4 text-[#EA3A36] text-4xl font-extrabold tracking-wider px-4 py-2 rounded-lg mt-9 bg-[#FFFFFF] shadow-md uppercase">
         Accelerated Entrepreneurial Experience
          </span>
        </div>

        <section className="mt-8 px-5">
          <p className="text-lg text-white max-w-3xl mx-auto">
            Experience the pinnacle of innovation and excellence at Prime 2024, where we showcase this year's top products. 
            Celebrate the remarkable achievements of our participants, featuring cutting-edge technology and groundbreaking designs. 
            Prime 2024 highlights the crème de la crème of creativity and ingenuity. 
            Join us on an exhilarating journey into the future of products.
          </p>
        </section>


          <div className="mt-4 mb-8">
          <Link href="/leaderboard">
            <button className="border-2 border-[#1e90ff] rounded-full px-4 py-2 mr-5 text-[#ff8d35] bg-[#1e90ff1a] shadow-sm cursor-pointer hover:bg-[#ff8d35] hover:text-[#FFFFFF] hover:shadow-[0_0_10px_#ff8d35] focus:shadow-[0_0_10px_#ff8d35] transition-colors duration-300">
              Leaderboard
            </button>
          </Link>
          <Link href="/form">
            <button className="mt-4 border-2 border-[#1e90ff] rounded-full px-4 py-2 text-[#ff8d35] bg-[#1e90ff1a] shadow-sm cursor-pointer hover:bg-[#ff8d35] hover:text-[#FFFFFF] hover:shadow-[0_0_10px_#ff8d35] focus:shadow-[0_0_10px_#ff8d35] transition-colors duration-300">
              Login
            </button>
          </Link>
          
        </div>
        
      </main>
      <footer className="bg-gray-800 text-white py-4 text-center">
    <p>&copy; 2024 Prime Innoventure 2024. All rights reserved.</p>
  </footer>

      
      
    </div>
    
  );
};

export default Page;
