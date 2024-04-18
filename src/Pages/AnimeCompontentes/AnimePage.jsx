import React, { useEffect, useState } from 'react'
import useApiAnimeData from '../../hooks/getAPIDATA';
import AnimeCard from '../../components/AnimeCard/AnimeCard';
import Popup from '../../components/Popup/Popup';
import "./AnimePage.css"

function AnimePage() {
    const [animeName, setAnimeName] = useState("one punch");
    const [animeDigitando, setAnimeDigitado] = useState("one punch")
    const { animeData, loading, error } = useApiAnimeData(animeName);
    const [showPopup, SetShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState({ message: "", color: "" })

    const hadleInputChange = (e) => {
        setAnimeDigitado(e.target.value);
    }

    function BuscarOAnime() {
        setAnimeName(animeDigitando);
    }

    useEffect(() => {
        if(!loading) {
            if (error) {
                showAndHidePopup(`Error: ${error}`)
            } else {
                showAndHidePopup("Animes coletados com sucesso", "success")
            }
        }
    }, [loading, error, animeData]);

    function showAndHidePopup(message, color) {
        setPopupContent({ message, color });
        SetShowPopup(true);
        setTimeout(() => SetShowPopup(false), 3500);
    }


    return (
        <div className='form-anime'>
            <div className='botao-input-anime'>
                <input type="text" placeholder='Enter anime Name' value={animeDigitando} onChange={hadleInputChange}/>
                <button onClick={() => BuscarOAnime()}>Pesquisar</button>
            </div>

            {loading && <div> Loading</div>}
            {error && <div>Error:{error}</div>}

            {Array.isArray(animeData) ? (
                <div className='anime-cards'>
                    {animeData.map((a) => (
                        <AnimeCard key={a.mal_id}{...a}></AnimeCard>
                    ))}
                </div>
            ) : (animeData && <div> Sem nenhum anime</div>)
            }
            {
                showPopup ? (<Popup message={popupContent.message} color={popupContent.color}/>): null
            }

        </div >
    )
}

export default AnimePage