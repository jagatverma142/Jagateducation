import React, { useState, useEffect } from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Nav';
import '../CSS/Study.css';
import '../CSS/Nav.css'; // Ensuring Nav styles are loaded
// Note: You may need to install react-icons: npm install react-icons
import { FaSearch, FaFilePdf, FaVideo, FaBook, FaDownload, FaFilter, FaStar } from 'react-icons/fa';

const Study = () => {
  // Expanded Database with 12 items
  const materialsData = [
    {
      id: 1,
      title: "Agri Engineering Basics",
      category: "Notes",
      type: "pdf",
      size: "2.4 MB",
      date: "Oct 2025",
      description: "Comprehensive handwritten notes covering fundamental concepts of Agriculture Engineering."
    },
    {
      id: 2,
      title: "GATE 2024 Solved Paper",
      category: "Previous Papers",
      type: "pdf",
      size: "1.1 MB",
      date: "Jan 2025",
      description: "Complete solution set for the 2024 Agri GATE examination with detailed explanations."
    },
    {
      id: 3,
      title: "Fluid Mechanics Masterclass",
      category: "Video Lectures",
      type: "video",
      size: "Link",
      date: "Dec 2025",
      description: "Link to the exclusive masterclass video covering advanced fluid dynamics."
    },
    {
      id: 4,
      title: "Soil Science Handbook",
      category: "Books",
      type: "pdf",
      size: "15 MB",
      date: "Sep 2025",
      description: "Standard reference book for Soil Science and conservation techniques."
    },
    {
      id: 5,
      title: "Farm Machinery Formula Sheet",
      category: "Notes",
      type: "pdf",
      size: "500 KB",
      date: "Nov 2025",
      description: "Quick revision cheat sheet containing all necessary formulas for Farm Machinery."
    },
    {
      id: 6,
      title: "General Aptitude Mock Test",
      category: "Previous Papers",
      type: "pdf",
      size: "3.0 MB",
      date: "Dec 2025",
      description: "Practice set for General Aptitude section tailored for GATE aspirants."
    },
    {
      id: 7,
      title: "Irrigation Engineering Guide",
      category: "Books",
      type: "book",
      size: "12 MB",
      date: "Jan 2026",
      description: "Advanced concepts of canal design, drip irrigation, and water management."
    },
    {
      id: 8,
      title: "Thermodynamics Visualized",
      category: "Video Lectures",
      type: "video",
      size: "Link",
      date: "Jan 2026",
      description: "3D animated video explanations of the Laws of Thermodynamics."
    },
    {
      id: 9,
      title: "GATE 2023 Solved Paper",
      category: "Previous Papers",
      type: "pdf",
      size: "1.4 MB",
      date: "Aug 2025",
      description: "Previous year question paper with answer key and hints."
    },
    {
      id: 10,
      title: "Engineering Mathematics Notes",
      category: "Notes",
      type: "pdf",
      size: "4.2 MB",
      date: "Dec 2025",
      description: "Calculus, Linear Algebra, and Probability notes for GATE exam."
    },
    {
      id: 11,
      title: "Renewable Energy Sources",
      category: "Books",
      type: "book",
      size: "8.5 MB",
      date: "Nov 2025",
      description: "Detailed study on Solar, Wind, and Bio-energy applications in agriculture."
    },
    {
      id: 12,
      title: "Post Harvest Tech Summary",
      category: "Notes",
      type: "pdf",
      size: "1.8 MB",
      date: "Jan 2026",
      description: "Short summary notes for Post Harvest Technology and Food Processing."
    }
  ];

  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleMaterials, setVisibleMaterials] = useState(materialsData);

  // Dynamic Filtering Logic
  useEffect(() => {
    const results = materialsData.filter(item => {
      const matchesCategory = filter === "All" || item.category === filter;
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    setVisibleMaterials(results);
  }, [filter, searchTerm]);

  // Helper to render icons based on type
  const getIcon = (type) => {
    switch (type) {
      case 'video': return <FaVideo className="card-icon video" />;
      case 'book': return <FaBook className="card-icon book" />;
      default: return <FaFilePdf className="card-icon pdf" />;
    }
  };

  // Helper to check if item is new (Simulated logic: Jan 2026 or Dec 2025)
  const isNew = (date) => {
    return date.includes("Jan 2026") || date.includes("Dec 2025");
  }

  return (
    <>
      <div className="nav-wrapper">
        <Navbar />
      </div>

      <div className="study-page">
        {/* Hero Section */}
        <div className="study-hero">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>Study Material & Resources</h1>
            <p>Unlock your potential with our curated notes, papers, and books.</p>
          </div>
        </div>

        {/* Controls Section (Search & Filter) */}
        <div className="study-controls container">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input 
              type="text" 
              placeholder="Search topics (e.g., 'Soil', 'Maths')..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-tabs">
            {["All", "Notes", "Previous Papers", "Video Lectures", "Books"].map((cat) => (
              <button 
                key={cat} 
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {filter === cat && <FaFilter style={{marginRight:'5px', fontSize:'0.8em'}}/>}
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Materials Grid */}
        <div className="materials-container container">
          <div className="results-count">
             Showing {visibleMaterials.length} results
          </div>
          
          {visibleMaterials.length > 0 ? (
            <div className="materials-grid">
              {visibleMaterials.map((item) => (
                <div key={item.id} className="material-card fade-in">
                  
                  {/* New Badge */}
                  {isNew(item.date) && <span className="new-badge">NEW</span>}

                  <div className="card-header">
                    {getIcon(item.type)}
                    <span className={`category-tag ${item.category.replace(" ", "-").toLowerCase()}`}>
                      {item.category}
                    </span>
                  </div>
                  
                  <div className="card-body">
                    <h3>{item.title}</h3>
                    <p className="description">{item.description}</p>
                    <div className="meta-info">
                      <span className="meta-item"><strong>Size:</strong> {item.size}</span>
                      <span className="meta-item"><strong>Date:</strong> {item.date}</span>
                    </div>
                  </div>
                  
                  <div className="card-footer">
                    <button className="download-btn">
                      {item.type === 'video' ? 'Watch Now' : 'Download'} <FaDownload />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <h3>No materials found.</h3>
              <p>Try searching for something else like "Fluid" or "Notes".</p>
              <button className="reset-btn" onClick={() => {setFilter("All"); setSearchTerm("")}}>Reset Filters</button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Study;