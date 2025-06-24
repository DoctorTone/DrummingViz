import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import useStore from "../state/store";

const InfoDialog = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const infoDialogOpen = useStore((state) => state.infoDialogOpen);
  const setShowInfoDialog = useStore((state) => state.setShowInfoDialog);

  const handleClose = () => {
    setDialogOpen(false);
    setShowInfoDialog(false);
  };

  useEffect(() => {
    setDialogOpen(infoDialogOpen ? true : false);
  }, [infoDialogOpen]);

  return (
    <>
      <Dialog
        onClose={handleClose}
        open={dialogOpen}
        maxWidth={"md"}
        fullWidth={true}
      >
        <DialogTitle>Drum Visualisation</DialogTitle>
        <DialogContent dividers>
          <Typography variant="h6">
            "Drum Kit" (https://skfb.ly/p9FOp) by art.katja is licensed under
            Creative Commons Attribution
            (http://creativecommons.org/licenses/by/4.0/).
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default InfoDialog;
