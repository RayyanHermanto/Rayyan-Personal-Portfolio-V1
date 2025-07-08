import React, { useState } from "react";

export default function SectionFour() {
  const [activeTab, setActiveTab] = useState("projects");

  const projects = [
    {
      title: "Tanam AI (FE)",
      image: "/images/tanamai.jpg",
      link: "https://github.com/tatangwarianta/capstone_tanamAI",
      logos: ["/icons/javascript.svg", "/icons/html.svg", "/icons/css.svg"],
      description:
        "Tanam AI (Front-End) is a project I developed during the Dicoding bootcamp. It features a pest detection system using image input and offers an interactive user interface. The project is built with native JavaScript, HTML, and CSS, and is deployed on GitHub.",
    },
    {
      title: "Tanam AI (BE)",
      image: "/images/server_tanamAi.png",
      link: "https://github.com/RayyanHermanto/server_capstone",
      logos: ["/icons/nodejs.svg", "/icons/tensorflow.svg", "/icons/hapi.svg"],
      description: "Tanam AI (Back-End) is a group project in which I independently developed the entire backend as the final assignment of the Dicoding bootcamp. The backend was built using Node.js with the Hapi framework and follows a RESTful API architecture. I was solely responsible for developing, deploying, and integrating the backend system.",
    },
    {
      title: "Guardian Forest",
      image: "/images/guardianforest.jpg",
      link: "https://github.com/kamu/landing-animasi",
      logos: ["/icons/godot.svg"],
      description: "**Guardian Forest** is a game project developed for the GEMASTIK 2024 competition. It features strategic pathfinding mechanics, modular design using Scriptable Objects, smooth animations with tweening, and a clean architecture following the Model-View-Controller (MVC) pattern. The game combines technical depth with engaging gameplay, designed to showcase problem-solving and programming skills in a competitive environment."
    },
  ];

  const techs = [
    { name: "React", icon: "/icons/react.svg" },
    { name: "Next.JS", icon: "/icons/nextjs.svg" },
    { name: "Node.js", icon: "/icons/nodejs.svg" },
    { name: "Laravel", icon: "/icons/laravel.svg" },
    { name: "HTML", icon: "/icons/html.svg" },
    { name: "CSS", icon: "/icons/css.svg" },
    { name: "Three.js", icon: "/icons/threejs.svg" },
    { name: "Python", icon: "/icons/python.svg" },
    { name: "TensorFlow", icon: "/icons/tensorflow.svg" },
    { name: "HAPI", icon: "/icons/hapi.svg" },
    { name: "Unity", icon: "/icons/unity.svg" },
    { name: "C#", icon: "/icons/csharp.svg" },
    { name: "C++", icon: "/icons/c++.svg" },
    { name: "C", icon: "/icons/c.svg" },
    { name: "GDScript", icon: "/icons/godot.svg" },
  ];

  const certificates = [
    {
      title: "Memulai Pemrograman Dengan Java",
      image: "/images/certificate/certificate_1.jpg",
      link: "https://drive.google.com/file/d/1kO-ovcIu86UIRCniDOezPDvMiUJTW5kI/view?usp=sharing",
    },
    {
      title: "Belajar Dasar Pemrograman Web",
      image: "/images/certificate/certificate_2.jpg",
      link: "https://drive.google.com/file/d/1VCcMNxIYj-eyEPkFjLuPJZi9URI8S-Ff/view?usp=sharing",
    },
    {
      title: "Belajar Fundamental Front-End Web Development",
      image: "/images/certificate/certificate_3.jpg",
      link: "https://drive.google.com/file/d/1sUtPnphFPNkj9sxIpmZS-N70Cmqzbh5M/view?usp=sharing",
    },
    {
      title: "Belajar Pengembangan Web Intermediate",
      image: "/images/certificate/certificate_4.jpg",
      link: "https://drive.google.com/file/d/1wNepG3PJpUIF7JUAorMq48XRCvB5CuHx/view?usp=sharing",
    },
    {
      title: "Memulai Dasar Pemrograman Untuk Menjadi Pengembang Software",
      image: "/images/certificate/certificate_5.jpg",
      link: "https://drive.google.com/file/d/1YKgEtn_t7PIwGcOP9-n98ZsxcfhAlYdC/view?usp=sharing",
    },
    {
      title: "Belajar Dasar Pemrograman JavaScript",
      image: "/images/certificate/certificate_6.jpg",
      link: "https://drive.google.com/file/d/1aUATYWdyZv5xGYhWMlzVMqp0P_GC16Xk/view?usp=sharing",
    },
    {
      title: "Belajar Back-End Pemula Dengan JavaScript",
      image: "/images/certificate/certificate_7.jpg",
      link: "https://drive.google.com/file/d/1jJOU4KuW_ET4t-tBpWNrcPfLeJGo80hP/view?usp=sharing",
    },
    {
      title: "Pengenalan Ke Logika Pemrograman (Programming Logic 101)",
      image: "/images/certificate/certificate_8.jpg",
      link: "https://drive.google.com/file/d/1v_mI65rMDirsgra7DSWHtH4_9CeTH0u6/view?usp=sharing",
    },
    {
      title: "Belajar Membuat Front-End Web Untuk Pemula",
      image: "/images/certificate/certificate_9.jpg",
      link: "https://drive.google.com/file/d/1xQTP6cetXYmKwwvCSGZvP5JhNwURESWu/view?usp=sharing",
    },
    {
      title: "Belajar Dasar Git Dengan GitHub",
      image: "/images/certificate/certificate_10.jpg",
      link: "https://drive.google.com/file/d/1KRbCSQJvY_r5mP4oqw8z8KsZCNpGRRLB/view?usp=sharing",
    },
    {
      title: "Financial Literacy 101",
      image: "/images/certificate/certificate_11.jpg",
      link: "https://drive.google.com/file/d/1y_hdoASW26zkdlPvFm1TG2T7eTD0vPtU/view?usp=sharing",
    },
    {
      title: "HCIA-AI V3.5 Course",
      image: "/images/certificate/certificate_12.jpg",
      link: "https://drive.google.com/file/d/1e3m4iLE4yLjuqPXV5BtDpgMdfhzCDMWV/view?usp=sharing",
    },
    {
      title: "AI Basic: Overview of AI (CRA Training Program)",
      image: "/images/certificate/certificate_13.jpg",
      link: "https://drive.google.com/file/d/1bScEyX3OzB3y8A3GNbXlsVSBoNyZqJ5k/view?usp=sharing",
    },
  ];
  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "60px 20px",
        textAlign: "center",
        backgroundColor: "black",
        color: "#fff",
      }}
    >
      <h2 style={{ marginBottom: "30px" }}>Portfolio & Skills</h2>
      {/* Tab Buttons */}
      <div style={{ marginBottom: "40px" }}>
        {["projects", "techs", "certificates"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              margin: "0 10px",
              padding: "10px 20px",
              background: activeTab === tab ? "#fff" : "transparent",
              color: activeTab === tab ? "#000" : "#fff",
              border: "1px solid #fff",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            {tab === "projects"
              ? "Projects"
              : tab === "techs"
                ? "Tech Stack"
                : "Certificate"}
          </button>
        ))}
      </div>

      {/* Cards with Fade Transition */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            activeTab === "techs"
              ? "repeat(auto-fit, minmax(100px, 1fr)"
              : "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
          justifyItems: "center",
          maxWidth: "1000px", // agar tidak terlalu lebar di layar besar
          margin: "0 auto",
          padding: "0 16px", // biar ada padding di sisi kecil
          transition: "opacity 0.5s ease",
          opacity: 1,
        }}
      >
        {activeTab === "projects" &&
          projects.map((p, i) => (
            <div
              key={i}
              style={{
                width: "100%",
                maxWidth: "320px",
              }}
            >
              <div
                className="project-card"
                style={{
                  width: "100%",
                  maxWidth: "320px",
                  background: "#222",
                  padding: "24px",
                  borderRadius: "16px",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
                  opacity: 0,
                  animation: "fadeIn 0.6s ease forwards",
                  animationDelay: `${i * 0.1}s`,
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  overflow: "hidden",
                  zIndex: 1,
                }}
                onMouseEnter={(e) => {
                  const card = e.currentTarget;
                  card.style.width = "150%";
                  card.style.maxWidth = "450px";
                  card.style.zIndex = "10";
                  card.style.position = "absolute";
                  card.querySelector(".extra-details").style.opacity = "1";
                  card.querySelector(".extra-details").style.maxHeight =
                    "250px";
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget;
                  card.style.width = "100%";
                  card.style.zIndex = "1";
                  card.style.position = "relative";
                  card.querySelector(".extra-details").style.opacity = "0";
                  card.querySelector(".extra-details").style.maxHeight = "0px";
                }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    marginBottom: "16px",
                  }}
                />
                <h3 style={{ margin: "0 0 12px", fontSize: "1.25rem" }}>
                  {p.title}
                </h3>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#0af",
                    textDecoration: "underline",
                    fontWeight: "bold",
                    fontSize: "0.95rem",
                  }}
                >
                  Lihat Proyek
                </a>

                {/* Detail tambahan */}
                <div
                  className="extra-details"
                  style={{
                    marginTop: "12px",
                    color: "#ccc",
                    fontSize: "0.9rem",
                    lineHeight: "1.4",
                    opacity: 0,
                    maxHeight: 0,
                    overflow: "hidden",
                  }}
                >
                  {p.description || "No Description."}
                </div>

                {/* Logo kecil */}
                {Array.isArray(p.logos) && p.logos.length > 0 && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      gap: "8px",
                      marginTop: "20px",
                      flexWrap: "wrap",
                    }}
                  >
                    {p.logos.map((logo, index) => (
                      <img
                        key={index}
                        src={logo}
                        alt={`Tech ${index}`}
                        style={{
                          width: "28px",
                          height: "28px",
                          borderRadius: "4px",
                          opacity: 0.85,
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

        {activeTab === "techs" &&
          techs.map((t, i) => (
            <div
              key={i}
              style={{
                width: "100%",
                maxWidth: "160px",
                background: "#1a1a1a",
                padding: "20px",
                borderRadius: "10px",
                textAlign: "center",
                opacity: 0,
                animation: "fadeIn 0.6s ease forwards",
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <img
                src={t.icon}
                alt={t.name}
                style={{
                  width: "80px",
                  height: "80px",
                  margin: "0 auto 10px",
                  display: "block",
                }}
              />
              <h4 style={{ color: "#fff", fontSize: "1rem", margin: 0 }}>
                {t.name}
              </h4>
            </div>
          ))}
        {activeTab === "certificates" &&
          certificates.map((p, i) => (
            <div
              key={i}
              style={{
                width: "100%",
                maxWidth: "320px",
              }}
            >
              <div
                className="project-card"
                style={{
                  width: "100%",
                  maxWidth: "300px",
                  background: "#222",
                  padding: "24px",
                  borderRadius: "16px",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
                  opacity: 0,
                  animation: "fadeIn 0.6s ease forwards",
                  animationDelay: `${i * 0.1}s`,
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  overflow: "hidden",
                  zIndex: 1,
                }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  style={{
                    width: "100%",
                    maxHeight: "180px", // batas tinggi maksimum
                    objectFit: "cover", // potong sesuai container
                    objectPosition: "center", // fokus tengah gambar
                    borderRadius: "10px",
                    marginBottom: "16px",
                    display: "block",
                  }}
                />

                <h3 style={{ margin: "0 0 12px", fontSize: "1rem" }}>
                  {p.title}
                </h3>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#0af",
                    textDecoration: "underline",
                    fontWeight: "bold",
                    fontSize: "0.95rem",
                  }}
                >
                  Lihat Sertifikat
                </a>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
