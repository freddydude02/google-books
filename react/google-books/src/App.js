import "./assets/styles/theme.scss";
import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import Button from "./components/Button/Button";
import CardContainer from "./containers/CardContainer";
import getData from "./assets/FetchFunction/getData";

function App() {
    const [currentSearch, setCurrentSearch] = useState("");
    const [dataResult, setDataResult] = useState([]);

    const newUrl =
        "https://books.googleapis.com/books/v1/volumes?q=" +
        currentSearch +
        "&maxResults=36";

    const cleanData = dataResult.map((book) => {
        const newBook = {};
        newBook.title = book.title;
        newBook.authors = book.authors;
        newBook.infoLink = book.infoLink;
        if (book.description !== undefined)
            newBook.description = book.description;
        else newBook.description = "No description";
        if (book.imageLinks !== undefined)
            newBook.imageLinks = book.imageLinks.thumbnail;
        else
            newBook.imageLinks =
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.OUz0DHV0pTJqf8jvqC39tQHaFj%26pid%3DApi&f=1";
        return newBook;
    });

    return (
        <div className="App">
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
                        getData(newUrl, dataResult, setDataResult);
                    }
                }}
            />

            <CardContainer cleanData={cleanData}></CardContainer>
        </div>
    );
}

export default App;
