import * as React from "react";
import "./App.css";
import Inp from "./input";
// import user from "./user";
import { useState, useEffect } from "react";
import LinearIndeterminate from "./loading";
import Search from "./search";
import DescriptionAlerts from "./alert";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Input from "@mui/joy/Input";

import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridActionsCellItem,
  GridRowId,
  GridColumns,
  GridToolbarColumnsButton,
  GridToolbarContainer,
} from "@mui/x-data-grid";
// import TextField from '@mui/material/TextField';

import {
  randomCreatedDate,
  randomUpdatedDate,
} from "@mui/x-data-grid-generator";
import { TextField, colors } from "@mui/material";

export default function DataTable({
  add,
  setAdd,
  user,
  setUser,
  searching,
  setSearching,
  number,
  filterval,
  setFilter,
}) {

const CustomToolbar = () => (
  <div>
    <GridToolbarContainer
      sx={{ backgroundColor: "#cdcdce", height: "45px", margin: "10px" }}
    >
      <GridToolbarColumnsButton
        sx={{ color: "#363636", backgroundColor: "white" }}
      />
    </GridToolbarContainer>

    {/* <Input
        sx={{
          backgroundColor: "white",
          marginBottom: "20px"
        }}
        className="search"
        placeholder="Search…"
        variant="outlined"
        color="neutral"
        onChange={(e) => {setSearching(e.target.value);console.log("ddfafsd")}}
      /> */}
    {/* <TextField sx={{float:"right", marginRight:"50px"}} {...props}/> */}

  </div>
);

  const columns: GridColumns[] = [
    { field: "id", headerName: <h3>ID</h3>, width: 100 },
    { field: "name", headerName: <h3>User Name</h3>, width: 200 },
    { field: "email", headerName: <h3>Email</h3>, width: 200 },
    { field: "phone", headerName: <h3>Phone</h3>, width: 200 },
    { field: "companys", headerName: <h3>Company Name</h3>, width: 200 },
    { field: "citys", headerName: <h3>City Name</h3>, width: 200 },
    { field: "website", headerName: <h3>Website</h3>, width: 200 },
    // { field: "action", headerName: <h3>Edit</h3>, width: 200 },
    {
      field: "actions",
      type: "actions",
      headerName: <h3>Delete</h3>,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={() => DeleteUser(params.id)}
        />,
      ],
      width: 100,
    },
  ];

  const DeleteUser = (id) => {
    console.log(id);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        setUser(user.filter((e) => e.id !== id));
      });
  };
  // setUser(searching.length > 0 ? 
  //   user.filter((row) => {
  //         return(
  //          row.name.includes(searching) ||
  //           row.email.includes(searching) ||
  //           row.phone.includes(searching) ||
  //           row.company.name.includes(searching) ||
  //           row.website.includes(searching))}):user);
  
  // const requestSearch = (searchValue: string) => {
  //   const searchRegex = new RegExp(`.*${searchValue}.*`, "ig");
  //   const filteredRows = user.filter((o: any) => {
  //     return Object.keys(o).some((k: any) => {
  //       return searchRegex.test(o[k].toString());
  //     });
  //   });
  //   setUser(filteredRows);
  // };

  // const cancelSearch = () => {
  //   setSearching("");
  //   requestSearch(searching);
  // };
  
  // const [rows, setRows] = useState(user);

  // const deleteUser = useCallback(
  //   (id: GridRowId) => () => {
  //     setTimeout(() => {
  //       setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  //     });
  //   },
  //   []
  // );
  // console.log("table", searching.length);

  // let listShowing =
  //   searching && searching.length > 0
  //     ? user &&user.map((x, i) => {
  //         return x.name.includes(searching) ? <p>{x.name}</p> : "";
  //       })
  //     : user
  
  return (
    <Paper elevation={20} className="paper">
      <div style={{ height: 520, width: 1270, padding: 20 }}>
        {user ? (
          <DataGrid
            components={{ Toolbar: CustomToolbar }}
            rows={filterval}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            // componentsProps={{
            //   toolbar: {
            //     value: searching,
            //     onChange: (searchVal: string) => requestSearch(searchVal),
            //     onCancelSearch: () => cancelSearch()
            //   }
            // }}     hlo ravi irukiy wait mm ok zzz...zz
          />
        ) : (
          <div>
            <h4 className="green">Loading...</h4>
            <LinearIndeterminate />
          </div>
        )}
      </div>
    </Paper>
  );
}

// export default function BasicTable({
//   searching,
//   number,
//   filterval,
//   user,
//   setUser,
// }) {
//   switch (number) {
//     case 0:
//       user.sort((a, b) => {
//         if (a.id < b.id) return -1;
//         if (a.id > b.id) return 1;
//       });
//       break;
//     case 1:
//       user.sort((a, b) => {
//         if (a.name < b.name) return -1;
//         if (a.name > b.name) return 1;
//       });
//       break;

