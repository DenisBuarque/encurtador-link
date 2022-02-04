import './error.css'
import { Link } from 'react-router-dom'

export default function() {
    return (
        <div className="container-error">
            <h1>Página não encontrada!</h1>
            <Link to="/">
                <a>Voltar para Home</a>
            </Link>
        </div>
    )
}