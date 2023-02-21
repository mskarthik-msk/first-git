import * as React from "react";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

export default function Filter({ number,setNumb}) {
  //console.log("hi",number)
  return (
    <Select
      value={number}
      onChange={(e) => console.log(e.target.value)}
      className="select"
      placeholder="Filter option..."
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
        onMouseDown={()=>setNumb(6)}
        value={6}
      >
        Start with "1"
      </Option>
      <Option
        sx={{
          backgroundColor: "white",
          "&:hover": { backgroundColor: "#cdcdce" },
        }}
        onMouseDown={()=>setNumb(7)}
        value={7}
      >
        Start with "2"
      </Option>
      
    </Select>
  );
}
