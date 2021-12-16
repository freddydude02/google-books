import Card from "../../components/Card";
import styles from "./CardContainer.module.scss";

// dataResult.length > 0
//     ? dataResult.map((book) => {
//           console.log(book.imageLinks);
//       })
//     : undefined

const CardContainer = ({ cleanData }) => {
    return (
        <div className={styles["card-container"]}>
            {cleanData.map((book, id) => (
                <Card
                    key={id}
                    title={book.title}
                    authors={book.authors}
                    imageLinks={book.imageLinks}
                    infoLink={book.infoLink}
                    description={book.description}
                ></Card>
            ))}
        </div>
    );
};
export default CardContainer;
