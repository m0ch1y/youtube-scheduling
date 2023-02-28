import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function AlertDialog({ videos, setVideos }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    if (videos.length === 0) {
      alert("削除するチャンネルがありません。");
    } else {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Delete = () => {
    setVideos([]);
    setOpen(false);
  };

  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <DeleteForeverIcon sx={{ color: "red" }} />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText color={"black"} id="alert-dialog-description">
            本当に削除しますか？
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={Delete}>YES</Button>
          <Button onClick={handleClose} autoFocus>
            NO
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
