import React from "react";
import "./ServicesSection.css";

// Place your icon image files in the same folder or adjust the paths below.
// Example filenames used here (change if yours are different):
// ./icons/app-design.png
// ./icons/website-design.png
// ./icons/infographics.png
// ./icons/online-ads.png
// ./icons/logo-design.png
// ./icons/web-development.png

import appIcon from "./main-menu.png";
import websiteIcon from "./network.png";
import infoIcon from "./friends.png";
import adsIcon from "./connection.png";
import logoIcon from "./triangle.png";
import webdevIcon from "./globe.png";

const ServicesSection = () => {
  const services = [
    {
      title: "App Design",
      text: "Designing intuitive mobile interfaces, flows and interactions.",
      icon: appIcon
    },
    {
      title: "Website Design",
      text: "Creating visually appealing and responsive website layouts.",
      icon: websiteIcon
    },
    {
      title: "Infographics",
      text: "Transforming data into impactful visual stories.",
      icon: infoIcon
    },
    {
      title: "Online Ads",
      text: "Designs for high-converting ad creatives and landing pages.",
      icon: adsIcon
    },
    {
      title: "Logo Design",
      text: "Brand identity and memorable logo systems.",
      icon: logoIcon
    },
    {
      title: "Web Development",
      text: "Production-ready, performant interfaces and interactions.",
      icon: webdevIcon
    }
  ];

  return (
    <section id="services" className="section services">
      <div className="section-header">
        <h2 className="section-title">Services</h2>
        <p className="section-sub">
          Delivering value through design, strategy, and innovation.
        </p>
      </div>

      <div className="service-grid">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="service-card"
            style={{ animationDelay: `${index * 0.06}s` }}
          >
            <div className="service-icon">
              <img
                src={service.icon}
                alt={`${service.title} icon`}
                className="service-icon-img"
                draggable="false"
              />
            </div>

            <h4 className="service-title">{service.title}</h4>
            <p className="service-desc">{service.text}</p>

            <div className="service-hover-effect" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