//     case 2:
//       user.sort((a, b) => {
//         if (a.email < b.email) return -1;
//         if (a.email > b.email) return 1;
//       });
//       break;
//     case 3:
//       user.sort((a, b) => {
//         if (a.phone < b.phone) return -1;
//         if (a.phone > b.phone) return 1;
//       });
//       break;
//     case 4:
//       user.sort((a, b) => {
//         if (a.company.name < b.company.name) return -1;
//         if (a.company.name > b.company.name) return 1;
//       });
//       break;
//     case 5:
//       user.sort((a, b) => {
//         if (a.website < b.website) return -1;
//         if (a.website > b.website) return 1;
//       });
//       break;
//     case 6:
//       user.filter((x, y) => {
//         return x.phone.slice(0, 1) === "1";
//       });
//       break;
//     case 7:
//       user.filter((x) => {
//         return x.phone.slice(0, 1) === "2";
//       });
//       break;
//   }
//   let cope = [...user]
//   // const DeleteOpp=()=>
//   // var one = user.filter((x) => {x.phone.slice(0,1) === "1"});

//   return (
//     <div style={{ width: "100%" }}>
//       <Paper elevation={15} sx={{ padding: "10px" }}>
//         <TableContainer component={Paper}>
//           <Table
//             pagination={true}
//             sx={{ minWidth: "1400px", margin: "30px" }}
//             aria-label="simple table"
//           >
//             <TableHead>
//               <TableRow className="font">
//                 <TableCell className="head">
//                   <h3>ID</h3>
//                 </TableCell>
//                 <TableCell className="head">
//                   <h3>User Name</h3>
//                 </TableCell>
//                 <TableCell className="head">
//                   <h3>Email</h3>
//                 </TableCell>
//                 <TableCell className="head">
//                   <h3>Phone</h3>
//                 </TableCell>
//                 <TableCell className="head">
//                   <h3>Company Name</h3>
//                 </TableCell>
//                 <TableCell className="head">
//                   <h3>Website</h3>
//                 </TableCell>
//                 <TableCell className="head">
//                   <h3>Edit</h3>
//                 </TableCell>
//                 <TableCell className="head">
//                   <h3>Delete</h3>
//                 </TableCell>
//               </TableRow>
//             </TableHead>

//             <TableBody>
// {searching.length > 0
//   ? user.map((row) => {
//       return row.name.includes(searching) ||
//         row.email.includes(searching) ||
//         row.phone.includes(searching) ||
//         row.company.name.includes(searching) ||
//         row.website.includes(searching) ? (
//                       <TableRow>
//                         <TableCell>{row.id}</TableCell>
//                         <TableCell>{row.name}</TableCell>
//                         <TableCell>{row.email}</TableCell>
//                         <TableCell>{row.phone}</TableCell>
//                         <TableCell>{row.company.name}</TableCell>
//                         <TableCell>{row.website}</TableCell>
//                         <TableCell>
//                         <IconButton aria-label="delete" size="large">
//                           <DeleteIcon fontSize="inherit" />
//                         </IconButton>
//                         </TableCell>
//                         <TableCell>
//                         <IconButton aria-label="delete" size="large">
//                           <EditIcon fontSize="inherit" />
//                         </IconButton>
//                         </TableCell>
//                       </TableRow>
//                     ) : (
//                       ""
//                     );
//                   })
//                 : user.map((row,index) => {
//                     return (
//                       <TableRow>
//                         <TableCell>{row.id}</TableCell>
//                         <TableCell>{row.name}</TableCell>
//                         <TableCell>{row.email}</TableCell>
//                         <TableCell>{row.phone}</TableCell>
//                         <TableCell>{row.company.name}</TableCell>
//                         <TableCell>{row.website}</TableCell>
//                         <TableCell>
//                         <IconButton aria-label="delete" size="large" >
//                           <DeleteIcon fontSize="inherit" />
//                         </IconButton>
//                         </TableCell>
//                         <TableCell>
//                         <IconButton aria-label="delete" size="large">
//                           <EditIcon fontSize="inherit" />
//                         </IconButton>
//                         </TableCell>
//                       </TableRow>
//                     );
//                   })}
//             </TableBody>

//             {/* <TablePagination
//               component="div"
//               count={100}
//               page={page}
//               onPageChange={handleChangePage}
//               rowsPerPage={rowsPerPage}
//               onRowsPerPageChange={handleChangeRowsPerPage}
//             /> */}
//           </Table>
//         </TableContainer>
//       </Paper>
//     </div>
//   );
// }
