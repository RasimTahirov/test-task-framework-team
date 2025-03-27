import styles from "../styles/styles.module.scss";
import { IPaintings } from "../types/types";

const PaintingsCards = ({
  paintingsWithDetails,
}: {
  paintingsWithDetails: IPaintings[];
}) => {
  return (
    <section className={styles.paintingsContainer}>
      {Array.isArray(paintingsWithDetails) &&
        paintingsWithDetails.map((painting) => (
          <div className={styles.paintings} key={painting.id}>
            <img
              className={styles.image}
              src={`${import.meta.env.VITE_BASE_URL}${painting.imageUrl}`}
              alt={painting.name}
            />
            <div className={styles.paintingsInfoContainer}>
              <div className={styles.paintingInfo}>
                <div className={styles.paintingHeader}>
                  <h3 className={styles.paintingInfoTop}>{painting.name}</h3>
                  <p className={styles.paintingInfoBottom}>
                    {painting.created}
                  </p>
                </div>
                <div className={styles.paintingMeta}>
                  <p className={styles.paintingInfoTop}>
                    {painting.author?.name}
                  </p>
                  <p className={styles.paintingInfoBottom}>
                    {painting.location?.location}
                  </p>
                </div>
              </div>
              <div className={styles.separator} />
            </div>
          </div>
        ))}
    </section>
  );
};

export default PaintingsCards;
