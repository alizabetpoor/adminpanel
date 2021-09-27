import * as React from "react";
import userphoto from "../../assets/images/user.JPG";
import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
const ProfileMenu = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="flex items-center space-x-1 space-x-reverse z-10 ">
      <BiChevronDown
        onClick={handleClick}
        className={`${
          props.color ? props.color : "text-gray-500"
        } cursor-pointer`}
      />

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          style: {
            padding: "5px",
          },
        }}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          <Link to="/">پروفایل</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/setting">تنظیمات</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/">خروج</Link>
        </MenuItem>
      </Menu>
      <img src={userphoto} className="h-8 w-8 rounded-md" alt="" />
    </div>
  );
};

export default ProfileMenu;
