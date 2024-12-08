<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <div class="main" style="background-color: #f2f2f2">
    <NavBar></NavBar>
    <div class="Banner">
      <div class="banner-container">
        <img src="./assets/banner.jpeg" alt="Banner" />
        <div class="banner-overlay"></div>
        <div class="banner-content">
          <h1 class="hero">Welcome to Prestax</h1>
          <p class="sub-hero">
            We are a team of professionals who are dedicated to providing you
            with the best services in the construction industry.
          </p>
        </div>
        <nav class="sub-pages-nav">
          <ul>
            <li>
              <router-link to="/" :class="{ active: $route.path === '/' }"
                >Home</router-link
              >
            </li>
            <li>
              <router-link
                to="/portfolio"
                :class="{ active: $route.path === '/portfolio' }"
                >Portfolio</router-link
              >
            </li>
            <li>
              <router-link
                to="/services"
                :class="{ active: $route.path === '/services' }"
                >Services</router-link
              >
            </li>
            <li>
              <a href="#contact" @click.prevent="scrollToSection('contact')"
                >Contact</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <section class="services">
      <h2>Our Services</h2>
      <div class="services-grid">
        <div class="service-card">
          <i class="fas fa-home"></i>
          <h3>Residential Construction</h3>
          <p>
            Building dreams into reality with quality residential construction
            services.
          </p>
        </div>
        <div class="service-card">
          <i class="fas fa-building"></i>
          <h3>Commercial Projects</h3>
          <p>Expert solutions for all your commercial construction needs.</p>
        </div>
        <div class="service-card">
          <i class="fas fa-tools"></i>
          <h3>Renovations</h3>
          <p>Transform your space with our professional renovation services.</p>
        </div>
      </div>
    </section>

    <!-- Added Stats Section -->
    <section class="stats parallax">
      <div class="stats-container">
        <div class="stat-item">
          <h3>500+</h3>
          <p>Projects Completed</p>
        </div>
        <div class="stat-item">
          <h3>150+</h3>
          <p>Happy Clients</p>
        </div>
        <div class="stat-item">
          <h3>25+</h3>
          <p>Years Experience</p>
        </div>
      </div>
    </section>

    <div id="contact" class="footer parallax">
      <div class="footer-content">
        <div class="contact-form">
          <h2>Contact Us</h2>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button>Send</button>
          </form>
        </div>
        <div class="company-info">
          <h3>Prestax Construction</h3>
          <p>123 Building Street</p>
          <p>Construction City, CC 12345</p>
          <p>Phone: (555) 123-4567</p>
          <p>Email: info@prestax.com</p>
          
          <div class="social-media">
            <h4>Connect With Us</h4>
            <div class="social-links">
              <a href="https://facebook.com/prestax" target="_blank" class="social-link">
                <i class="fab fa-facebook-f"></i>
                <span>Facebook</span>
              </a>
              <a href="https://twitter.com/prestax" target="_blank" class="social-link">
                <i class="fab fa-x-twitter"></i>
                <span>Twitter</span>
              </a>
              <a href="https://linkedin.com/company/prestax" target="_blank" class="social-link">
                <i class="fab fa-linkedin-in"></i>
                <span>LinkedIn</span>
              </a>
              <a href="https://instagram.com/prestax" target="_blank" class="social-link">
                <i class="fab fa-instagram"></i>
                <span>Instagram</span>
              </a>
              <a href="https://youtube.com/prestax" target="_blank" class="social-link">
                <i class="fab fa-youtube"></i>
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <p class="copyright">© 2021 Prestax. All rights reserved.</p>
    </div>
  </div>
</template>

<style>
.social-media {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.social-media h4 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #f2f2f2;
}

.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #f2f2f2;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
}

.social-link i {
  font-size: 1.1rem;
}

.social-link span {
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .social-links {
    justify-content: center;
  }
  
  .social-link {
    width: calc(50% - 0.5rem);
    justify-content: center;
  }
}

.banner-container {
  position: relative;
  width: 100%;
  height: 70vh;
  overflow: hidden;
  border-radius: 0 0 20px 20px;
}

.banner-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(47, 51, 55, 0.7), rgba(47, 51, 55, 0.4));
}

.banner-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 90%;
  max-width: 800px;
  z-index: 1;
}

.hero {
  font-size: 3.5rem;
  font-weight: 700;
  color: #f2f2f2;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.sub-hero {
  font-size: 1.25rem;
  color: #f2f2f2;
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

/* New Styles for sub-pages-nav */
.sub-pages-nav {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  padding: 1rem 0;
  z-index: 2;
}

.sub-pages-nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.sub-pages-nav a {
  color: #f2f2f2;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  border-bottom: 2px solid transparent;
}

.sub-pages-nav a:hover,
.sub-pages-nav a.active {
  border-bottom: 2px solid #f2f2f2;
}

/* Services Section */
.services {
  padding: 4rem 2rem;
  background: #fff;
}

.services h2 {
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.service-card {
  text-align: center;
  padding: 2rem;
  background: #f8f8f8;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-card i {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
}

/* Stats Section */
.stats {
  background-image: url("./assets/banner.jpeg");
  padding: 4rem 2rem;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  position: relative;
}

.stats::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
}

.stats-container {
  position: relative;
  display: flex;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
  color: #f2f2f2;
}

.stat-item {
  text-align: center;
}

.stat-item h3 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

/* Footer Styles */
.footer {
  background-image: url("./assets/banner.jpeg");
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  position: relative;
  padding: 4rem 2rem 2rem;
  color: #f2f2f2;
}

.footer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}

.footer-content {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-form {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 10px;
}

.contact-form form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-form input,
.contact-form textarea {
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.9);
}

.contact-form button {
  padding: 1rem;
  background: #333;
  color: #f2f2f2;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.contact-form button:hover {
  background: #444;
}

.company-info {
  padding: 2rem;
}

.copyright {
  position: relative;
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
  .banner-container {
    height: 50vh;
  }

  .hero {
    font-size: 2rem;
  }

  .sub-hero {
    font-size: 1rem;
  }

  .sub-pages-nav ul {
    gap: 1rem;
  }

  .sub-pages-nav a {
    font-size: 0.9rem;
    padding: 0.3rem 0.6rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
  }

  .stats-container {
    flex-direction: column;
    gap: 2rem;
  }
}
</style>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    },
  },
};
</script>
