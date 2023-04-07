import React, { useState } from 'react';
import SimpleImageSlider from "react-simple-image-slider";

const HostelPage = () => {
  const images = [
    { url: "card1.jpg" },
    { url: "card2.jpg" },
    { url: "card3.jpg" },
    { url: "card4.jpg" },
    
  ];
  const [currentSection, setCurrentSection] = useState('Home');

  const handleBreadcrumbClick = (section) => {
    setCurrentSection(section);
    window.scrollTo(0, 0);
  };

  const getRandomSections = () => {
    const sections = ['Home', 'About Us', 'Services', 'Pricing', 'Contact Us'];
    const randomSections = [];
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * sections.length);
      randomSections.push(sections[randomIndex]);
      sections.splice(randomIndex, 1);
    }
    return randomSections;
  };

  const randomSections = getRandomSections();
  return (
    <>
      <div style={{display:'flex',alignItems:'center', justifyContent:'center'}}>  
          <SimpleImageSlider
            width={1000}
            height={504}
            images={images}
            showBullets={true}
            showNavs={true}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        {randomSections.map((section, index) => (
          <div key={index} style={{ marginRight: '10px' }}>
            <button onClick={() => handleBreadcrumbClick(section)}>
              {section}
            </button>
          </div>
        ))}
      </div>

      <div style={{ height: '1000px', background: 'lightgray', marginTop: '20px' }}>
        <h1>{currentSection}</h1>
        <p>This is the {currentSection} section of the page.</p>
      </div>
    </>
  )
}
export default HostelPage
