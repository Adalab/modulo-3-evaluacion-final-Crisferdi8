import "../scss/App.scss";
import CharacterList from "./CharacterList";
import Filters from "./filters/Filters";
import { useEffect, useState } from "react";
import getCharactersFromApi from "../services/GetCharactersFromApi";


function App() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharactersFromApi().then((charactersData) => {
            setCharacters(charactersData);
            console.log(charactersData)
        })
    }, [])

    const handleFilterName = () => {
        console.log("ey")
    }

    return (
        <>
            <header>
                <h1>Lista de personajes</h1>
            </header>
            <main>
                <Filters />
                <CharacterList characters={characters} />
            </main>

        </>

    )
}

export default App
