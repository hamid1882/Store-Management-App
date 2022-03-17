const Sidebar = ({ selectedTab, isSelectedTag, isSalesExec }) => {
  const currentTab = (e) => {
    isSelectedTag(e.target.innerText);
  };

  return (
    <div className="w-25 vh-100 shadow  mx-2 p-2 bg-darkOrange text-light">
      <div className="w-100">
        <button
          className={`btn text-light  my-2 w-100 shadow-none shadow d-flex align-items-center gap-3 ${
            selectedTab === "Inventory" ? "btn-warning text-dark" : "none"
          } ${isSalesExec ? "d-none" : "d-flex"}`}
          onClick={currentTab}
        >
          <i className="fa fa-briefcase"></i>
          <div className="fs-4 fw-4">Inventory</div>
        </button>
        <button
          className={`btn text-light my-2 w-100 shadow-none shadow d-flex align-items-center gap-3  ${
            selectedTab === "Sales Executive" ? "btn-warning text-dark" : "none"
          } ${isSalesExec ? "d-none" : "d-flex"}`}
          onClick={currentTab}
        >
          <i className="fa fa-users"></i>
          <div className="fs-4 fw-4">Sales Executive</div>
        </button>
        <button
          className={`btn text-light my-2 w-100 shadow-none shadow d-flex align-items-center gap-3  ${
            selectedTab === "Create Order" ? "btn-warning text-dark" : "none"
          }`}
          onClick={currentTab}
        >
          <i className="fa fa-plus"></i>
          <div className="fs-4 fw-4">Create Order</div>
        </button>
        <button
          className={`btn text-light my-2 w-100 shadow-none shadow d-flex align-items-center gap-3  ${
            selectedTab === "Orders" ? "btn-warning text-dark" : "none"
          }`}
          onClick={currentTab}
        >
          <i className="fa fa-cart-plus"></i>
          <div className="fs-4 fw-4">Orders</div>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
