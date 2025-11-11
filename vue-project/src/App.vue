<template>
  <nav class="top-nav">
    <router-link to="/">Home</router-link>
    <router-link to="/testing">Testing</router-link>
    <router-link to="/test/123">Test ID 123</router-link>
  </nav>

  <router-view />
</template>

<style scoped>
.top-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 12px 16px;
  background: #f3f3f3;
  border-bottom: 1px solid #ccc;
  display: flex;
  gap: 20px;
  font-size: 18px;
  z-index: 10;
}

.top-nav a {
  text-decoration: none;
  color: #333;
  font-weight: 600;
}

.top-nav a.router-link-active {
  color: #007bff;
}
</style>
