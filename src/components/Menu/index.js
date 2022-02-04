import './menu.css'
import { BsYoutube, BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Menu (){
    return (
        <div className="menu">
            <a href="#">
                <BsYoutube className="social" size={24} color="#FFF" />
            </a>
            <a href="#">
                <BsInstagram className="social" size={24} color="#FFF" />
            </a>
            <Link className="menu-item" to="/links">
                Meus Links
            </Link>
        </div>
    )
}