<template>
    <nav class="navbar">
      <div class="logo">
        <img class="logo-image" src="../assets/Prestax-ai-no-bg.svg" alt="">
        <!-- <h1 class="Company-Name">Prestax</h1> -->
        </div>
      <div class="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div class="nav-actions">
        <button class="login-btn">Login</button>
        <select class="language-select">
          <option value="sk">Slovak</option>
          <option value="cz">Czech</option>
          <option value="en">English</option>
        </select>
      </div>
    </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-image {
  height: 4.5rem;
  width: auto;
  object-fit: contain;
}

.Company-Name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #F2F2F2;
  margin: 0;
  letter-spacing: -0.5px;
}

/* Keep existing navbar styles */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: #2F3337;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: #2F3337;
  color: #F2F2F2;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2);
}


.search-bar input {
  padding: 0.75rem 1.25rem;
  border: 2px solid transparent;
  border-radius: 8px;
  width: 300px;
  background: #F2F2F2;
  color: #2F3337;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.search-bar input:focus {
  outline: none;
  border-color: #007FFE;
  box-shadow: 0 0 0 4px rgba(0, 127, 254, 0.1);
}

.search-bar input::placeholder {
  color: #A6A6A6;
}

.nav-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.login-btn {
  background: #007FFE;
  color: #F2F2F2;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.login-btn:hover {
  background: #0066CC;
  transform: translateY(-2px);
}

.language-select {
  padding: 0.75rem 1.25rem;
  border: 2px solid transparent;
  border-radius: 8px;
  background: #F2F2F2;
  color: #2F3337;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%232F3337' viewBox='0 0 16 16'%3E%3Cpath d='M8 10l4-4H4z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 2.5rem;
}

.language-select:hover {
  background-color: #FFFFFF;
}

.language-select:focus {
  outline: none;
  border-color: #007FFE;
  background-color: #FFFFFF;
  box-shadow: 0 0 0 4px rgba(0, 127, 254, 0.1);
}

@media (max-width: 768px) {
  .navbar {
    padding: 0.75rem 1rem;
  }
  
  .search-bar input {
    width: 200px;
  }
}
</style>