import styles from "./GoBackButton.module.css";

const GoBackButton = ({ handleReturn }) => {
  return (
    <button
      type="button"
      className={styles.return_button}
      onClick={handleReturn}
    >
      Go back
    </button>
  );
};

export default GoBackButton;
