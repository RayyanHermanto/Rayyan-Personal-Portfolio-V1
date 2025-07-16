import React, { useEffect, useRef, useState } from "react";
import styles from "./style/SectionThree.module.css";

export default function SectionThree() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile(); // Cek saat pertama render
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = windowHeight;
      const end = -rect.height;

      const scrollY = rect.top;
      const progress = 1 - (scrollY - end) / (start - end);

      setScrollProgress(Math.max(0, Math.min(1, progress)));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const lineHeight = Math.min(scrollProgress * 150, 75);
  const lineHeightVh = `${lineHeight}vh`;

  return (
    <section ref={sectionRef} className={styles.section}>
      {/* Judul di atas garis */}
      <div
        className={styles.title}
        style={{ opacity: scrollProgress > 0.1 ? 1 : 0 }}
      >
        My Career and Experiences
      </div>

      {/* Garis vertikal */}
      <div className={styles.verticalLine} style={{ height: lineHeightVh }} />

      {/* Titik di ujung bawah garis */}
      {lineHeight >= 10 && (
        <div
          className={styles.endpoint}
          style={{ top: `calc(${lineHeight}vh + 30px)` }}
        />
      )}

      {/* Teks kiri atas */}
      <div
        className={styles.text1}
        style={{
          opacity: isMobile
            ? lineHeight > 15
              ? 1
              : 0
            : lineHeight > 20
              ? 1
              : 0,
        }}
      >
        <h2 style={{ color: "#c77dff", marginBottom: "4px" }}>
          Front-End And Back-End Cohort
        </h2>
        <p style={{ color: "#aaa", marginTop: "0px", fontSize: "0.9rem" }}>
          Coding Camp Powered By DBS Foundation
        </p>
      </div>

      {/* Teks kiri bawah */}
      <div
        className={styles.text2}
        style={{
          opacity: isMobile
            ? lineHeight > 60
              ? 1
              : 0
            : lineHeight > 55
              ? 1
              : 0,
        }}
      >
        <h2 style={{ color: "#c77dff", marginBottom: "4px" }}>
          Internship At Diskominfo
          <br />
          Kota Semarang
        </h2>
      </div>

      {/* Teks kanan atas */}
      <div
        className={styles.text1_date}
        style={{
          opacity: isMobile
            ? lineHeight > 17
              ? 1
              : 0
            : lineHeight > 20
              ? 1
              : 0,
        }}
      >
        <h2 style={{ color: "#c77dff", marginBottom: "4px" }}>
          Feb - Jun 2025
        </h2>
      </div>

      {/* Teks kanan bawah */}
      <div
        className={styles.text2_date}
        style={{
          opacity: isMobile
            ? lineHeight > 62
              ? 1
              : 0
            : lineHeight > 55
              ? 1
              : 0,
        }}
      >
        <h2 style={{ color: "#c77dff", marginBottom: "4px" }}>
          Mar 2025 - Now
        </h2>
      </div>
    </section>
  );
}
