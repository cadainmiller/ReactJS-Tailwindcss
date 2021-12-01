import React from "react";
import MainDashboard from "../Components/Main-Dashboard/MainDashboard";
import Users from "../Components/Users/Users";

export default function MainBody({ page }) {
  console.log(page);
  return (
    <main>
      <div className="pt-6 px-4">
        {/* <MainDashboard /> */}
        {(() => {
          switch (page) {
            case "Dashboard":
              return <MainDashboard />;
            case "Users":
              return <Users />;
            default:
              return null;
          }
        })()}
      </div>
    </main>
  );
}
