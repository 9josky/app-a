import styles from "./CardOne.module.css";

const Card = ({ title, description, icon, imgUrl, link }) => {
  return (
    <div className={styles.container}>
      <div className={styles.cardImageContainer}>
        <img src={imgUrl} alt="image" />
      </div>
      <div className={styles.cardBody}>
        <h4>
          <a href={link}>{title}</a>
        </h4>
        <p>{description}</p>
      </div>
      <div className={styles.cardIcon}>{icon}</div>
    </div>
  );
};

export default Card;
