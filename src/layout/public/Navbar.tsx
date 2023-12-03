import { navData } from "@/components/core/NavMenues";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [active, setActive] = useState<number>(1);
  const router = useRouter();
  const handleRoute = () => {};
  const handlePath = (path: string) => {
    if (path) {
      router.push(path);
    }
  };
  useEffect(() => {
    const currentPath = router.pathname;
    console.log("currentPath====>", currentPath);

    const activeNavItem = navData.find((item) => item.path === currentPath);
    console.log("activeNavItem====>", activeNavItem);
    if (activeNavItem) {
      setActive(activeNavItem.id);
    }
  }, [router.pathname]);

  return (
    <section className="border sticky top-0 bg-white  ">
      <div className="py-2 w-full  main-container flex ">
        <div className=" w-[20%]"></div>
        <div className="w-[80%] flex justify-between">
          <div className=" flex items-center  gap-6 ">
            {navData.map((item) => (
              <div onClick={() => handlePath(item?.path)}>
                <Link href={""}>
                  <div
                    onClick={() => {
                      setActive(item?.id);
                    }}
                    className={`flex items-center cursor-pointer gap-1 px-3 py-2 rounded-full  border ${
                      active === item?.id ? "bg-theme-100 text-theme-500 " : ""
                    }`}
                  >
                    <div className="text-xl text-theme-600">{item?.icon}</div>
                    <div className="text-sm font-semibold">{item?.name}</div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="border-2 border-gray-500"></div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
