import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f2 ">
      <Stack gap="40px " alignItems="center" px="40px" pt="24px">
        <Typography variant="h5" pb="40px" mt="20px">
          Exercise to live more 💪
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
