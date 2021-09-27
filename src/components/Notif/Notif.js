import { BiBell, BiRadioCircle } from "react-icons/bi";
import Menu from "@mui/material/Menu";
import * as React from "react";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
const Notif = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div
        onClick={handleClick}
        className="p-2 bg-p-gray-box notif-svg rounded-md cursor-pointer"
      >
        <BiBell className="text-xl" />
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        PaperProps={{
          style: {
            padding: "0",
          },
        }}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          <BiRadioCircle className="ml-1 text-green-600 text-lg" />
          <span>یک پیام جدید دارید</span>
        </MenuItem>
        <Divider />
        <MenuItem>
          <BiRadioCircle className="ml-1 text-green-600 text-lg" />
          <span>مدارک شما تایید شد</span>
        </MenuItem>
        <Divider />

        <MenuItem>
          <BiRadioCircle className="ml-1 text-green-600 text-lg" />
          <span>سه سفارش جدید دارید</span>
        </MenuItem>
      </Menu>
    </>
  );
};

export default Notif;
