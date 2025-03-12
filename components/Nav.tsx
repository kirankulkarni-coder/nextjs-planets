import { Box, Typography } from "@mui/material";
import React from "react";
import NavLink from "./NavLink";
import data from "@/data/data.json";

const Nav = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        borderBottom: "1px solid rgba(255,255,255,0.75)",
      }}
    >
      <Typography variant="h1" sx={{fontSize: '2rem', fontStyle: "bold"}}>The Planets</Typography>
      <Box>
      {data.map((item) => {
        return <NavLink key={item.id} planetId={item.id} planetName={item.name}></NavLink>;
      })}
      </Box>
    </Box>
  );
};

export default Nav;
