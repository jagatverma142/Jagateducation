import React, { useState } from 'react';
import Navbar from '../Components/Nav';
import Footer from '../Components/Footer';
import '../CSS/Mock.css';
import '../CSS/Nav.css';
import { FaClock, FaQuestionCircle, FaTrophy, FaCheckCircle, FaLock, FaPlay, FaFilter, FaSearch, FaLanguage, FaChartLine } from 'react-icons/fa';

const Mock = () => {
  // Enhanced Mock Database
  const testsData = [
    {
      id: 1,
      title: "Agri GATE 2026 - All India Open Mock",
      category: "Full Mock",
      status: "Live", 
      difficulty: "Hard",
      language: "English",
      price: "Free",
      questions: 65,
      marks: 100,
      duration: "180 Min",
      attempts: "12.5k Students",
      syllabus: "Complete Syllabus (Engineering + General Aptitude)"
    },
    {
      id: 2,
      title: "Farm Machinery - Topic Wise Test",
      category: "Subject Wise",
      status: "Attempted",
      difficulty: "Medium",
      language: "Eng/Hindi",
      price: "Premium",
      questions: 30,
      marks: 50,
      duration: "60 Min",
      attempts: "You Scored: 42/50",
      syllabus: "Tillage, Sowing, and Harvesting Equipment"
    },
    {
      id: 3,
      title: "Soil Science & Water Conservation",
      category: "Subject Wise",
      status: "Upcoming",
      difficulty: "Medium",
      language: "English",
      price: "Free",
      questions: 45,
      marks: 75,
      duration: "90 Min",
      attempts: "Starts: 15 Jan, 10:00 AM",
      syllabus: "Soil Mechanics, Erosion Control, Watershed Management"
    },
    {
      id: 4,
      title: "General Aptitude Booster",
      category: "Aptitude",
      status: "Live",
      difficulty: "Easy",
      language: "English",
      price: "Free",
      questions: 20,
      marks: 30,
      duration: "45 Min",
      attempts: "5.2k Students",
      syllabus: "Numerical Ability and Verbal Reasoning"
    },
    {
      id: 5,
      title: "Thermodynamics & Heat Engine",
      category: "Subject Wise",
      status: "Locked",
      difficulty: "Hard",
      language: "English",
      price: "Premium",
      questions: 40,
      marks: 60,
      duration: "80 Min",
      attempts: "Unlock to Access",
      syllabus: "Laws of Thermodynamics, Cycles, and Heat Transfer"
    },
    {
      id: 6,
      title: "Jagat Scholarship Test 2026",
      category: "Scholarship",
      status: "Live",
      difficulty: "Hard",
      language: "Eng/Hindi",
      price: "Free",
      questions: 50,
      marks: 100,
      duration: "120 Min",
      attempts: "8.9k Students",
      syllabus: "General Agriculture & Basic Engineering"
    },
    {
      id: 7,
      title: "Irrigation Engineering - Level 1",
      category: "Subject Wise",
      status: "Live",
      difficulty: "Easy",
      language: "English",
      price: "Premium",
      questions: 25,
      marks: 25,
      duration: "40 Min",
      attempts: "1.1k Students",
      syllabus: "Canal Design, Crop Water Requirement"
    },
    {
      id: 8,
      title: "Fluid Mechanics Advanced",
      category: "Subject Wise",
      status: "Locked",
      difficulty: "Hard",
      language: "English",
      price: "Premium",
      questions: 35,
      marks: 50,
      duration: "70 Min",
      attempts: "Unlock to Access",
      syllabus: "Fluid Kinematics, Dynamics, and Pumps"
    }
  ];

  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Dynamic Filtering Logic
  const filteredTests = testsData.filter(test => {
    const matchesCategory = filter === "All" || 
                            (filter === "Free" && test.price === "Free") ||
                            (filter === "Premium" && test.price === "Premium") ||
                            test.category === filter;
    
    const matchesSearch = test.title.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  // Helper for Difficulty Color
  const getDifficultyColor = (level) => {
    if(level === 'Easy') return 'var(--success)';
    if(level === 'Medium') return 'var(--primary-orange)';
    return 'var(--danger)';
  };

  return (
    <>
      <div className="nav-wrapper">
        <Navbar />
      </div>

      <div className="mock-page">
        {/* Hero Section */}
        <div className="mock-hero">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>Test Series & Mock Exams</h1>
            <p>Practice with India's most trusted Agri GATE test platform. Real-time analysis and All India Rank.</p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <FaTrophy className="stat-icon" />
                <span>15+ Toppers</span>
              </div>
              <div className="stat-item">
                <FaCheckCircle className="stat-icon" />
                <span>Error Free</span>
              </div>
              <div className="stat-item">
                <FaLanguage className="stat-icon" />
                <span>Eng & Hindi</span>
              </div>
            </div>
          </div>
        </div>

        {/* Controls: Search & Filter */}
        <div className="mock-controls container">
          
          <div className="search-wrapper">
            <FaSearch className="search-icon" />
            <input 
              type="text" 
              placeholder="Search tests (e.g., 'Soil', 'Full Mock')..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-tabs">
            {["All", "Full Mock", "Subject Wise", "Free", "Premium"].map((cat) => (
              <button 
                key={cat} 
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {filter === cat && <FaFilter size={12} style={{marginRight:'5px'}}/>}
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Test Grid */}
        <div className="tests-container container">
           <div className="results-header">
             <span>Showing {filteredTests.length} Tests</span>
           </div>

           {filteredTests.length > 0 ? (
             <div className="tests-grid">
               {filteredTests.map((test) => (
                 <div key={test.id} className={`test-card ${test.price === 'Premium' ? 'premium-border' : ''}`}>
                   
                   {/* Badges Row */}
                   <div className="card-badges">
                      <span className={`status-badge ${test.status.toLowerCase()}`}>
                        {test.status === 'Live' && <span className="dot live"></span>}
                        {test.status}
                      </span>
                      <span className="difficulty-badge" style={{color: getDifficultyColor(test.difficulty)}}>
                        <FaChartLine /> {test.difficulty}
                      </span>
                   </div>

                   {/* Content */}
                   <div className="test-content">
                     <span className="category-tag">{test.category}</span>
                     <h3>{test.title}</h3>
                     <p className="syllabus">{test.syllabus}</p>
                     
                     {/* Meta Grid */}
                     <div className="meta-grid">
                        <div className="meta-item"><FaQuestionCircle /> {test.questions} Qs</div>
                        <div className="meta-item"><FaTrophy /> {test.marks} Marks</div>
                        <div className="meta-item"><FaClock /> {test.duration}</div>
                        <div className="meta-item"><FaLanguage /> {test.language}</div>
                     </div>
                   </div>

                   {/* Footer / Action */}
                   <div className="test-footer">
                     <div className="attempts-info">
                        {test.status === 'Attempted' ? (
                          <span className="score-text">{test.attempts}</span>
                        ) : (
                          <span>{test.attempts}</span>
                        )}
                     </div>

                     {test.status === 'Locked' ? (
                       <button className="action-btn locked">Unlock <FaLock /></button>
                     ) : test.status === 'Attempted' ? (
                       <button className="action-btn result">View Result <FaChartLine /></button>
                     ) : test.status === 'Upcoming' ? (
                       <button className="action-btn upcoming">Notify Me</button>
                     ) : (
                       <button className="action-btn start">Attempt Now <FaPlay /></button>
                     )}
                   </div>

                 </div>
               ))}
             </div>
           ) : (
             <div className="no-results">
               <h3>No tests found.</h3>
               <p>Try clearing your search or filters.</p>
             </div>
           )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Mock;