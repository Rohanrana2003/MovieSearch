import React from "react";
import styles from "./ShimmerUI.module.css";

const ShimmerUI = () => {
  return (
    <section className={styles.moviesSection}>
      <div className={styles.moviesGrid}>
        {
          // Loading skeletons
          Array(6)
            .fill()
            .map((_, index) => (
              <div key={index} className={styles.movieCardSkeleton}>
                <div className={styles.skeletonPoster} />
                <div className={styles.skeletonContent}>
                  <div className={styles.skeletonTitle} />
                  <div className={styles.skeletonDetails} />
                </div>
              </div>
            ))
        }
      </div>
    </section>
  );
};
export default ShimmerUI;
