import { ResponsiveNavData } from "@/components/core/NavMenues";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const ResponsiveNavbar = () => {
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
    // console.log("currentPath====>", currentPath);

    const activeNavItem = ResponsiveNavData.find(
      (item) => item.path === currentPath
    );
    // console.log("activeNavItem====>", activeNavItem);
    if (activeNavItem) {
      setActive(activeNavItem.id);
    }
  }, [router.pathname]);
  return (
    <div>
      {ResponsiveNavData.map((item) => (
        <div onClick={() => handlePath(item?.path)} key={item.id}>
          <div
            className={`flex gap-5 py-3 pl-5 cursor-pointer hover:bg-gray-100 rounded-r-full ${
              active === item?.id
                ? "bg-theme-100 text-theme-600 "
                : " text-gray-700"
            }`}
          >
            <div
              onClick={() => {
                setActive(item?.id);
              }}
              className={`text-2xl `}
            >
              {item?.icon}
            </div>
            <div className="font-semibold text-sm ">{item?.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResponsiveNavbar;
