import styles from "./Card.module.scss";
const Card = ({ title, authors, imageLinks, infoLink, description }) => {
    const cutDescription = description.split(" ").slice(0, 175).join(" ");

    console.log(cutDescription);
    return (
        <div className={styles.card}>
            <div className={styles["card__img-box"]}>
                <a href={infoLink}>
                    <img
                        className={styles["card__img"]}
                        src={imageLinks}
                        alt={title}
                    />
                </a>
            </div>
            <h2 className={styles["card__title"]}>{title}</h2>
            <h4 className={styles["card__authors"]}>by {authors}</h4>
            <div className={styles["card__description-box"]}>
                <p className={styles["card__description"]}>
                    {cutDescription + "..."}
                </p>
            </div>
        </div>
    );
};
export default Card;
