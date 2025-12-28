// src/components/Home.jsx
import React, { useEffect, useRef, useState } from "react";

import "./Home.css";
import "./Stats.css";
import "./About.css";
import "./Projects.css";
import "./Contact.css";


const projectsData = [
  {
    title: "Internal Mark Assessment System",
    image: "/project1.png",
    github: "https://github.com/dashboard",
    live: "https://orbitqa.com/",
  },
  {
    title: "Televizy- TV Show popularity analysis website",
    image: "/project2.png",
    github: "https://github.com/dashboard",
    live: "https://orbitqa.com/",
  },
  {
    title: "CO PO Attainment calculator ",
    image: "/project3.png",
    github: "https://github.com/dashboard",
    live: "https://orbitqa.com/",
  },
  {
    title: "Portfolio Website",
    image: "/project4.png",
    github: "https://github.com/dashboard",
    live: "https://orbitqa.com/",
  },
  {
    title: "Website for Vendor Medical Trading W.L.L",
    image: "/project5.png",
    github: "https://github.com/dashboard",
    live: "https://orbitqa.com/",
  },
  {
    title: "Web page for Orbit Telecommunications",
    image: "/project6.png",
    github: "https://github.com/dashboard",
    live: "https://orbitqa.com/",
  },
];
const Home = () => {
  /* ================= STATE & REFS ================= */
  const countersRef = useRef([]);
  const [activeTab, setActiveTab] = useState("skills");

  /* ================= EFFECTS ================= */
  useEffect(() => {
    countersRef.current.forEach((counter) => {
      if (!counter) return;

      const target = Number(counter.dataset.target);
      let current = 0;
      const increment = target / 120;

      const animate = () => {
        current += increment;
        if (current < target) {
          counter.innerText = Math.ceil(current);
          requestAnimationFrame(animate);
        } else {
          counter.innerText = target;
        }
      };

      animate();
    });
  }, []);

  /* ================= RENDER ================= */
  return (
    <div className="home-container">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="Logo" className="logo-img" />
        </div>

        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-text">
            <h1 className="animated-gradient">Hi, I'm Alnna</h1>
            <h1 className="typing-text">Web Developer</h1>
          </div>

          <p className="hero-para">
            I build beautiful and interactive websites.<br />
            Specializing in full-stack web development.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn contact-btn">Get in Touch</a>
            <a href="/cv.pdf" download className="btn cv-btn">Download CV</a>
          </div>
        </div>

        <div className="hero-right">
          <img src="/pro.png" alt="Profile" className="profile-pic" />
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="stats-section">
        <div className="stats-container">

          <div className="stat-item">
            <h3>
              <span ref={(el) => (countersRef.current[0] = el)} data-target="15">0</span>+
            </h3>
            <p>Projects</p>
          </div>

          <div className="stat-item">
            <h3>
              ~<span ref={(el) => (countersRef.current[1] = el)} data-target="5">0</span>
            </h3>
            <p>Published</p>
          </div>

          <div className="stat-item">
            <h3>
              <span ref={(el) => (countersRef.current[2] = el)} data-target="3">0</span>
            </h3>
            <p>Live Projects</p>
          </div>

          <div className="stat-item">
            <h3>
              <span ref={(el) => (countersRef.current[3] = el)} data-target="3">0</span>
            </h3>
            <p>Years</p>
          </div>

        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="about-section" id="about">
        <div className="about-container">

          <div className="about-image">
            <img src="/abt.png" alt="Workspace" />
          </div>

          <div className="about-content">
            <h2>About Me</h2>

            <p className="about-summary">
              Entry-level software engineer with a strong grounding in full-stack development, spanning JavaScript, Python, MERN, and Django. Experienced in building academic web solutions, managing databases, and working with cloud fundamentals. Brings a structured problem-solving mindset, high adaptability, and a proactive approach to supporting development initiatives in modern engineering environments.
            </p>

            <div className="about-tabs">
              <span
                className={activeTab === "skills" ? "active" : ""}
                onClick={() => setActiveTab("skills")}
              >
                Skills
              </span>
              <span
                className={activeTab === "education" ? "active" : ""}
                onClick={() => setActiveTab("education")}
              >
                Education
              </span>
              <span
                className={activeTab === "certifications" ? "active" : ""}
                onClick={() => setActiveTab("certifications")}
              >
                Certifications
              </span>
              <span
                className={activeTab === "experience" ? "active" : ""}
                onClick={() => setActiveTab("experience")}
              >
                Experience
              </span>
            </div>

            <div className="about-tab-content">
              {activeTab === "skills" && (
                <ul>
                  <li>JavaScript, Python </li>
                  <li>React, Node, Mongo DB, Express (MERN STACK)</li>
                  <li>HTML & CSS</li>
                  <li>MySQL </li>
                  <li>Git & Github</li>
                  <li>Azure , Docker, CI/CD, Kubernetes </li>
                  <li>AI & ML</li>
                  <li>Vscode, Pycharm</li>
                </ul>
              )}

              {activeTab === "education" && (
                <ul>
                  <li>Master of Computer Applications(MCA)</li>
                  <li>Bachelor of Science in Mathematics (B.Sc)</li>
                  
                </ul>
              )}

              {activeTab === "certifications" && (
                <ul>
                  <li>IBM Full-Stack JavaScript Developer Professional Certificate</li>
                  <li>Microsoft Certified: Azure Fundamentals (AZ-900)</li>
                  <li>Python Django Training, Riss Technologies,</li>
                </ul>
              )}

              {activeTab === "experience" && (
                <ul>
                  <li>Web Developer - Freelancer - Doha, Qatar</li>
                  <li>Assistant Professor - DCSMAT, Vagamon, Kerala, India</li>
                  
                </ul>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* ================= PROJECTS SECTION ================= */}
      <section className="projects-section" id="projects">
      <h2 className="projects-heading">Projects</h2>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />

            <div className="project-overlay">
              <a href={project.github} target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href={project.live} target="_blank" rel="noreferrer">
                <i className="fas fa-eye"></i>
              </a>
            </div>

            <h3 className="project-title">{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
      {/* ================= CONTACT SECTION ================= */}
      {/* ================= CONTACT SECTION ================= */}
<section className="contact-section" id="contact">
  <div className="contact-container">

    {/* Left side */}
    <div className="contact-left">
      <h2>Let's Connect</h2>
      <p>
        I am a full-stack developer and ready to take freelance work. Feel free to reach out!
      </p>

      <div className="contact-info">
        <p><i className="fas fa-envelope"></i> alnnaofficial25@gmail.com</p>
        <p><i className="fas fa-map-marker-alt"></i> Doha, Qatar</p>
        <p><i className="fas fa-phone"></i> +974 3077 3196</p>
      </div>

      <div className="contact-socials">
        <a href="https://github.com/AlnnaAntoC" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="www.linkedin.com/in/alnna-anto-c-645099221" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>

    {/* Right side — Contact Form */}
    <div className="contact-right">
  <div className="contact-form-container">
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const subject = form.subject.value;
        const message = form.message.value;
        const whatsappNumber = "+974 3077 3196"; // Replace with your number
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=Name: ${encodeURIComponent(
          name
        )}%0ASubject: ${encodeURIComponent(subject)}%0AMessage: ${encodeURIComponent(
          message
        )}`;
        window.open(whatsappURL, "_blank");
      }}
    >
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="text" name="mail" placeholder="Mail" required />
      <input type="text" name="subject" placeholder="Subject" required />
      <textarea name="message" placeholder="Message" rows="5" required></textarea>
      <button type="submit" className="whatsapp-btn">
        <i className="fab fa-whatsapp"></i> Send Message
      </button>
    </form>
  </div>
</div>


  </div>
</section>


    </div>
  );
};

export default Home;
