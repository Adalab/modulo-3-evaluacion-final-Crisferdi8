

function FilterByname({ onChangeName }) {
    const handleChange = (ev) => {
        ev.preventDefault();
        onChangeName(ev.target.value);
    }
    return (
        <>
            <form className="form">
                <label htmlFor="name"><strong>NOMBRE</strong></label>
                <input type="text" id="name" onChange={handleChange} className="input" />
            </form>


        </>
    );
}

export default FilterByname;
