import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

interface TaskDetailsModalProps {
  open: boolean;
  onClose: () => void;
  taskDetails: string;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export const TaskDetailsModal: React.FC<TaskDetailsModalProps> = ({
  open,
  onClose,
  taskDetails,
}) => {
  return (
    // onCloseはクローズボタンを押下したときまたはモーダルの外側をクリックしたときにモーダルをとじる
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Task Details
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {taskDetails}
        </Typography>
        <Button onClick={onClose} style={{ marginTop: "20px" }}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};
