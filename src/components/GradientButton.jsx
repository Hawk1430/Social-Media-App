import React from "react";
import { Button } from "@mui/material";

const GradientButton = ({ onClick, children, active = true, sx = {} }) => {
  const gradient = "linear-gradient(to top right, #f88f40, #f15a24)";

  const activeStyles = {
    background: gradient,
    color: "#fff",
  };

  const inactiveStyles = {
    background: "#fff",
    color: "#000",
  };

  return (
    <Button
      onClick={onClick}
      sx={{
        textTransform: "none",
        fontWeight: 600,
        padding: "10px 15px",
		border: "none",
        borderRadius: "12px",
        ...(!active ? inactiveStyles : activeStyles),
        ...sx,
      }}
    >
      {children}
    </Button>
  );
};

export default GradientButton;
