import { useState } from "react";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import useStore from "../state/store";

const Intro = () => {
  const [dialogOpen, setDialogOpen] = useState(true);
  const setAnimateDrums = useStore((state) => state.setAnimateDrums);

  const handleClose = () => {
    setAnimateDrums(true);
    setDialogOpen(false);
  };

  return (
    <>
      <Dialog
        onClose={handleClose}
        open={dialogOpen}
        maxWidth={"md"}
        fullWidth={true}
        slotProps={{
          paper: {
            sx: {
              opacity: 0.65,
              backgroundColor: "black",
              color: "white",
              height: "55%",
              borderRadius: "30px",
            },
          },
        }}
      >
        <DialogTitle variant="h4" sx={{ textAlign: "center" }}>
          Welcome to Drum Viz!
        </DialogTitle>
        <DialogContent dividers>
          <Box sx={{ textAlign: "center" }}>
            <img className="w-25" src="./images/drums-icon.jpg" />
          </Box>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Select the groove, select the speed and start playing!
          </Typography>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Free Play - bash those drums!!
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ marginRight: "2%" }}
            variant="contained"
            color="warning"
            onClick={handleClose}
          >
            Let's Rock!
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Intro;
