import React, { useState } from "react";
import CreateOrder from "./MainPage/CreateOrder";
import Orders from "./MainPage/Orders";
import Sidebar from "./Sidebar/Sidebar";

function SalesExecHome({ isSalesExec }) {
  const [selectedTab, isSelectedTag] = useState("Create Order");

  return (
    <>
      <Sidebar
        selectedTab={selectedTab}
        isSelectedTag={isSelectedTag}
        isSalesExec={isSalesExec}
      />
      <div className="border border-light w-75 mx-auto p-2 rounded ">
        {selectedTab === "Create Order" && <CreateOrder />}
        {selectedTab === "Orders" && <Orders />}
      </div>
    </>
  );
}

export default SalesExecHome;
