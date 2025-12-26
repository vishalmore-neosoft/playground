import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        height: "100vh",
      }}
    >
      <Stack direction={"column"} gap={2} alignItems={"center"}>
        <p className="oops-not-found" variant="h1">Oops!</p>
        <Stack maxWidth={420} textAlign={"center"} alignItems={"center"} gap={2}>
          <Typography variant="h4">404 - PAGE NOT FOUND</Typography>
          <Typography variant="body2">
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </Typography>
          <Button onClick={() => navigate('/')} variant="contained" disableElevation disableRipple>
            Go to Homepage
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export default NotFound;
