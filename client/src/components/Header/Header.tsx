import React, { FC } from "react";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Typography } from "@material-ui/core";

const Header: FC<{}> = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6">Running path generator</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
