const getCharactersFromApi = () => {
    return fetch("https://rickandmortyapi.com/api/character")
        .then(res => res.json())
        .then(data => {
            const parsedCharacters = data.results.map((character) => {

                return {
                    name: character.name,
                    photo: character.image,
                    species: character.species,
                    id: character.id,
                    episodes: character.episode.length,
                    planet: character.location.name,
                    status: character.status,
                }
            })
            console.log(parsedCharacters)
            return parsedCharacters;
        })

}

export default getCharactersFromApi;