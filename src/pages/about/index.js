import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function About(){
    return (
        <header>
            <h1>About</h1>
            <Link to="/">
            <Button variant="contained">Inicio</Button>
            </Link>

        </header>
    )
}