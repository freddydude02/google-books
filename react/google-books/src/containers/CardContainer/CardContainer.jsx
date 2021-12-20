import Card from "../../components/Card";
import styles from "./CardContainer.module.scss";
import { useState, useEffect, useContext } from "react";
import getData from "../../assets/FetchFunction/getData";
import { SearchContext } from "../../context/dataContexts";

const generateCleanData = (apiData) => {
    if (apiData !== undefined) {
        const cleanDataArray = apiData.map((book) => {
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
        return cleanDataArray;
    } else return [];
};
const CardContainer = () => {
    const data = useContext(SearchContext);
    const [dataResult, setDataResult] = useState([]);

    useEffect(
        () =>
            (async () => {
                console.log(data.searchTerm);
                let apiData = await getData(data.searchTerm);
                console.log(apiData);
                let cleanData = generateCleanData(apiData);
                setDataResult(cleanData);
            })(),
        [data.searchTerm]
    );

    return dataResult.length > 0 ? (
        <div className={styles["card-container"]}>
            {dataResult.map((book, id) => (
                <Card key={id} book={book}></Card>
            ))}
        </div>
    ) : (
        <></>
    );
};
export default CardContainer;
