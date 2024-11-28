import { Link } from "react-router-dom";

function CharacterItem({ characterData }) {
    return (
        <li>
            <Link to={`/person/${characterData.id}`}>
                <img src={characterData.photo} alt={characterData.name} />
            </Link>
            <h4>{characterData.name}</h4>
            <p>{characterData.species}</p>




        </li>
    );
}

export default CharacterItem;
