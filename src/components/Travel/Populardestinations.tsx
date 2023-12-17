import GoogleMapReact from "google-map-react";
import ICONS from "@/assets/icons";
import { travelData } from "../core/Data";
import { useState } from "react";
interface MarkerProps {
  lat: number;
  lng: number;
  text: string;
  selected: boolean;
  onClick: () => void;
}

const Marker: React.FC<MarkerProps> = ({ text, selected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={` h-6 w-6 border-2 border-white bg-sky-500 rounded-full  ${
        selected ? " " : ""
      }`}
    >
      {/* {text} */}
    </div>
  );
};
const Populardestinations = () => {
  const indiaCenter = { lat: 20.5937, lng: 78.9629 }; // Center of India
  const indiaZoom = 4.5; // Zoom level for India
  const [selectedMarker, setSelectedMarker] = useState<number | null>(null);
  const markers = [
    { lat: 28.6139, lng: 77.209, text: "Delhi" },
    { lat: 12.9716, lng: 77.5946, text: "Bengaluru" },
    { lat: 19.076, lng: 72.8777, text: "Mumbai" },
  ];

  // const mapOptionsTerrain: any = {
  //   mapTypeId: "terrain",
  //   zoomControlOptions: {
  //     position: window.google.maps.ControlPosition.RIGHT_TOP,
  //   },
  // };

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
      <div className="w-full ">
        <div
          className="rounded-2xl"
          style={{ height: "100%", width: "100%", borderRadius: "100px" }}
        >
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyB_u5cDhQgCxTadFs8cvwkbhWEC-YsbjPU",
            }}
            defaultCenter={indiaCenter}
            defaultZoom={indiaZoom}
          >
            {markers.map((marker, index) => (
              <Marker
                key={index}
                lat={marker.lat}
                lng={marker.lng}
                text={marker.text}
                selected={index === selectedMarker}
                onClick={() => setSelectedMarker(index)}
                // options={mapOptionsTerrain}
              />
            ))}
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
};

export default Populardestinations;
