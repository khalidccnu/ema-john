import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import anmNoItCt from "../asset/no-internet-connection.json";

const IsOnline = ({ children: Outlet }) => {
  const [isOnline, setOnline] = useState(true);

  const handleOnlineStatus = (_) => {
    setOnline(true);
  };

  const handleOfflineStatus = (_) => {
    setOnline(false);
  };

  useEffect((_) => {
    setOnline(typeof navigator.onLine === "boolean" ? navigator.onLine : true);

    addEventListener("online", handleOnlineStatus);
    addEventListener("offline", handleOfflineStatus);

    return (_) => {
      addEventListener("online", handleOnlineStatus);
      addEventListener("offline", handleOfflineStatus);
    };
  }, []);

  return isOnline ? (
    Outlet
  ) : (
    <section className="py-5">
      <div className="container">
        <div className="card max-w-sm mx-auto bg-white">
          <figure>
            <Lottie animationData={anmNoItCt} loop={true} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Oops!</h2>
            <h4 className="font-medium">Internet Connection Lost</h4>
            <p className="text-gray-500">
              Make sure your device is connected to the WiFi or switch to mobile
              data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IsOnline;
