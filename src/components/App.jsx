/*
1-LISTADO DE PERSONAJES
recoger la info	
    pintar el listado de personajes con el nombre,foto y especie

2-FILTRAR PERSONAJES
    cuando la usuaria escriba en el input
        recogemos su valor
filtramos con lo que coincida
        lo pintamos en el html con el valor del input y que coincida con los personajes

3-DETALLES DE CADA PERSONAJE
 */



import "../scss/App.scss";
import CharacterList from "./CharacterList";
import Filters from "./filters/Filters";
import UserDetails from "./UserDetails";
import { useEffect, useState } from "react";
import getCharactersFromApi from "../services/GetCharactersFromApi";
import { Routes, Route, useLocation, matchPath } from "react-router-dom";



function App() {

    const [characters, setCharacters] = useState([]);
    const [filterName, setFilterName] = useState("");

    useEffect(() => {
        getCharactersFromApi().then((charactersData) => {
            setCharacters(charactersData);

        })
    }, [])

    const handleFilterName = (valueInput) => {
        setFilterName(valueInput);
    }
    //FILTRAR

    const filteredCharacters = characters.filter((character) => {
        return character.name.includes(filterName);
    })

    //RUTA DINÁMICA


    console.log(filteredCharacters);

    const { pathname } = useLocation();
    const routeData = matchPath("/character/:idCharacter", pathname);
    console.log(routeData);
    const idUser = routeData !== null ? routeData.params.idCharacter : null
    console.log(idUser);
    const user = characters.find((character) => {
        return character.id == idUser
    })
    console.log(user);



    console.log(routeData)
    return (
        <>
            <header>
                <h1>Lista de personajes</h1>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={(
                        <>
                            <Filters onChangeName={handleFilterName} />
                            <CharacterList characters={filteredCharacters} />
                        </>
                    )} />
                    <Route path="/character/:idCharacter" element={<UserDetails character={user} />} />
                </Routes>

            </main>
        </>

    )
}

export default App
