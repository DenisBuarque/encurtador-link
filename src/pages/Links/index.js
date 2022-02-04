import { useState, useEffect } from 'react'
import { FiLink, FiArrowLeft, FiTrash} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { getLinksSave, deleteLink } from '../../services/storeLink'
import LinkItem from '../../components/Menu/LinkItem'

import './links.css';

export default function Links() {

    const [myLinks, setMyLinks] = useState([]);
    const [data, setData] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [emptyList, setEmptyList] = useState(false);

    useEffect(() => {

        async function getLinks()
        {
            const result = await getLinksSave('@geradorlinks');

            if(result.length === 0){
                console.log('A lista está vazia.');
                setEmptyList(true);
            }

            setMyLinks(result);
        }

        getLinks();

    },[]);

    function handleOpenLink(link){
        setData(link);
        setShowModal(true);
    }

    async function handleDelete(id)
    {
        const result = await deleteLink(myLinks, id);
        if(result.length === 0){
            setEmptyList(true);
        }
        return setMyLinks(result);
    }

    return (
        <div className="links-container">
            <div className='links-header'>
                <Link to="/">
                <FiArrowLeft size={38} color="#FFF" />
                </Link>
                <h1>Meus Links</h1>
            </div>

            {emptyList && (
                <div className="link-item">
                    <h2 className="empty-text">
                        Sua lista está vazia!
                    </h2>
                </div>
            )}

            {myLinks.map( link => (
                <div key={link.id} className="links-item">
                    <button onClick={ () => handleOpenLink(link) } className="link">
                        <FiLink size={18} color="#FFF" />
                        {link.long_url}
                    </button>
                    <button onClick={ () => handleDelete(link.id) } className="link-delete">
                        <FiTrash size={18} color="#F00" />
                    </button>
                </div>
            ))}

            { showModal && (
                <LinkItem 
                    closeModal={setShowModal(false)} 
                    content={data} 
                />
            )}
        </div>
    )
}