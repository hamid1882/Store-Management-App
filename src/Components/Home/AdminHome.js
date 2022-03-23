import React, { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Inventory from "./MainPage/Inventory";
import SalesExecutive from "./MainPage/SalesExecutive";
import CreateOrder from "./MainPage/CreateOrder";
import Orders from "./MainPage/Orders";

function AdminHome() {
  const [selectedTab, isSelectedTag] = useState("Inventory");

  return (
    <>
      <Sidebar selectedTab={selectedTab} isSelectedTag={isSelectedTag} />
      <div className="w-75 mx-auto p-2 rounded">
        {selectedTab === "Inventory" && <Inventory />}
        {selectedTab === "Sales Executive" && <SalesExecutive />}
        {selectedTab === "Create Order" && <CreateOrder />}
        {selectedTab === "Orders" && <Orders />}
      </div>
    </>
  );
}

export default AdminHome;
