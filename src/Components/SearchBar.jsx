import { Box, Container, useTheme } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const theme = useTheme();
  const [search, setSearch] = useState("");

  return (
    <Box width="100%">
      <Container sx={{display:"flex", paddingBottom:"15px", alignItems:"center" }}>
        <input
          type="text"
          height="100px"
          placeholder="Tìm kiếm"
          spellCheck="false"
          name={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "8px",
            width: "100%",
            borderTopLeftRadius:"10px",
            borderBottomLeftRadius:"10px",
            border: "1px solid #ddd",
            outline: "none",
            fontSize: "1rem",
            minHeight: "40px",
            color: theme.palette.primary.highlightText,
          }}
        ></input>
        <button
          style={{
            color: theme.palette.secondary.contrastText,
            fontSize: "1rem",
            backgroundColor: theme.palette.primary.main,
            width: "50px",
            minHeight: "41px",
            border: "none",
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
            cursor: "pointer",
          }}
        >
          <SearchIcon/>
        </button>
      </Container>
    </Box>
  );
};

export default SearchBar;
