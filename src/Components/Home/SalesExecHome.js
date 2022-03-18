import React, { useState } from "react";
import CreateOrder from "./MainPage/CreateOrder";
import Orders from "./MainPage/Orders";
import Sidebar from "./Sidebar/Sidebar";

function SalesExecHome({ checkAdmin }) {
  const [selectedTab, isSelectedTag] = useState("Create Order");

  return (
    <>
      <Sidebar
        selectedTab={selectedTab}
        isSelectedTag={isSelectedTag}
        checkAdmin={checkAdmin}
      />
      <div className="w-75 mx-auto p-2 rounded ">
        {selectedTab === "Create Order" && <CreateOrder />}
        {selectedTab === "Orders" && <Orders />}
      </div>
    </>
  );
}

export default SalesExecHome;
