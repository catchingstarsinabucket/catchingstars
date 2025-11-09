import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cookieNoticeVisible, setCookieNoticeVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCookieNoticeVisible(false);
    }, 30000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    if (targetId.startsWith('/')) {
      window.location.href = targetId;
    } else {
      scrollToSection(targetId);
    }
  };

  return (
    <div className="site-wrapper">
      {/* Header */}
      <header className="site-header">
        <div className="header-container">
          <h1 className="site-title">
            <a href="/" onClick={(e) => handleNavClick(e, 'home')}>
              Catching Stars In A Bucket
            </a>
          </h1>

          <div className="header-right">
            <button
              className="mobile-menu-button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>

            <nav>
              <ul className={`main-navigation ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                <li>
                  <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#author" onClick={(e) => handleNavClick(e, 'author')}>
                    About
                  </a>
                </li>
                <li>
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            <button
              className="learn-more-button"
              onClick={() => scrollToSection('footer')}
            >
              Learn more
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section id="home" className="content-section">
          <div className="hero-section">
            <div className="hero-text">
              <h2>Verses on love, life, rainy days</h2>
              <p>and more..</p>
              <p>
                In these pages, you will journey through fleeting moments that define our lives,
                sometimes joyous, sometimes melancholic; profound nonetheless.
              </p>
              <p>
                Each poem is a star, a small piece of the universe I've gathered to share with you.
              </p>
              <p>
                Through these verses, I hope you find moments to pause and dwell in the quiet spaces
                between words—spaces where emotions refuge, and where the shared human experience finds its echo.
              </p>
              <p>I hope you discover unseen threads of your own story.</p>
              <p>Now available in paperback & eBook formats, buy your own copy here:</p>

              <div className="purchase-buttons">
                <a
                  href="https://www.amazon.in/Catching-stars-bucket-Shivani-Kumawat/dp/9363312615"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="purchase-button"
                >
                  <img
                    src="/images/amazon-button.png"
                    alt="Buy on Amazon"
                  />
                </a>
                <a
                  href="https://www.flipkart.com/catching-stars-bucket/p/itm4b68fb77ed71b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="purchase-button"
                >
                  <img
                    src="/images/flipkart-button.png"
                    alt="Buy on Flipkart"
                    style={{ width: '150px' }}
                  />
                </a>
                <a
                  href="https://ebooks.bookleafpub.com/product-page/catching-stars-in-a-bucket"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="purchase-button"
                >
                  <img
                    src="/images/ebook-button.png"
                    alt="Buy eBook"
                    style={{ width: '150px', height: '75px' }}
                  />
                </a>
              </div>
            </div>

            <div className="hero-image">
              <img
                src="/images/book-cover.jpg"
                alt="Catching Stars In A Bucket book cover"
              />
            </div>
          </div>

          <div className="divider"></div>
        </section>

        {/* Author Section */}
        <section id="author" className="content-section author-section">
          <img
            src="/images/author.jpg"
            alt="Shivani Kumawat"
            className="author-image"
          />

          <h2>Shivani Kumawat</h2>

          <p>
            An engineer by profession, I live in Bangalore, India, a city blessed by rain and cozy
            weather throughout the year. I love fiction, coffee and illustrating things from everyday life.
            Like everyone else, my thoughts are almost always more random than structured, and I often take
            delight in giving shape to them through written words. <em><strong>Catching stars in a bucket</strong></em> is
            my whimsical attempt on aiming to disperse some of such thoughts out in the universe & to find
            like-minded people. I sincerely hope you enjoy reading the book! Leave me a note, if you do!
          </p>

          <Link
            to="/contact"
            className="contact-button"
          >
            Get in touch
          </Link>
        </section>

        {/* Reviews Section */}
        {/* <section id="reviews" className="content-section reviews-section">
          <h2>What readers are saying</h2>

          <div className="reviews-grid">
            <div className="review-card">
              <img
                src="/images/quote-icon.png"
                alt="Quote"
                className="quote-icon"
              />
              <p>
                "A perfect companion for when you're in solitude. Maybe difficult to understand in one read,
                but very relatable once you get the hang of it."
              </p>
              <p className="reviewer">
                <strong>Tushar</strong><br />
                Bangalore
              </p>
            </div>

            <div className="review-card">
              <img
                src="/images/quote-icon.png"
                alt="Quote"
                className="quote-icon"
              />
              <p>"I loved the haiku."</p>
              <p className="reviewer">
                <strong>Anonymous</strong>
              </p>
            </div>
          </div>

          <div className="divider"></div>
        </section> */}
      </main>

      {/* Footer */}
      <footer id="footer" className="site-footer">
        <div className="footer-content">
          <nav>
            <ul className="footer-navigation">
              <li>
                <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>
                  Home
                </a>
              </li>
              <li>
                <a href="#author" onClick={(e) => handleNavClick(e, 'author')}>
                  About
                </a>
              </li>
              <li>
                <Link to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="social-links">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram"
            >
              <svg className="social-icon" viewBox="0 0 24 24">
                <path d="M12,4.622c2.403,0,2.688,0.009,3.637,0.052c0.877,0.04,1.354,0.187,1.671,0.31c0.42,0.163,0.72,0.358,1.035,0.673 c0.315,0.315,0.51,0.615,0.673,1.035c0.123,0.317,0.27,0.794,0.31,1.671c0.043,0.949,0.052,1.234,0.052,3.637 s-0.009,2.688-0.052,3.637c-0.04,0.877-0.187,1.354-0.31,1.671c-0.163,0.42-0.358,0.72-0.673,1.035 c-0.315,0.315-0.615,0.51-1.035,0.673c-0.317,0.123-0.794,0.27-1.671,0.31c-0.949,0.043-1.233,0.052-3.637,0.052 s-2.688-0.009-3.637-0.052c-0.877-0.04-1.354-0.187-1.671-0.31c-0.42-0.163-0.72-0.358-1.035-0.673 c-0.315-0.315-0.51-0.615-0.673-1.035c-0.123-0.317-0.27-0.794-0.31-1.671C4.631,14.688,4.622,14.403,4.622,12 s0.009-2.688,0.052-3.637c0.04-0.877,0.187-1.354,0.31-1.671c0.163-0.42,0.358-0.72,0.673-1.035 c0.315-0.315,0.615-0.51,1.035-0.673c0.317-0.123,0.794-0.27,1.671-0.31C9.312,4.631,9.597,4.622,12,4.622 M12,3 C9.556,3,9.249,3.01,8.289,3.054C7.331,3.098,6.677,3.25,6.105,3.472C5.513,3.702,5.011,4.01,4.511,4.511 c-0.5,0.5-0.808,1.002-1.038,1.594C3.25,6.677,3.098,7.331,3.054,8.289C3.01,9.249,3,9.556,3,12c0,2.444,0.01,2.751,0.054,3.711 c0.044,0.958,0.196,1.612,0.418,2.185c0.23,0.592,0.538,1.094,1.038,1.594c0.5,0.5,1.002,0.808,1.594,1.038 c0.572,0.222,1.227,0.375,2.185,0.418C9.249,20.99,9.556,21,12,21s2.751-0.01,3.711-0.054c0.958-0.044,1.612-0.196,2.185-0.418 c0.592-0.23,1.094-0.538,1.594-1.038c0.5-0.5,0.808-1.002,1.038-1.594c0.222-0.572,0.375-1.227,0.418-2.185 C20.99,14.751,21,14.444,21,12s-0.01-2.751-0.054-3.711c-0.044-0.958-0.196-1.612-0.418-2.185c-0.23-0.592-0.538-1.094-1.038-1.594 c-0.5-0.5-1.002-0.808-1.594-1.038c-0.572-0.222-1.227-0.375-2.185-0.418C14.751,3.01,14.444,3,12,3L12,3z M12,7.378 c-2.552,0-4.622,2.069-4.622,4.622S9.448,16.622,12,16.622s4.622-2.069,4.622-4.622S14.552,7.378,12,7.378z M12,15 c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S13.657,15,12,15z M16.804,6.116c-0.596,0-1.08,0.484-1.08,1.08 s0.484,1.08,1.08,1.08c0.596,0,1.08-0.484,1.08-1.08S17.401,6.116,16.804,6.116z"/>
              </svg>
            </a>

            <a
              href="https://www.goodreads.com/user/show/11181826-shivani-kumawat"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Goodreads"
            >
              <svg className="social-icon" viewBox="0 0 24 24">
                <path d="M17.3,17.5c-0.2,0.8-0.5,1.4-1,1.9c-0.4,0.5-1,0.9-1.7,1.2C13.9,20.9,13.1,21,12,21c-0.6,0-1.3-0.1-1.9-0.2 c-0.6-0.1-1.1-0.4-1.6-0.7c-0.5-0.3-0.9-0.7-1.2-1.2c-0.3-0.5-0.5-1.1-0.5-1.7h1.5c0.1,0.5,0.2,0.9,0.5,1.2 c0.2,0.3,0.5,0.6,0.9,0.8c0.3,0.2,0.7,0.3,1.1,0.4c0.4,0.1,0.8,0.1,1.2,0.1c1.4,0,2.5-0.4,3.1-1.2c0.6-0.8,1-2,1-3.5v-1.7h0 c-0.4,0.8-0.9,1.4-1.6,1.9c-0.7,0.5-1.5,0.7-2.4,0.7c-1,0-1.9-0.2-2.6-0.5C8.7,15,8.1,14.5,7.7,14c-0.5-0.6-0.8-1.3-1-2.1 c-0.2-0.8-0.3-1.6-0.3-2.5c0-0.9,0.1-1.7,0.4-2.5c0.3-0.8,0.6-1.5,1.1-2c0.5-0.6,1.1-1,1.8-1.4C10.3,3.2,11.1,3,12,3 c0.5,0,0.9,0.1,1.3,0.2c0.4,0.1,0.8,0.3,1.1,0.5c0.3,0.2,0.6,0.5,0.9,0.8c0.3,0.3,0.5,0.6,0.6,1h0V3.4h1.5V15 C17.6,15.9,17.5,16.7,17.3,17.5z M13.8,14.1c0.5-0.3,0.9-0.7,1.3-1.1c0.3-0.5,0.6-1,0.8-1.6c0.2-0.6,0.3-1.2,0.3-1.9 c0-0.6-0.1-1.2-0.2-1.9c-0.1-0.6-0.4-1.2-0.7-1.7c-0.3-0.5-0.7-0.9-1.3-1.2c-0.5-0.3-1.1-0.5-1.9-0.5s-1.4,0.2-1.9,0.5 c-0.5,0.3-1,0.7-1.3,1.2C8.5,6.4,8.3,7,8.1,7.6C8,8.2,7.9,8.9,7.9,9.5c0,0.6,0.1,1.3,0.2,1.9C8.3,12,8.6,12.5,8.9,13 c0.3,0.5,0.8,0.8,1.3,1.1c0.5,0.3,1.1,0.4,1.9,0.4C12.7,14.5,13.3,14.4,13.8,14.1z"/>
              </svg>
            </a>

            <a
              href="mailto:catchingstarsinabucket@gmail.com"
              className="social-link"
              aria-label="Email"
            >
              <svg className="social-icon" viewBox="0 0 24 24">
                <path d="M19,5H5c-1.1,0-2,.9-2,2v10c0,1.1.9,2,2,2h14c1.1,0,2-.9,2-2V7c0-1.1-.9-2-2-2zm.5,12c0,.3-.2.5-.5.5H5c-.3,0-.5-.2-.5-.5V9.8l7.5,5.6,7.5-5.6V17zm0-9.1L12,13.6,4.5,7.9V7c0-.3.2-.5.5-.5h14c.3,0,.5.2.5.5v.9z"/>
              </svg>
            </a>
          </div>

          <p className="footer-text">
            © 2024 Catching Stars In A Bucket
          </p>
        </div>
      </footer>

      {/* Cookie Notice */}
      {cookieNoticeVisible && (
        <div className="cookie-notice">
          <div className="cookie-text">
            Privacy & Cookies: This site uses cookies. By continuing to use this website, you agree to their use.
          </div>
          <button
            className="cookie-button"
            onClick={() => setCookieNoticeVisible(false)}
          >
            Close and accept
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
