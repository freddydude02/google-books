import styles from "./SearchBar.module.scss";
const SearchBar = ({ inputHandler, value }) => {
    return <input type="text" value={value} onInput={inputHandler} />;
};
export default SearchBar;
