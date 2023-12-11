import ICONS from "@/assets/icons";
import { travelData } from "../core/Data";
const Populardestinations = () => {
  return (
    <div className="flex main-container md:flex-row flex-col gap-4">
      <div className="w-full flex flex-col gap-y-3 ">
        {travelData?.map((item) => (
          <div className=" flex border rounded-2xl hover:shadow-[rgba(17,_17,_16,_0.1)_0px_0px_10px] transition-all duration-300 ease-out">
            <div className=" w-[40%] h-[155px] ">
              <img
                src={item?.image}
                alt="destination image"
                className="object-cover h-full w-full object-center rounded-l-2xl"
              />
            </div>
            <div className="p-3 w-[60%]">
              <h4 className="font-medium text-[18px]">{item?.title}</h4>
              <p className="text-sm">
                {item?.startDate} - {item?.endDate}
              </p>
              <p className="text-sm pt-3">{item?.menus}</p>
              <div className="flex flex-col  justify-end  items-end">
                <div className="flex gap-2">
                  <span className="text-black text-xl">
                    <ICONS.hotel />
                  </span>
                  <p className="font-semibold">₹{item?.amount}</p>
                </div>
                {item?.flightAmount && (
                  <div className="flex gap-2 ">
                    <span className="text-black text-xl">
                      <ICONS.flight />
                    </span>
                    <p className="font-semibold">₹{item?.flightAmount}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full border-2 border-green-600"></div>
    </div>
  );
};

export default Populardestinations;
