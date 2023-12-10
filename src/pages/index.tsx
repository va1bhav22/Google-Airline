import ICONS from "@/assets/icons";
import Populardestinations from "@/components/Travel/Populardestinations";
import RedirectMenus from "@/components/Travel/RedirectMenus";
import PublicLayout from "@/layout/public";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [inputOpen, setInputOpen] = useState<boolean>(false);
  return (
    <PublicLayout title="Google">
      <section className="">
        <img src="/travel/travel.svg" alt="" />
        <div className="flex justify-center ">
          <h1 className="text-5xl font-bold">Travel</h1>
        </div>
        <div className="flex justify-center pt-8  relative">
          <div
            className={`shadow-lg border-2 w-[80%] md:w-[60%]  lg:w-[35%] rounded-3xl  ${
              inputOpen ? "rounded-b-none " : "rounded-b-3xl"
            }`}
          >
            <div
              className="flex items-center gap-4 px-3"
              onClick={() => setInputOpen(!inputOpen)}
            >
              <div className="text-xl text-gray-500">
                <ICONS.search />
              </div>
              <input
                type="text"
                className="w-full  outline-none"
                placeholder="search for flights, hotels and more"
              />
            </div>
            <div
              className={`absolute  rounded-b-3xl  w-[80%] md:w-[60%]  lg:w-[35%] top-18  lg:left-[32.5%] left-[10%] md:left-[20%]  bg-white shadow-lg shadow-left shadow-right shadow-bottom ${
                inputOpen
                  ? " transition-all duration-300 ease-in-out  h-36 py-3 px-2 border-t border-l-2 border-r-2 border-b-2"
                  : "h-0"
              }`}
            >
              <div className={`${inputOpen ? " block" : " hidden"}`}>
                Based on your recent activity
              </div>
            </div>
          </div>
        </div>
        <div>
          <RedirectMenus />
        </div>
        <div>
          <Populardestinations />
        </div>
      </section>
    </PublicLayout>
  );
}
