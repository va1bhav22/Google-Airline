import { useEffect, useState } from "react";
import { navData } from "../core/NavMenues";
import { useRouter } from "next/router";
const RedirectMenus = () => {
  const [active, setActive] = useState<number>(1);
  const router = useRouter();
  useEffect(() => {
    const currentPath = router.pathname;
    // console.log("currentPath====>", currentPath);

    const activeNavItem = navData.find((item) => item.path === currentPath);
    // console.log("activeNavItem====>", activeNavItem);
    if (activeNavItem) {
      setActive(activeNavItem.id);
    }
  }, [router.pathname]);
  const handlePath = (path: string) => {
    if (path) {
      router.push(path);
    }
  };
  return (
    <div className="flex gap-5 justify-center pt-6">
      {navData?.map((item) => (
        <div
          key={item.id}
          className={`cursor-pointer flex flex-col items-center text-xs  md:text-sm hover:bg-gray-200 transition-all duration-500 ease-in-out  rounded-md px-2 md:px-4 py-1 md:py-3 ${
            item.id === 1 ? "hidden" : "block"
          }`}
          onClick={() => handlePath(item?.path)}
        >
          <div className=" text-2xl ">{item?.icon}</div>
          <p>{item?.name}</p>
        </div>
      ))}
    </div>
  );
};

export default RedirectMenus;
