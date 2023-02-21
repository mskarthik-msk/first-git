import "./App.css";
// import user from "./user";
import { useState, useEffect } from "react";

import Paper from "@mui/material/Paper";
import BasicTable from "./table";
import Search from "./search";
import DataTable from "./table";
import Sort from "./sort_option";
import Filter from "./filter_option";

function App() {
  const [user, setUser] = useState();
  const [number, setNumb] = useState(0);
  const [filterval, setFilter] = useState();
  const [sortval, setSortval] = useState();
  const [searching, setSearching] = useState("");
  const [add, setAdd] = useState([
    {
      ids: "",
      names: "",
      emails: "",
      phones: "",
      companys: "",
      citys: "",
      websites: "",
    },
  ]);
  var tempArray = [];

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then(
        (json) =>
        //  {
        //   json.forEach((e) => {
        //     tempArray.push({
        //       ids: e.id,
        //       names: e.name,
        //       emails: e.email,
        //       phones: e.phone,
        //       citys: e.address.city,
        //       companys: e.company.name,
        //     });
        //     setUser(tempArray);
        //   });
        // }
        {setUser(json);}
      );
  }, []);
  // console.log(searching.length);

  return (
    <div className="App">
      <header className="App-header">
        <Paper elevation={20} className="paper">
          <h1>User Data</h1>
          <div className="header">
            <Search
              searching={searching}
              setSearching={setSearching}
              user={user}
              setUser={setUser}
              filterval={filterval}
              setFilter={setFilter}
            />
            <Filter number={number} setNumb={setNumb} />
            <Sort number={number} setNumb={setNumb} />
          </div>
          <DataTable
            user={user}
            setUser={setUser}
            add={add}
            setAdd={setAdd}
            number={number}
            setNumb={setNumb}
            filterval={filterval}
            setFilter={setFilter}
            setSortval={setSortval}
            sortval={sortval}
            searching={searching}
            setSearching={setSearching}
            setDecending={setAdd}
            decending={add}
            className="basic"
          />
          {/* <BasicTable
            user={user}
            setUser={setUser}
            number={number}
            setNumb={setNumb}
            filterval={filterval}
            setFilter={setFilter}
            setSortval={setSortval}
            sortval={sortval}
            searching={searching}
            className="basic"
          /> */}
          <br />
        </Paper>
      </header>
    </div>
  );
}

export default App;
