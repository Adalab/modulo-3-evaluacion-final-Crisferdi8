

function FilterByname({ onChangeName }) {
    const handleChange = (ev) => {
        onChangeName(ev.target.value);
    }
    return (
        <>
            <form className="form">
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" onChange={handleChange} />
            </form>

        </>
    );
}

export default FilterByname;
