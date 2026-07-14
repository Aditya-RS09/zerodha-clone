import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
 const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    const savedName = localStorage.getItem("zerodha_user_name");
    if (savedName) {
      setUserName(savedName);
    }
  }, []);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const getInitials = (name) => {
    const parts = name.trim().split(" ").filter(Boolean);
    if (parts.length === 0) return "U";
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  };

  const handleLogout = () => {
    localStorage.removeItem("zerodha_user_mobile");
    localStorage.removeItem("zerodha_user_name");
    window.location.href = "https://zerodhafrontend-a.netlify.app/signup";
  };

  const menuClass="menu";
  const activeMenuClass="menu selected";
  return (
    <div className="menu-container">
      <img src="logo.png" alt="logo" className="logo" />

      <div className="menus">
        <ul>
          <Link style={{textDecoration:"none"}} to="/" onClick={()=>handleMenuClick(0)}>
          <li>
            <p className={selectedMenu===0 ? activeMenuClass: menuClass}>Dashboard</p>
          </li>
          </Link>

          <Link style={{textDecoration:"none"}} to="/Orders" onClick={()=>handleMenuClick(1)}>
          <li>
            <p className={selectedMenu===1 ? activeMenuClass: menuClass}>Orders</p>
          </li>
          </Link>

          <Link style={{textDecoration:"none"}} to="/Holdings" onClick={()=>handleMenuClick(2)}>
          <li>
            <p className={selectedMenu===2 ? activeMenuClass: menuClass}>Holdings</p>
          </li>
          </Link>

          <Link style={{textDecoration:"none"}} to="/Positions" onClick={()=>handleMenuClick(3)}>
          <li>
            <p className={selectedMenu===3 ? activeMenuClass: menuClass}>Positions</p>
          </li>
          </Link>

          <Link style={{textDecoration:"none"}} to="/Funds" onClick={()=>handleMenuClick(4)}>
          <li>
            <p className={selectedMenu===4 ? activeMenuClass: menuClass}>Funds</p>
          </li>
          </Link>

          <Link style={{textDecoration:"none"}} to="/Apps" onClick={()=>handleMenuClick(5)}>
          <li>
            <p className={selectedMenu===5 ? activeMenuClass: menuClass}>Apps</p>
          </li>
          </Link>
        </ul>

        <hr />

        <div className="profile" onClick={handleProfileClick} style={{ position: "relative", cursor: "pointer" }}>
          <div className="avatar">{getInitials(userName)}</div>
          <p className="username">{userName}</p>

          {isProfileDropdownOpen && (
            <div
              style={{
                position: "absolute",
                top: "50px",
                right: "0",
                background: "#fff",
                border: "1px solid #e0e0e0",
                borderRadius: "6px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
                padding: "12px",
                width: "160px",
                zIndex: 100,
              }}
            >
              <p style={{ margin: "0 0 10px 0", fontWeight: "500", color: "#424242" }}>
                {userName}
              </p>
              <hr style={{ margin: "0 0 10px 0" }} />
              <button
                onClick={handleLogout}
                style={{
                  width: "100%",
                  padding: "8px",
                  background: "#387ed1",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;