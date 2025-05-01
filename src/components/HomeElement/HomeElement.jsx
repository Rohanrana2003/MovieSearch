import React from "react";
import styles from "./HomeElement.module.css";

const HomeElement = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imageSection}>
          <img
            src="/images/home-image.jpeg"
            alt="Movie search illustration"
            className={styles.illustration}
          />
        </div>

        <div className={styles.textSection}>
          <h1 className={styles.heading}>
            Discover Your Next
            <br />
            <span className={styles.highlight}>Favorite Movie</span>
          </h1>
          <p className={styles.subtext}>
            Search through millions of movies, explore trending titles, and save
            your favorites for later. 🎬 Start your cinematic journey now!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeElement;
