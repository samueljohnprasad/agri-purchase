import React from "react";

const sidetabs = [
  "Agri-Input Master Maintenance",
  "Supplier Master Maintenance",
  "Agri-Input Purchase Requests",
];
function SideBar() {
  return (
    <section
      className="h-screen w-full bg-gray-700 px-8 py-4 space-y-8 text-gray-300"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="border-b">
        <h1 className="text-gray-200 text-xl">Agri Purchase Management </h1>
      </div>
      {sidetabs.map((item) => {
        return (
          <div className=" hover:text-green-500 text-sm">
            <a href="">{item}</a>
          </div>
        );
      })}
      <footer className="absolute bottom-12">
        <div>
          <p className="border-t text-center">Tax Master Maintenance</p>
        </div>
      </footer>
    </section>
  );
}

export default SideBar;
