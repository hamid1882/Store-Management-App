import React, { useState } from "react";
import Inventory from "./MainPage/Inventory";
import CreateOrder from "./MainPage/CreateOrder";
import Orders from "./MainPage/Orders";
import SalesExecutive from "./MainPage/SalesExecutive";
import Sidebar from "./Sidebar/Sidebar";

function AdminHome() {
  const [selectedTab, isSelectedTag] = useState("Inventory");

  return (
    <>
      <Sidebar selectedTab={selectedTab} isSelectedTag={isSelectedTag} />
      <div className="border  w-75 mx-auto p-2 rounded ">
        {selectedTab === "Inventory" && <Inventory />}
        {selectedTab === "Sales Executive" && <SalesExecutive />}
        {selectedTab === "Create Order" && <CreateOrder />}
        {selectedTab === "Orders" && <Orders />}
      </div>
    </>
  );
}

export default AdminHome;
