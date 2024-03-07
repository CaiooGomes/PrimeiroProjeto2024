import React, { useState } from 'react'
import useApiAnimeData from '../../hooks/getAPIDATA';

function AnimeComponent() {
    const [animeName, setAnimeName] = useState("one punch");
    const [animeDigitando, setAnimeDigitado] = useState("one punch")
    const {animeData, loading, error} = useApiAnimeData(animeName);

    const hadleInputChange=(e)=>{
        setAnimeDigitado(e.target.value);
    }

    function BuscarOAnime(){
        setAnimeName(animeDigitando);
    }


  return (
    <div>
        <input type="text" 
        placeholder='Enter anime name' 
        value={animeDigitando} 
        onChange={hadleInputChange}>

        </input>

        <button onClick={()=>BuscarOAnime()}>Pesquisar</button>
        {loading && <div> Loading</div>}
        {error && <div>Error:{error}</div>}

        {Array.isArray(animeData)?(
            <div>
                {animeData.map((a)=>(<h1 key={a.id} >{a.title} {a.image} </h1>))}
            </div>
        ) : (animeData && <div> Sem nenhum anime</div>)
        }
    </div>
  )
}

export default AnimeComponent