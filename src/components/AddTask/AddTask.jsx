import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import "./AddTask.css";
import PocketBase from "pocketbase";
import "animate.css";
import FloatingActionButton from "../FAB/FAB";
import ColorPicker from "../ColorPicker/ColorPicker";

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
  const [tag, setTag] = useState("");
  const [color, setColor] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  async function onSubmitHandler(e) {
    e.preventDefault();
    const data = {
      titulo: title,
      descripcion: description,
      tag: tag,
      color: color,
    };

    await pb.collection("tasks").create(data);

    setOpen(false);

    window.location.reload(false);
  }

  const handleColorSelect = (colorr) => {
    setColor(colorr);
    // Realiza cualquier lógica adicional con el color seleccionado aquí
  };
  
  
  return (
    <div>
      <FloatingActionButton onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className={
            open
              ? "animate__animated animate__zoomIn"
              : "animate__animated animate__fadeOut"
          }
        >
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
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Tag
            </Typography>
            <TextField
              onChange={(evt) => {
                setTag(evt.target.value);
              }}
              id="outlined-basic"
              label="Tag"
              variant="outlined"
            />
            {/* <input type="color" value={color} onChange={(evt) => {
                setColor(evt.target.value);
              }} /> */}
            <ColorPicker onColorSelect={handleColorSelect} />
            <Button type="submit" variant="contained">
              Añadir
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
