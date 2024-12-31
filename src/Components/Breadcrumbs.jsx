import React from "react";
import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="text-sm mb-4">
      <ul className="flex items-center gap-2 text-gray-600">
        <li>
          <Link to="/" className="text-blue-500 hover:underline">
            Home
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <React.Fragment key={to}>
              <li>/</li>
              <li>
                {isLast ? (
                  <span className="text-gray-700 capitalize">{name}</span>
                ) : (
                  <Link to={"/Menu"} className="text-blue-500 hover:underline capitalize">
                    {name}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
