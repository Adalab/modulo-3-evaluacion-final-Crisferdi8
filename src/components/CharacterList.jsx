import CharacterItem from "./CharacterItem";

function CharacterList({ characters }) {

    const characterElements = characters.map((character) => {
        return <CharacterItem key={character.id} characterData={character} />

    })



    return (
        <section>

            <ul>
                {characterElements}
            </ul>
        </section>
    );
}

export default CharacterList;
