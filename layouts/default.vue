<script setup lang="ts">
</script>

<template>
  <div>
    <header>
      <h1>Vulyk FM</h1>
      <nav>
        <NuxtLink to="/">Головна</NuxtLink>
        <NuxtLink to="/auth/login">Авторизація</NuxtLink>
        <NuxtLink to="/auth/register">Реєстрація</NuxtLink>
      </nav>
    </header>
    <main>
      <NuxtPage />
    </main>
    <footer>
      <p>&copy; 2024 Vulyk FM</p>
    </footer>
  </div>
</template>
