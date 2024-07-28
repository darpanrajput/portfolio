import React from "react";
import "./testimonials.scss";
const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: "React Developer",
      title: "3 Years of Experience",
      img: "https://cdn.vectorstock.com/i/1000v/78/57/react-icon-in-a-hexagon-vector-36587857.jpg",
      icon: "assets/twitter.png",
      featured: true,
      desc: "Experienced in building full-stack MERN applications for E-commerce. Implemented user authentication, order processing, and revenue display with React.",
    },
    {
      id: 2,
      name: "Nodej Developer",
      title: "3 Years of Experience",
      img: "https://miro.medium.com/v2/resize:fit:1000/1*TGwJKcxY8kGEenRLLedeLw.png",
      icon: "assets/youtube.png",
      desc: "Developed backend server using NodeJs with authentication protection.Integrated technologies such as AWS Docker, Express, and Postgres Prisma. ",
      featured: true,
    },
    {
      id: 3,
      name: "Mongodb",
      title: "3 Years of Experience",
      img: "https://i0.wp.com/ahex.co/wp-content/uploads/2022/06/mongodb-logo.png",
      featured: true,

      icon: "assets/linkedin.png",
      desc: "Utilized MongoDB for database management in E-commerce and Video Streaming projects, using CRUD queries and aggregation pipeline for data handling.",
    },
    {
      id: 4,
      name: "UI Desinger",
      title: "2 Years of Experience",
      img: "https://s3-alpha.figma.com/hub/file/2815952264/7a5ebfb0-0508-48ab-be9a-31b36ba53f97-cover.png",
      icon: "assets/youtube.png",
      featured: true,

      desc: "UI designer with 2 years of experience in Figma, Adobe, and Canva, creating visually appealing and user-friendly interfaces for websites and applications",
    },
  ];
  return (
    <div className="testimonial" id="testimonial">
      <h1>Skills & Experience</h1>
      <div className="container">
        {data.map((d) => (
          <div key={d.id} className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
