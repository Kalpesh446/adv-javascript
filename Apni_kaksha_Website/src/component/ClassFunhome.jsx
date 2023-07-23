import React from "react";
import "./ClassFunhome.css";

export default function ClassFunhome() {
  return (
    <div>
      <header>
        <h1>Apni kaksha</h1>
        {/* <!-- <img src="./imges/apni kakasha.jpg" alt="" class="apni-class"> --> */}
      </header>
      <nav>
        <a href="#">Home</a>
        <a href="#">College review</a>
        <a href="#">Couses</a>
        <a href="#">Study Materilas</a>
        <a href="#">Login/Signup</a>
      </nav>
      <main>
        <section>
          <h2>Courses</h2>
          <video
            src="./videos/video1.mkv"
            width="33%"
            poster="images/img1.jpg"
            controls
          ></video>
          <video
            // src="./videos/video2.mkv"
            width="33%"
            poster="images/img4.jpg"
            controls
          ></video>
          <video
            src="./videos/video1.mkv"
            width="33%"
            poster="images/apni kakasha.jpg"
            controls
          ></video>
          <br />
          <br />
          <br />
          <video
            src="./videos/video4.mkv"
            width="33%"
            poster="images/img4.jpg"
            controls
          ></video>
          <video
            src="./videos/video5.mkv"
            width="33%"
            poster="images/img5.jpg"
            controls
          ></video>
          <video
            src="./videos/video6.mkv"
            width="33%"
            poster="images/img6.jpg"
            controls
          ></video>
        </section>

        <section>
          <h2>College review</h2>
          <iframe
            width="33%"
            height="75%"
            src="https://www.youtube.com/embed/l1EssrLxt7E"
            title="YouTube
                video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            width="33%"
            height="75%"
            src="https://www.youtube.com/embed/l1EssrLxt7E"
            title="YouTube
                video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            width="33%"
            height="75%"
            src="https://www.youtube.com/embed/Rek0NWPCNOc"
            title="YouTube
                video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </section>

        <section class="study-mat">
          <h2>Study material</h2>
          <a
            class="a1"
            target="_blank"
            href="./study matireal/CSS Practical Sheet.pdf"
          >
            <img src="images/img2.jpg" height="60%" width="24%" alt="" />
          </a>
          <a target="_blank" href="./study matireal/HTML_PRACTICAL_SHEET.pdf">
            <img src="images/img3.jpg" height="60%" width="24%" alt="" />
          </a>
          <a
            target="_blank"
            href="./study matireal/JavaScript Practical Sheet.pdf"
          >
            <img src="images/img2.jpg" height="60%" width="24%" alt="" />
          </a>
          <a target="_blank" href="./study matireal/CSS Practical Sheet.pdf">
            <img src="images/img3.jpg" height="60%" width="24%" alt="" />
          </a>
        </section>

        <section>
          <h2>Our founder</h2>
          <img
            class="img1"
            src="images/aman.jpg"
            alt="this is aman dhattarwal"
          />
          <h3>Aman Dhattarwal</h3>
          <a
            href="http://www.youtube.com/amandhattarwal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-youtube"></i>YouTube
          </a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a
            href="http://www.linkedin.com/in/dhattarwalaman"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-linkedin" id="i"></i>LinkedIn
          </a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a
            href="http://www.instagram.com/dhattarwalaman"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-instagram"></i>Instagram
          </a>
          <h4>
            Young TEDx speaker and #1 Online JEE Educator | Founder of 5 YouTube
            Channels with 2.5 million young hustlers.
          </h4>
          <h5>
            I help students across India find their right career path. I have
            been a guest speaker at 22 Colleges including Top IITs, BITS Pilani,
            IIIT's, NIT's, SRCC, Jadavpur University etc. I am the #1 Educator
            of JEE on India's biggest online platformand I believe that everyone
            has the right to quality education and with the help of my social
            media platforms, I have helped millions of students find their path
            to success in the last 5 years. In the next few decades, India will
            riseas the leader of the world with the maximum young workforce, but
            for this, we need some good pilots who can take us through this. I
            help these young hustlers find their true potential so that they can
            fly us to victory.
          </h5>
        </section>
      </main>

      <footer>
        <a href="#">FAQ</a>
        <a href="#">Contact Us</a>
        <a href="#">Terms of Use</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Refund Policy</a>
        <a href="#">&copy; 2020 | Apni Kaksha</a>
      </footer>
    </div>
  );
}
