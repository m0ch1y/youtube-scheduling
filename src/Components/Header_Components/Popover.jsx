import * as React from "react";
import Popover from "@mui/material/Popover";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Paper } from "@mui/material";

export default function MouseOverPopover({ title, videoId }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <YouTubeIcon
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        fontSize="large"
        sx={{ color: "red" }}
      />
      <Popover
        id="mouse-over-popover"
        sx={{
          borderRadius: "1000px",
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Box sx={{ borderRadius: "1000px" }}>
          <Paper>
            <iframe
              title="youtube"
              width="300"
              height="200"
              style={{ borderRadius: "20px" }}
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
            />
          </Paper>
        </Box>
        {/* <Typography sx={{ p: 1, width: "300px" }}>{title}</Typography> */}
      </Popover>
    </div>
  );
}
