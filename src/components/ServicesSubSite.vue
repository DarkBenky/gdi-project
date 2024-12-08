<!-- src/components/ServicesSubSite.vue -->
<template>
    <section class="services">
        <div class="services-header">
            <h1 class="section-title">Our Services</h1>
            <p class="section-subtitle">Professional Construction Solutions for Every Need</p>

            <div class="filter-buttons">
                <button v-for="category in categories" :key="category"
                    :class="{ active: selectedCategory === category }" @click="filterByCategory(category)">
                    {{ category }}
                </button>
            </div>
        </div>

        <div class="services-grid">
            <div class="service-item" v-for="(service, index) in filteredServices" :key="index">
                <img :src="service.image" :alt="service.title">
                <div class="service-overlay">
                    <div class="service-category">{{ service.category }}</div>
                    <h3>{{ service.title }}</h3>
                    <p>{{ service.description }}</p>
                    <ul class="service-features">
                        <li v-for="(feature, idx) in service.features" :key="idx">
                            {{ feature }}
                        </li>
                    </ul>
                    <button class="request-quote">Request Quote</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ServicesSubSite',

    data() {
        return {
            selectedCategory: 'All',
            categories: ['All', 'Construction', 'Renovation', 'Design', 'Consulting'],
            services: [
                {
                    title: 'Custom Home Building',
                    description: 'Create your dream home from ground up',
                    image: require('../assets/img1.webp'),
                    category: 'Construction',
                    features: [
                        'Architectural Design',
                        'Interior Planning',
                        'Quality Materials',
                        'Expert Craftsmanship'
                    ]
                },
                {
                    title: 'Commercial Construction',
                    description: 'Professional spaces for your business',
                    image: require('../assets/img2.jpeg'),
                    category: 'Construction',
                    features: [
                        'Project Management',
                        'Timeline Optimization',
                        'Cost Control',
                        'Safety Compliance'
                    ]
                },
                {
                    title: 'Home Renovation',
                    description: 'Transform your existing space',
                    image: require('../assets/img3.png'),
                    category: 'Renovation',
                    features: [
                        'Kitchen Remodeling',
                        'Bathroom Updates',
                        'Space Optimization',
                        'Modern Fixtures'
                    ]
                },
                {
                    title: 'Interior Design',
                    description: 'Professional interior solutions',
                    image: require('../assets/img4.jpg'),
                    category: 'Design',
                    features: [
                        'Space Planning',
                        'Color Consultation',
                        'Material Selection',
                        'Furniture Layout'
                    ]
                }
            ]
        }
    },

    computed: {
        filteredServices() {
            if (this.selectedCategory === 'All') return this.services
            return this.services.filter(service => service.category === this.selectedCategory)
        }
    },

    methods: {
        filterByCategory(category) {
            this.selectedCategory = category
        }
    }
}
</script>

<style scoped>
services {
    padding: 4rem 2rem;
    background: #fff;
}

.services h2 {
    text-align: center;
    margin-bottom: 3rem;
    color: #333;
}

.services-gridV2 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 3rem;
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


.services {
    padding: 6rem 2rem;
    background: #F2F2F2;
}

.services-header {
    text-align: center;
    margin-bottom: 4rem;
}

.section-title {
    text-align: center;
    font-size: 2.5rem;
    color: #2F3337;
    margin-bottom: 1rem;
}

.section-subtitle {
    color: #A6A6A6;
    font-size: 1.2rem;
    margin-bottom: 2rem;
}

.filter-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
}

.filter-buttons button {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 8px;
    background: #F2F2F2;
    color: #2F3337;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid #A6A6A6;
}

.filter-buttons button.active,
.filter-buttons button:hover {
    background: rgba(47, 51, 55, 0.4);
    color: #F2F2F2;
    border-color: rgba(47, 51, 55, 0.5);
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.service-item {
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    background: white;
    height: 400px;
}

.service-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.service-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 84%;
    padding: 2rem;
    background: linear-gradient(rgba(47, 51, 55, 0.4), rgba(47, 51, 55, 0.9));
    color: #F2F2F2;
    opacity: 0;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.service-item:hover .service-overlay {
    opacity: 1;
}

.service-item:hover img {
    transform: scale(1.1);
}

.service-category {
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
}

.service-features {
    list-style: none;
    padding: 0;
    margin: 1rem 0;
}

.service-features li {
    margin: 0.5rem 0;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
}

.service-features li::before {
    content: '•';
    margin-right: 0.5rem;
    color: #F2F2F2;
}

.request-quote {
    margin-top: auto;
    padding: 0.75rem 1.5rem;
    border: 2px solid #F2F2F2;
    background: transparent;
    color: #F2F2F2;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    align-self: flex-start;
}

.request-quote:hover {
    background: #F2F2F2;
    color: #2F3337;
}

@media (max-width: 768px) {
    .services {
        padding: 4rem 1rem;
    }

    .section-title {
        font-size: 2rem;
    }

    .filter-buttons {
        gap: 0.5rem;
    }

    .filter-buttons button {
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
    }

    .service-item {
        height: 350px;
    }
}
</style>