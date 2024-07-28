import React, { useState } from "react";
import "./works.scss";
const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      link: "https://github.com/darpanrajput/React-Social-Media-App",
      desc: "As a freelancer, I offer web design services, creating visually appealing and user-friendly websites.",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      link: "https://github.com/darpanrajput/veggiesAndroidApp",
      desc: "I have Worked on Multiple Android Apps Using Java And Xml",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      link: "https://darpanrajput.github.io/Tindog-HTML-Project/",
      desc: "I also offer branding services, enhancing the visual identity and market presence of businesses.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  const slideClick = (params) => {
    console.log(params);
    params === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div key={d.id} className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>

                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span
                    onClick={(e) => {
                      e.preventDefault();
                      const newWindow = window.open(
                        d.link,
                        "_blank",
                        "noopener,noreferrer"
                      );
                      if (newWindow) newWindow.opener = null;
                    }}
                  >
                    Projects
                  </span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <img
        src="assets/arrow.png"
        alt=""
        className="arrow left"
        onClick={() => slideClick("left")}
      />
      <img
        src="assets/arrow.png"
        alt=""
        className="arrow right"
        onClick={() => slideClick("right")}
      />
    </div>
  );
};

export default Works;
