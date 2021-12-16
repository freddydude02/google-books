import styles from "./SearchIndex.module.scss";
import Button from "../../components/Button";
import SearchBar from "../../components/SearchBar";
import getData from "../../assets/FetchFunction/getData";
import { useState } from "react";

const SearchIndex = ({ data }) => {
    const [currentSearch, setCurrentSearch] = useState("");
    const newUrl =
        "https://books.googleapis.com/books/v1/volumes?q=" +
        currentSearch +
        "&maxResults=40";
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
                        return data.setFetchData(getData(newUrl));
                    }
                }}
            />
        </>
    );
};
export default SearchIndex;
