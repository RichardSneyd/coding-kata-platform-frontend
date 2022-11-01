

const LangSelector = ({options, onSelectionChange})=> {
    return (
        <>
        <label htmlFor="languages">Language: </label>
        <select name="languages" onChange={onSelectionChange}>
            {options.map((lang, i) => {
                return <option value={i}>{lang}</option>;
            })}
        </select>
        </>
    );
}

export default LangSelector;