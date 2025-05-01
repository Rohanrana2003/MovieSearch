import React from "react";
import styles from "./DetailShimmer.module.css";

const DetailShimmer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Poster Shimmer */}
        <div className={styles.posterSection}>
          <div className={styles.posterShimmer}></div>
        </div>

        {/* Details Shimmer */}
        <div className={styles.detailsSection}>
          {/* Title Shimmer */}
          <div className={styles.titleShimmer}></div>

          {/* Metadata Shimmer */}
          <div className={styles.metadataShimmer}>
            <div className={styles.metadataItem}></div>
            <div className={styles.metadataItem}></div>
            <div className={styles.metadataItem}></div>
          </div>

          {/* Info Grid Shimmer */}
          <div className={styles.infoGridShimmer}>
            {[1, 2, 3].map((item) => (
              <div key={item} className={styles.infoItemShimmer}>
                <div className={styles.infoLabel}></div>
                <div className={styles.infoValue}></div>
              </div>
            ))}
          </div>

          {/* Plot Shimmer */}
          <div className={styles.plotShimmer}>
            <div className={styles.plotLine}></div>
            <div className={styles.plotLine}></div>
            <div className={styles.plotLine}></div>
          </div>

          {/* Ratings Shimmer */}
          <div className={styles.ratingsShimmer}>
            {[1, 2, 3].map((item) => (
              <div key={item} className={styles.ratingItemShimmer}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailShimmer;
