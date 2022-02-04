import { useState } from 'react'
import { FiLink } from 'react-icons/fi'
import Menu from '../../components/Menu'
import LinkItem from '../../components/Menu/LinkItem'
import { saveLink } from '../../services/storeLink'

import api from '../../services/api'

import './home.css'

export default function Home () {

    const [input, setInput] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState({});

    async function handleShortLink(){
        try{
            const response = await api.post('/shorten', {
                long_url: input
            })

            setData(response.data);
            setShowModal(true);

            console.log('entrou...');

            saveLink('@geradorlinks', response.data);

            setInput('');

        } catch(err){
            alert('Algo deu errado!');
            setInput('');
        }
    }

    return (
        <div className='container-home'>
            <div className="logo">
                <h1>Encurtado de Link</h1>
                <span>Cole seu link para incurtar!</span>
            </div>
            <div className='area-input'>
                <div>
                    <FiLink size={24} color="#000" />
                    <input 
                        type="text" 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)} 
                        placeholder="Cole seu link aqui" 
                    />
                </div>
                <button onClick={handleShortLink}>Gerar Link</button>
            </div>

            <Menu />

            { showModal && (
                <LinkItem 
                    closeModal={()=> setShowModal(false) } 
                    content={data} />
            )}
        </div>
    )
}