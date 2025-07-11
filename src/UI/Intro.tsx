import { useState } from "react";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
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
      >
        <DialogTitle>Welcome to Drum Viz!</DialogTitle>
        <DialogContent dividers>
          <Typography variant="h6">
            Select the groove and speed you want to play and let's rock!
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            Let's Rock!
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Intro;
