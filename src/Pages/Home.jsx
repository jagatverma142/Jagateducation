import React from 'react';
import Footer from '../Components/Footer';
// Make sure to import your CSS files here or in App.js
import '../CSS/Style.css'; 
import '../CSS/Nav.css';
import Navbar from '../Components/Nav';
import OnlineClasses from '../Pages/OnlineClasses';
import Aboutsection from '../Components/Aboutsection';
import Study from '../Pages/Study';




// --- ADD THESE IMPORTS HERE ---
// Make sure the file names match exactly what is in your folder
import expertIcon from '../Icons/icons8-expert-48.png';
// Note: I suggest downloading the 'Anytime Access' icon locally instead of using a link, 
// but for now, we will use the link or a placeholder.
import pdfIcon from '../Icons/icons8-pdf-48.png';
import supportIcon from '../Icons/icons8-online-support-48.png';
import aiIcon from '../Icons/icons8-electronic-brain-50.png';
import papersIcon from '../Icons/icons8-test-results-50.png';

// Assuming you will create these components separately later
// import Navbar from './Navbar';
// import Footer from './Footer';

const Home = () => {
  return (
    <>
    <div className="nav">
      <Navbar />
      
      </div>      
      {/* Hero Section */}
      <section className="hero">
        <h1>India's Leading Agri GATE Institute</h1>
        <p>Your dedicated allies on the path to success since 2015.</p>
        <div className="cta-button">
          <a href="#" className="cta-btn">View Packages</a>
          <a href="#" className="cta-btn secondary">Try Free Demo</a>
        </div>
      </section>

      <div className="aboutsection">
        <Aboutsection />
      </div>

      {/* Why Choose Us */}
      <section className="section-padding">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <i className="fas fa-video"></i>
            <h3>Live Lectures</h3>
            <p>Interactive sessions with real-time doubt resolution and updated content.</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-file-signature"></i>
            <h3>Live Tests</h3>
            <p>Gauge your performance in real-time with our nationwide mock test series.</p>
          </div>
          <div className="feature-card">
            <i className="fas Phoenix fa-book-open"></i>
            <h3>Updated Course</h3>
            <p>Study materials aligned perfectly with the latest GATE exam patterns.</p>
          </div>
        </div>
      </section>

     

      {/* Popular Courses Section */}
      <section className="courses-section">
        <div className="section-header">
          <h2>POPULAR COURSES</h2>
          <p>Choose your course and get started.</p>
          <div className="divider">
            <span className="line"></span>
            <span className="dot"></span>
            <span className="line"></span>
          </div>
        </div>

        <div className="courses-container">
          {/* Course Card 1 */}
          <div className="course-card">
            <div className="card-image">
              <img src="https://client-media.onlinetestpanel.com/2509/user_65c363d1af4e065da616b1a1/packages/68c6b39b7a5f1rec-app.png" alt="Gate Course Live" />
            </div>
            <div className="card-body">
              <h3>GATE (AG 26/27) LIVE & RECORDED LECTURES...</h3>
              <div className="validity">
                <span className="label">Validity:</span> <span className="date">10-Feb-26</span>
              </div>
              <div className="card-footer">
                <div className="price-box">
                  <span className="original-price">35000</span>
                  <span className="current-price">30000</span>
                </div>
                <button className="buy-btn">
                  <i className="fa-solid fa-cart-shopping"></i> BUY
                </button>
              </div>
            </div>
          </div>

          {/* Course Card 2 */}
          <div className="course-card">
            <div className="card-image">
              <img src="https://client-media.onlinetestpanel.com/2509/user_65c363d1af4e065da616b1a1/packages/68c6b2f404884live-app.png" alt="Gate Course Recorded" />
            </div>
            <div className="card-body">
              <h3>GATE (AG 26/27) RECORDED VIDEO LECTURES...</h3>
              <div className="validity">
                <span className="label">Validity:</span> <span className="date">10-Feb-26</span>
              </div>
              <div className="card-footer">
                <div className="price-box">
                  <span className="original-price">30000</span>
                  <span className="current-price">25000</span>
                </div>
                <button className="buy-btn">
                  <i className="fa-solid fa-cart-shopping"></i> BUY
                </button>
              </div>
            </div>
          </div>

          {/* Course Card 3 */}
          <div className="course-card">
            <div className="card-image">
              <img src="https://client-media.onlinetestpanel.com/2509/user_65c363d1af4e065da616b1a1/packages/68c6b47d780f1live-app-shorts.png" alt="Short Video Course" />
            </div>
            <div className="card-body">
              <h3>GATE (AG 26/27) SHORT VIDEO + STUDY MA...</h3>
              <div className="validity">
                <span className="label">Validity:</span> <span className="date">10-Feb-26</span>
              </div>
              <div className="card-footer">
                <div className="price-box">
                  <span className="original-price">15000</span>
                  <span className="current-price">12000</span>
                </div>
                <button className="buy-btn">
                  <i className="fa-solid fa-cart-shopping"></i> BUY
                </button>
              </div>
            </div>
          </div>

          {/* Course Card 4 */}
          <div className="course-card">
            <div className="card-image">
              <img src="https://client-media.onlinetestpanel.com/2509/user_65c363d1af4e065da616b1a1/packages/68c6b41b6d2c6app-study-matn.png" alt="Short Video Course" />
            </div>
            <div className="card-body">
              <h3>GATE (AG 26/27) SHORT VIDEO + STUDY MA...</h3>
              <div className="validity">
                <span className="label">Validity:</span> <span className="date">10-Feb-26</span>
              </div>
              <div className="card-footer">
                <div className="price-box">
                  <span className="original-price">15000</span>
                  <span className="current-price">12000</span>
                </div>
                <button className="buy-btn">
                  <i className="fa-solid fa-cart-shopping"></i> BUY
                </button>
              </div>
            </div>
          </div>

          {/* Course Card 5 */}
          <div className="course-card">
            <div className="card-image">
              <img src="https://client-media.onlinetestpanel.com/2509/user_65c363d1af4e065da616b1a1/packages/68c6b3e7c3ccdapp-test-series.png" alt="Gate Course Recorded" />
            </div>
            <div className="card-body">
              <h3>GATE (AG 26/27) RECORDED VIDEO LECTURES...</h3>
              <div className="validity">
                <span className="label">Validity:</span> <span className="date">10-Feb-26</span>
              </div>
              <div className="card-footer">
                <div className="price-box">
                  <span className="original-price">30000</span>
                  <span className="current-price">25000</span>
                </div>
                <button className="buy-btn">
                  <i className="fa-solid fa-cart-shopping"></i> BUY
                </button>
              </div>
            </div>
          </div>

          {/* Course Card 6 */}
          <div className="course-card">
            <div className="card-image">
              <img src="https://client-media.onlinetestpanel.com/2509/user_65c363d1af4e065da616b1a1/packages/68c57f649a2dblive-app.png" alt="Gate Course Live" />
            </div>
            <div className="card-body">
              <h3>GATE (AG 26/27) LIVE & RECORDED LECTURES...</h3>
              <div className="validity">
                <span className="label">Validity:</span> <span className="date">10-Feb-26</span>
              </div>
              <div className="card-footer">
                <div className="price-box">
                  <span className="original-price">35000</span>
                  <span className="current-price">30000</span>
                </div>
                <button className="buy-btn">
                  <i className="fa-solid fa-cart-shopping"></i> BUY
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="section-padding">
        <h2 className="section-title">Everything You Need To Succeed</h2>
        <div className="feature-grid">
          
          {/* Feature 1 */}
          <div className="feature-card">
            {/* Use the imported variable name inside curly braces {} */}
            <div className="icon-box"><img src={expertIcon} alt="Expert Faculty" /></div>
            <h3>Expert Faculty</h3>
            <p>Learn from GATE toppers and industry experts with years of teaching experience.</p>
          </div>

          {/* Feature 2 */}
          <div className="feature-card">
            <div className="icon-box">
                {/* If this external link is broken, replace it with a local icon import like the others */}
                <img src="https://www.transeasy.org/assets/templet/t3/images/expertise.png" alt="Anytime Access" />
            </div>
            <h3>Anytime Access</h3>
            <p>Study on the go! Our platform works perfectly on mobile, tablet, and desktop.</p>
          </div>

          {/* Feature 3 */}
          <div className="feature-card">
            <div className="icon-box"><img src={pdfIcon} alt="PDF Notes" /></div>
            <h3>Detailed PDF Notes</h3>
            <p>Get comprehensive, topic-wise study materials and hand-written notes.</p>
          </div>

          {/* Feature 4 */}
          <div className="feature-card">
            <div className="icon-box"><img src={supportIcon} alt="Doubt Support" /></div>
            <h3>24/7 Doubt Support</h3>
            <p>Stuck on a question? Get your doubts resolved quickly by our dedicated mentors.</p>
          </div>

          {/* Feature 5 */}
          <div className="feature-card">
            <div className="icon-box"><img src={aiIcon} alt="AI Analytics" /></div>
            <h3>AI Performance Analytics</h3>
            <p>Track your progress with detailed reports and identify your weak areas instantly.</p>
          </div>

          {/* Feature 6 */}
          <div className="feature-card">
            <div className="icon-box"><img src={papersIcon} alt="Previous Papers" /></div>
            <h3>Previous Year Papers</h3>
            <p>Access 15+ years of solved GATE Agricultural Engineering question papers.</p>
          </div>
        </div>
      </section>


      {/* Call to Action Section */}
      <section className="cta-section">
        <div style={{ textAlign: 'center' }}>
          <h2>Ready to start your journey?</h2>
          <p>Join thousands of students who have achieved their dreams with us.</p>
          <br />
          <a href="#" className="cta-btn">Explore Test Packages</a>
        </div>
      </section>

      <div className="footer">
        <Footer />
      </div>

      {/* <Footer /> <-- Uncomment this when you create the Footer component */}
    </>
  );
};

export default Home;