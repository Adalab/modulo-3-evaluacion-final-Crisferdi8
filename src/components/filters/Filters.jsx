import FilterByname from "./FilterByname";

function Filters({ onChangeName }) {
    return (
        <form>
            <FilterByname onChangeName={onChangeName} />
        </form>
    );
}

export default Filters;
