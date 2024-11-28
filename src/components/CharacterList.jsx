import CharacterItem from "./CharacterItem";

function CharacterList({ characters }) {

    const characterElements = characters.map((character) => {
        return <CharacterItem key={character.id} characterData={character} />

    })



    return (
        <section>
            <h2>Lista de personajes</h2>
            <ul>
                {characterElements}
            </ul>
        </section>
    );
}

export default CharacterList;
