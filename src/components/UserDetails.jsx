import { Link } from "react-router-dom";


function UserDetails({ character }) {
    console.log(character)
    return (
        <>
            <section>
                <img className="gif" src="https://media2.giphy.com/media/Wm9TXX64elK2HvYHh6/200w.webp" alt="" />
            </section>
            <div className="description">

                <img src={character.photo} alt={character.name} />
                <h4>NOMBRE➩{character.name}</h4>
                <p>ESPECIE➩{character.species}</p>
                <p>EPISODIOS➩{character.episodes}</p>
                <p>PLANETA➩{character.planet}</p>
                <p>STATUS➩{character.status}</p>


            </div>
            <div>
                <Link to="/">
                    <button className="btn">Volver</button>
                </Link>
            </div>
        </>


    );
}

export default UserDetails
