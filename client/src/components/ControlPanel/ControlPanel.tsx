import React from "react";
import Grid from "@material-ui/core/Grid";
import {
  TextField,
  InputAdornment,
  Button,
  Paper,
  makeStyles,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    // Breakpoint order matters!
    [theme.breakpoints.up("xs")]: {
      padding: "16px",
      backgroundColor: "green",
    },
    [theme.breakpoints.up("sm")]: {
      padding: "32px 16px",
      backgroundColor: "red",
      width: "30%",
      height: "100%",
      maxWidth: "400px",
    },
  },
}));

const ControlPanel = () => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField fullWidth placeholder="Choose start point"></TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="number"
            placeholder="Min"
            fullWidth
            InputProps={{
              endAdornment: <InputAdornment position="end">km</InputAdornment>,
            }}
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="number"
            placeholder="Max"
            fullWidth
            InputProps={{
              endAdornment: <InputAdornment position="end">km</InputAdornment>,
            }}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="flex-end">
            <Button variant="contained" color="primary">
              Generate!
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ControlPanel;
