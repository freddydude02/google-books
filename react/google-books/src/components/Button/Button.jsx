import styles from "./Button.module.scss";
const Button = ({ label, clickHandler }) => {
    return <button onClick={clickHandler}>{label}</button>;
};
export default Button;
