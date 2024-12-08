<template>
  <section class="portfolio">
    <div class="portfolio-header">
      <h1 class="section-title">Our Portfolio</h1>
      <p class="section-subtitle">Discover our latest construction projects</p>
      
      <div class="filter-buttons">
        <button 
          v-for="category in categories" 
          :key="category"
          :class="{ active: selectedCategory === category }"
          @click="filterByCategory(category)"
        >
          {{ category }}
        </button>
      </div>
    </div>

    <div class="portfolio-grid">
      <div 
        class="portfolio-item" 
        v-for="(project, index) in filteredProjects" 
        :key="index"
        @click="showProjectDetails(project)"
      >
        <img :src="project.image" :alt="project.title">
        <div class="portfolio-overlay">
          <div class="project-category">{{ project.category }}</div>
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <button class="view-details">View Details</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PortfolioSubSite',

  data() {
    return {
      selectedCategory: 'All',
      categories: ['All', 'Residential', 'Commercial', 'Industrial', 'Renovation'],
      projects: [
        {
          title: 'Modern Office Building',
          description: 'Commercial construction project in city center',
          image: require('../assets/p6.webp'),
          category: 'Commercial',
          completion: '2023',
          client: 'TechCorp Inc.'
        },
        {
          title: 'Luxury Apartments',
          description: 'High-end residential complex with modern amenities',
          image: require('../assets/p4.jpeg'),
          category: 'Residential',
          completion: '2023',
          client: 'Urban Living Ltd.'
        },
        {
          title: 'Shopping Mall',
          description: 'Multi-story retail space with underground parking',
          image: require('../assets/p3.jpeg'),
          category: 'Commercial',
          completion: '2022',
          client: 'Retail Ventures'
        },
        {
          title: 'Factory Renovation',
          description: 'Complete modernization of manufacturing facility',
          image: require('../assets/p2.jpeg'),
          category: 'Industrial',
          completion: '2023',
          client: 'Industrial Solutions'
        },
        {
          title: 'Historic Building Restoration',
          description: 'Careful restoration of 19th century architecture',
          image: require('../assets/p1.webp'),
          category: 'Renovation',
          completion: '2022',
          client: 'Heritage Trust'
        },
        {
          title: 'Eco-Friendly Housing',
          description: 'Sustainable residential development with solar power',
          image: require('../assets/banner.jpeg'),
          category: 'Residential',
          completion: '2023',
          client: 'Green Living'
        }
      ]
    }
  },

  computed: {
    filteredProjects() {
      if (this.selectedCategory === 'All') return this.projects
      return this.projects.filter(project => project.category === this.selectedCategory)
    }
  },

  methods: {
    filterByCategory(category) {
      this.selectedCategory = category
    },
    showProjectDetails(project) {
      // Implement project detail view
      console.log('Show details for:', project.title)
    }
  }
}
</script>

<style scoped>
.portfolio {
  padding: 6rem 2rem;
  background: #F2F2F2;
}

.portfolio-header {
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
  background:rgba(47, 51, 55, 0.4);
  color: #F2F2F2;
  border-color: rgba(47, 51, 55, 0.5);
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.portfolio-item {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  cursor: pointer;
  background: white;
}

.portfolio-item img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.portfolio-overlay {
  position: absolute;
  bottom: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 2rem;
  background: linear-gradient(rgba(47, 51, 55, 0.4) , rgba(47, 51, 55, 0.7));
  color: #F2F2F2;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.portfolio-item:hover .portfolio-overlay {
  bottom: 0;
}

.portfolio-item:hover img {
  transform: scale(1.1);
}

.project-category {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
}

.view-details {
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  border: 2px solid #F2F2F2;
  background: transparent;
  color: #F2F2F2;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  max-width: 300px;
  justify-content: flex-end;
}

.view-details:hover {
  background: #F2F2F2;
  color: #007FFE;
}

@media (max-width: 768px) {
  .portfolio {
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
}
</style>