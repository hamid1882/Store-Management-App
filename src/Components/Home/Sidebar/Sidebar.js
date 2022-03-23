import "./Sidebar.css";

const Sidebar = ({ selectedTab, isSelectedTag, checkAdmin }) => {
  const currentTab = (e) => {
    isSelectedTag(e.target.innerText);
  };

  const checkIfSalesExec = checkAdmin === "test-sales" ? "d-none" : "d-flex";

  const allTabs = ["Inventory", "Sales Executive", "Create Order", "Orders"];

  const handleCurrentTab = (currentTab) => {
    return selectedTab === currentTab ? "btn-warning text-dark" : "none";
  };

  return (
    <div className="w-25 custom-height mx-2 p-2 border-warning border-end bg-darkOrange text-light">
      <div className="w-100">
        <button
          className={`btn text-light  my-2 w-100 shadow-none shadow d-flex align-items-center gap-3 ${handleCurrentTab(
            allTabs[0]
          )} ${checkIfSalesExec}`}
          onClick={currentTab}
        >
          <i className="fa fa-briefcase"></i>
          <div className="fs-4 fw-4">Inventory</div>
        </button>
        <button
          className={`btn text-light my-2 w-100 shadow-none shadow d-flex align-items-center gap-3  ${handleCurrentTab(
            allTabs[1]
          )} ${checkIfSalesExec}`}
          onClick={currentTab}
        >
          <i className="fa fa-users"></i>
          <div className="fs-4 fw-4">Sales Executive</div>
        </button>
        <button
          className={`btn text-light my-2 w-100 shadow-none shadow d-flex align-items-center gap-3  ${handleCurrentTab(
            allTabs[2]
          )}`}
          onClick={currentTab}
        >
          <i className="fa fa-plus"></i>
          <div className="fs-4 fw-4">Create Order</div>
        </button>
        <button
          className={`btn text-light my-2 w-100 shadow-none shadow d-flex align-items-center gap-3  ${handleCurrentTab(
            allTabs[3]
          )}`}
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
