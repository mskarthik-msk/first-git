import Input from "@mui/joy/Input";

function Search({ searching, setSearching, user, setUser, filterval, setFilter}) {
  setFilter(
     searching
      ? user.filter((row) => {
          return (
            row.name.includes(searching) ||
            row.email.includes(searching) ||
            row.phone.includes(searching) ||
            row.company.name.includes(searching) ||
            row.website.includes(searching)
          );
        })
      : user
  );
  return (
    <div>
      <Input
        sx={{
          backgroundColor: "white",
        }}
        className="search"
        placeholder="Search…"
        variant="outlined"
        color="neutral"
        value={searching}
        onChange={(e) => {setSearching(e.target.value);
        }}
      />
    </div>
  );
}
export default Search;
