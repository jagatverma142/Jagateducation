import React, { useMemo, useState } from "react";
import "../CSS/Authpage.css";

const authConfig = {
  brand: {
    nameA: "JAGAT",
    nameB: "EDUCATION",
    tagline: "Welcome to India's Leading Agri Institute",
  },

  side: {
    title: "Prepare Smarter for GATE (AG)",
    subtitle: "Concept clarity • PYQ mapping • Test analysis • Mentorship",
    bullets: [
      { id: "b1", title: "Structured Roadmap", desc: "Daily/weekly targets with revision loops." },
      { id: "b2", title: "PYQ + Concept Mapping", desc: "Focus on high-weightage, high ROI topics." },
      { id: "b3", title: "Test Series + Analysis", desc: "Error log + time management improvement." },
      { id: "b4", title: "Mentorship Support", desc: "Guidance, doubts and weekly review system." },
    ],
    stats: [
      { id: "s1", value: "15+", label: "Years" },
      { id: "s2", value: "2000+", label: "Students" },
      { id: "s3", value: "50+", label: "Faculty" },
      { id: "s4", value: "100%", label: "Commitment" },
    ],
  },

  formText: {
    loginTitle: "Login",
    loginSub: "Continue your learning journey",
    registerTitle: "Create Account",
    registerSub: "Join and start preparing today",
  },
};

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const formMeta = useMemo(() => {
    return isLogin
      ? { title: authConfig.formText.loginTitle, sub: authConfig.formText.loginSub }
      : { title: authConfig.formText.registerTitle, sub: authConfig.formText.registerSub };
  }, [isLogin]);

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: connect API
  };

  return (
    <div className="page-container auth-page">
      <div className="auth-shell">
        {/* LEFT: Topic sections */}
        <aside className="auth-side">
          <div className="auth-side-overlay" />
          <div className="auth-side-inner">
            <div className="auth-brand">
              <h2>
                {authConfig.brand.nameA}
                <span>{authConfig.brand.nameB}</span>
              </h2>
              <p>{authConfig.brand.tagline}</p>
            </div>

            <div className="auth-side-content">
              <h1 className="auth-side-title">{authConfig.side.title}</h1>
              <p className="auth-side-sub">{authConfig.side.subtitle}</p>

              <div className="auth-bullet-grid">
                {authConfig.side.bullets.map((b) => (
                  <div className="auth-bullet" key={b.id}>
                    <div className="dot" aria-hidden="true" />
                    <div>
                      <h4>{b.title}</h4>
                      <p>{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="auth-stats">
                {authConfig.side.stats.map((s) => (
                  <div className="auth-stat" key={s.id}>
                    <div className="val">{s.value}</div>
                    <div className="lab">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* RIGHT: Form card */}
        <main className="auth-main">
          <div className={`auth-card ${isLogin ? "mode-login" : "mode-register"}`}>
            <div className="auth-header">
              <h3>{formMeta.title}</h3>
              <p>{formMeta.sub}</p>
            </div>

            <div className="toggle-container" role="tablist" aria-label="Auth tabs">
              <div className={`slider ${isLogin ? "left" : "right"}`} aria-hidden="true" />
              <button
                type="button"
                className={isLogin ? "active" : ""}
                onClick={() => setIsLogin(true)}
                aria-pressed={isLogin}
              >
                Login
              </button>
              <button
                type="button"
                className={!isLogin ? "active" : ""}
                onClick={() => setIsLogin(false)}
                aria-pressed={!isLogin}
              >
                Register
              </button>
            </div>

            <form className="auth-form" onSubmit={onSubmit}>
              {!isLogin && (
                <div className="input-group slide-in">
                  <input type="text" required placeholder=" " autoComplete="name" />
                  <label>Full Name</label>
                </div>
              )}

              <div className="input-group">
                <input type="email" required placeholder=" " autoComplete="email" />
                <label>Email Address</label>
              </div>

              <div className="input-group">
                <input type="password" required placeholder=" " autoComplete={isLogin ? "current-password" : "new-password"} />
                <label>Password</label>
              </div>

              {!isLogin && (
                <div className="input-group slide-in">
                  <input type="password" required placeholder=" " autoComplete="new-password" />
                  <label>Confirm Password</label>
                </div>
              )}

              {isLogin && (
                <button type="button" className="forgot-pass">
                  Forgot Password?
                </button>
              )}

              <button type="submit" className="btn-submit">
                {isLogin ? "Login Now" : "Create Account"}
              </button>

              <p className="switch-text">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <span role="button" tabIndex={0} onClick={() => setIsLogin(!isLogin)} onKeyDown={(e)=> e.key==="Enter" && setIsLogin(!isLogin)}>
                  {isLogin ? "Sign Up" : "Login"}
                </span>
              </p>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
