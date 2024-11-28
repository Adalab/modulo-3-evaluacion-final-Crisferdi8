

function FilterByname() {
    const handleChange = (ev) => {
        console.log(ev.target.value)
    }
    return (
        <>
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" onChange={handleChange} />
        </>
    );
}

export default FilterByname;
