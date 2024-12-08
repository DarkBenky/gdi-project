<!-- src/components/ContactSubSite.vue -->
<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <section class="contact">
        <div class="contact-header">
            <h1 class="section-title">Contact Us</h1>
            <p class="section-subtitle">Get in Touch With Our Expert Team</p>
        </div>

        <div class="contact-container">
            <div class="contact-info">
                <div class="info-card">
                    <h3>Office Location</h3>
                    <p><i class="fas fa-map-marker-alt"></i> 123 Construction Ave</p>
                    <p>Business District, City 12345</p>
                </div>

                <div class="info-card">
                    <h3>Contact Details</h3>
                    <p><i class="fas fa-phone"></i> +1 (555) 123-4567</p>
                    <p><i class="fas fa-envelope"></i> info@prestax.com</p>
                </div>

                <div class="info-card">
                    <h3>Business Hours</h3>
                    <p><i class="fas fa-clock"></i> Monday - Friday</p>
                    <p>9:00 AM - 6:00 PM</p>
                </div>

                <div class="social-links">
                    <a class="social-icon"><i class="fab fa-facebook"></i></a>
                    <a class="social-icon"><i class="fab fa-linkedin"></i></a>
                    <a class="social-icon"><i class="fab fa-instagram"></i></a>
                </div>
            </div>

            <div class="contact-form-container">
                <form class="contact-form" @submit.prevent="submitForm">
                    <div class="form-group">
                        <input type="text" v-model="form.name" placeholder="Your Name" required>
                    </div>
                    <div class="form-group">
                        <input type="email" v-model="form.email" placeholder="Your Email" required>
                    </div>
                    <div class="form-group">
                        <select v-model="form.subject">
                            <option value="">Select Subject</option>
                            <option v-for="category in categories" :key="category">{{ category }}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <textarea v-model="form.message" placeholder="Your Message" rows="5" required></textarea>
                    </div>
                    <button type="submit" class="submit-button">Send Message</button>
                </form>
            </div>

            <div class="map-container">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.2361664615414!2d-169.81912232584116!3d66.16052239546116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x574a53c3b751d151%3A0x6eb1c8d14f5bd685!2z0J_QvtGH0YLQsCDQoNC-0YHRgdC40Lg!5e1!3m2!1sen!2ssk!4v1733695942904!5m2!1sen!2ssk" 
                    width="100%" 
                    height="100%" 
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                    class="map-frame"
                ></iframe>
            </div>
        </div>
    </section>
</template>



<script>
export default {
    name: 'ContactSubSite',
    data() {
        return {
            categories: ['Construction', 'Renovation', 'Design', 'Consulting', 'Other'],
            form: {
                name: '',
                email: '',
                subject: '',
                message: ''
            }
        }
    },
    methods: {
        submitForm() {
            console.log('Form submitted:', this.form)
            // Add form submission logic
        }
    }
}
</script>

<style scoped>
.contact {
    padding: 6rem 2rem;
    background: #F2F2F2;
}

.contact-header {
    text-align: center;
    margin-bottom: 4rem;
}

.section-title {
    font-size: 2.5rem;
    color: #2F3337;
    margin-bottom: 1rem;
}

.section-subtitle {
    color: #A6A6A6;
    font-size: 1.2rem;
}

.contact-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    max-width: 1200px;
    margin: 0 auto;
}

.contact-info {
    display: grid;
    gap: 2rem;
}

.info-card {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.info-card:hover {
    transform: translateY(-5px);
}

.info-card h3 {
    color: #2F3337;
    margin-bottom: 1rem;
    font-size: 1.2rem;
}

.info-card p {
    color: #A6A6A6;
    margin: 0.5rem 0;
}

.social-links {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
}

.social-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #2F3337;
    color: #F2F2F2;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.social-icon:hover {
    background: #007FFE;
    transform: translateY(-3px);
}

.contact-form-container {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 1rem;
    border: 2px solid #F2F2F2;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #007FFE;
    box-shadow: 0 0 0 4px rgba(0,127,254,0.1);
}

.submit-button {
    width: 100%;
    padding: 1rem;
    background: #2F3337;
    color: #F2F2F2;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.submit-button:hover {
    background: #007FFE;
    transform: translateY(-2px);
}

.map-container {
    grid-column: 1 / -1;
    height: 400px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    position: relative;
}

.map-frame {
    width: 100%;
    height: 100%;
    border: none;
}

@media (max-width: 768px) {
    .contact {
        padding: 4rem 1rem;
    }

    .contact-container {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .section-title {
        font-size: 2rem;
    }

    .map-container {
        height: 300px;
    }
}
</style>