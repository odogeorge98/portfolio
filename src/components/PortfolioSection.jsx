// src/components/PortfolioSection.js
import React, { useState } from "react";
import bg from "./bg.png";
import "./PortfolioSection.css";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const portfolioItems = [
    {
      id: 1,
      title: "E-Commerce Mobile App",
      category: "App / Mobile",
      image: bg,
      description: "Modern shopping experience with intuitive UI and seamless checkout process",
      technologies: ["Figma", "Adobe XD", "Prototyping"],
      featured: true
    },
    {
      id: 2,
      title: "Corporate Website Redesign",
      category: "Website Design",
      image: bg,
      description: "Professional business website with modern aesthetics and improved UX",
      technologies: ["Web Design", "UI/UX", "Branding"],
      featured: true
    },
    {
      id: 3,
      title: "Brand Identity System",
      category: "Graphics",
      image: bg,
      description: "Complete brand system including logo, typography, and visual guidelines",
      technologies: ["Logo Design", "Branding", "Illustrator"],
      featured: false
    },
    {
      id: 4,
      title: "Finance Dashboard UI",
      category: "Website Design",
      image: bg,
      description: "Data visualization dashboard with analytics and reporting features",
      technologies: ["Dashboard", "Data Viz", "Web UI"],
      featured: true
    },
    {
      id: 5,
      title: "Fitness Tracker App",
      category: "App / Mobile",
      image: bg,
      description: "Health and wellness mobile application with activity tracking",
      technologies: ["Mobile UI", "Health Tech", "Prototyping"],
      featured: false
    },
    {
      id: 6,
      title: "Social Media Campaign",
      category: "Graphics",
      image: bg,
      description: "Complete social media graphics package for marketing campaign",
      technologies: ["Social Media", "Marketing", "Graphics"],
      featured: false
    },
    {
      id: 7,
      title: "Travel Booking Platform",
      category: "Website Design",
      image: bg,
      description: "User-friendly travel booking website with integrated payment system",
      technologies: ["E-commerce", "Booking System", "Web Design"],
      featured: true
    },
    {
      id: 8,
      title: "Food Delivery App",
      category: "App / Mobile",
      image: bg,
      description: "Mobile application for food ordering and delivery tracking",
      technologies: ["Mobile App", "Food Tech", "UX Design"],
      featured: false
    },
    {
      id: 9,
      title: "Portfolio Website",
      category: "Website Design",
      image: bg,
      description: "Modern portfolio website with smooth animations and responsive design",
      technologies: ["Portfolio", "Web Design", "Animation"],
      featured: false
    }
  ];

  const filters = ["All", "Website Design", "App / Mobile", "Graphics"];

  const filteredItems = activeFilter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Work</h2>
          <p className="section-sub">
            A curated collection of my latest design projects and creative solutions
          </p>
        </div>

        {/* Modern Filter Buttons */}
        <div className="portfolio-filter">
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              <span className="filter-text">{filter}</span>
              <span className="filter-dot"></span>
            </button>
          ))}
        </div>

        {/* Enhanced Portfolio Grid */}
        <div className="portfolio-grid">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`port-card ${item.featured ? 'featured' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="port-image-container">
                <div className="port-image">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    loading="lazy"
                  />
                  <div className="port-overlay">
                    <div className="port-content">
                      <div className="port-badge">{item.category}</div>
                      <h3 className="port-title">{item.title}</h3>
                      <p className="port-desc">{item.description}</p>
                      <div className="port-tech">
                        {item.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                    <div className="port-actions">
                     
                      <button className="port-btn secondary">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                          <path d="M12 16V8M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Featured Badge */}
                {item.featured && (
                  <div className="featured-badge">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                    Featured
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default PortfolioSection;
