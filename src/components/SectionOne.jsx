import { Center } from "@react-three/drei";
import React from "react";
import './style/SectionOne.css';

export default function SectionOne() {
  return (
    <section className="section"
    >
      <div className="leftcontent">
        <h2 className="minitext"
        >
          Hello! I'm
        </h2>
        <p className="bigtext">
          Rayyan Syahbani<br></br> Hermanto
        </p>
      </div>

      <div
        style={{
          flex: 1,
          margin: "10px",
          padding: "20px",
          color: "#fff",
          zIndex: 5,
          textAlign: "center",
          fontSize: "20px",
          transform: "translatex(+30px)",
        }}
      >
        <h2>Fullstack Web Developer</h2>
        <h2>&</h2>
        <h2>Game Dev</h2>
      </div>
    </section>
  );
}
