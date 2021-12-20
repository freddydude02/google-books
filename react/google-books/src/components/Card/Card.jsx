import styles from "./Card.module.scss";
const Card = ({ book }) => {
    const cutDescription = book.description.split(" ").slice(0, 175).join(" ");

    return (
        <div className={styles.card}>
            <div className={styles["card__img-box"]}>
                <a href={book.infoLink}>
                    <img
                        className={styles["card__img"]}
                        src={book.imageLinks}
                        alt={book.title}
                    />
                </a>
            </div>
            <h2 className={styles["card__title"]}>{book.title}</h2>
            <h4 className={styles["card__authors"]}>by {book.authors}</h4>
            <div className={styles["card__description-box"]}>
                <p className={styles["card__description"]}>
                    {cutDescription + "..."}
                </p>
            </div>
        </div>
    );
};
export default Card;
