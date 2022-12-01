import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';


export default function About() {
    return (
        <header>
            <h1>About</h1>
            <Link to="/">
                <Button startIcon={<HomeIcon/>} variant="contained">Inicio</Button>
            </Link>
        </header>
        

    )
}