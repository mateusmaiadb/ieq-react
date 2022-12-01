import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



export default function Home() {
    return (
        <div className='home'>
            <Link to="/sobre">
                <Button variant="contained">Sobre</Button>
            </Link>
            <Link to="/eventos">
                <Button variant="contained">Eventos</Button>
            </Link>
        </div>
    )
}

