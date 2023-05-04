import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import "./AddTask.css";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#404040",
  borderraidus: "15px",
  boxShadow: 24,
  p: 4,
};

export default function AddTask() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  async function onSubmitHandler(e) {
    e.preventDefault();
    const data = {
      titulo: title,
      descripcion: description,
    };

    await pb.collection("tasks").create(data);
  }

  return (
    <div>
      <Button className="addTask" onClick={handleOpen}>
        Open modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={onSubmitHandler} className="taskForm">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Nueva Tarea
            </Typography>
            <TextField
              onChange={(evt) => {
                setTitle(evt.target.value);
              }}
              id="outlined-basic"
              label="Titulo"
              variant="outlined"
            />

            <Typography id="modal-modal-title" variant="h6" component="h2">
              Descripción
            </Typography>
            <TextField
              onChange={(evt) => {
                setDescription(evt.target.value);
              }}
              id="outlined-multiline-static"
              label="Descripción..."
              multiline
              rows={4}
            />
            <Button type="submit" variant="contained">
              Añadir
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
