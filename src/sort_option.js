import * as React from "react";
import user from "./user";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

export default function Sort({ number,setNumb}) {
  //console.log(number)
  return (
    <Select
      value={number}
      onChange={(e) => console.log(e.target.value)}
      className="select"
      placeholder="Sort option..."
      color="primary"
      indicator={<KeyboardArrowDown />}
      sx={{
        backgroundColor: "white",
        width: 240,
        [`& .${selectClasses.indicator}`]: {
          transition: "0.2s",
          [`&.${selectClasses.expanded}`]: {
            transform: "rotate(-180deg)",
          },
        },
      }}
    >
      <Option
        sx={{
          backgroundColor: "white",
          "&:hover": { backgroundColor: "#cdcdce" },
        }}
        onMouseDown={()=>setNumb(0)}
        value={0}
      >
        Sort by ID
      </Option>
      <Option
        sx={{
          backgroundColor: "white",
          "&:hover": { backgroundColor: "#cdcdce" },
        }}
        onMouseDown={()=>setNumb(1)}
        value={1}
      >
        Sort by User Name
      </Option>
      <Option
        sx={{
          backgroundColor: "white",
          "&:hover": { backgroundColor: "#cdcdce" },
        }}
        onMouseDown={()=>setNumb(2)}
        value={2}
      >
        Sort by Email
      </Option>
      <Option
        sx={{
          backgroundColor: "white",
          "&:hover": { backgroundColor: "#cdcdce" },
        }}
        onMouseDown={()=>setNumb(3)}
        value={3}
      >
        Sort by Phone
      </Option>
      <Option
        sx={{
          backgroundColor: "white",
          "&:hover": { backgroundColor: "#cdcdce" },
        }}
        onMouseDown={()=>setNumb(4)}
        value={4}
      >
        Sort by Company Name
      </Option>
      <Option
        sx={{
          backgroundColor: "white",
          "&:hover": { backgroundColor: "#cdcdce" },
        }}
        onMouseDown={()=>setNumb(5)}
        value={5}
      >
        Sort by Website
      </Option>
    </Select>
  );
}
