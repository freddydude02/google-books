import styles from "./SearchIndex.module.scss";
import Button from "../../components/Button";
import SearchBar from "../../components/SearchBar";
import getData from "../../assets/FetchFunction/getData";
import { useState, useContext } from "react";
import { SearchContext } from "../../context/dataContexts";

const SearchIndex = () => {
    const [currentSearch, setCurrentSearch] = useState("");
    const data = useContext(SearchContext);

    return (
        <>
            <SearchBar
                value={currentSearch}
                inputHandler={(e) => {
                    setCurrentSearch(e.target.value);
                }}
            />
            <Button
                label="Search"
                clickHandler={() => {
                    if (currentSearch !== "") {
                        data.setSearchTerm(currentSearch);
                    }
                }}
            />
        </>
    );
};
export default SearchIndex;
