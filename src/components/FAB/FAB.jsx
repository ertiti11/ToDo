import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import './FAB.css'



export default function FloatingActionButton({ onClick }) {
    const handleClick = () => {
      onClick(); // Llama a la función onClick proporcionada
    };
  
    return (
      <Box className="FAB" sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab color="primary" aria-label="add" onClick={handleClick}>
          <AddIcon />
        </Fab>
      </Box>
    );
  }