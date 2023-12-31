import { Box } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setAccount } from "../redux/features/accountSlice";

const DropNav = ({ items }) => {
  const dispath = useDispatch();
  const handleClick = (title) => {
    if (title === "Đăng xuất") {
      dispath(setAccount(null));
    }
  };
  return (
    <section className="navdrop">
      <Box
        sx={{
          marginTop: "12px",
          position: "absolute",
          zIndex: "2",
          backgroundColor: "#fff",
          borderRadius: "4px",
          padding: "12px 24px",
          minWidth: "280px",
          boxShadow: "rgba(0, 0, 0, 0.32) -3.67394e-16px 2px 8px 0px",
        }}
      >
        {items.map((item, index) => {
          {/* console.log(item); */}
          return (
            <Box
              key={index}
              sx={{
                padding: "8px",
                borderBottom: "1px solid #ececec",
                ":last-child": {
                  borderBottom: "none",
                },
                "&::after": {
                  content: `""`,
                  position: "absolute",
                  width: "80px",
                  backgroundColor: "transperant",
                  height: "24px",
                  top: "-20px",
                  left: "10px",
                },
              }}
            >
              <Link
                to={item.path}
                onClick={() => {
                  handleClick(item.title);
                }}
              >
                {item.title}
              </Link>
            </Box>
          );
        })}
      </Box>
    </section>
  );
};

export default DropNav;
