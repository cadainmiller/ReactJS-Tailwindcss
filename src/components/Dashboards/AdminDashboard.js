import React from "react";
import Footer from "../Shared/Footer";
import NavBar from "../Shared/NavBar";
import SideBar from "../Shared/SideBar";
import MainBody from "../Shared/MainBody";

export default function AdminDashboard() {
  return (
    <div>
      <NavBar />
      <div className="flex overflow-hidden bg-white pt-16">
        <aside
          id="sidebar"
          className="fixed hidden z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
          aria-label="Sidebar"
        >
          <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <SideBar />
            </div>
          </div>
        </aside>
        <div
          className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
          id="sidebarBackdrop"
        ></div>
        <div
          id="main-content"
          className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
        >
          <MainBody />
          <Footer />
        </div>
      </div>
      {/* <script async defer src="https://buttons.github.io/buttons.js"></script>
        <script src="https://demo.themesberg.com/windster/app.bundle.js"></script> */}
    </div>
  );
}
