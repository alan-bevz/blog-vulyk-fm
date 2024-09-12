<script setup lang="ts"></script>

<template>
  <div
    class="container relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0"
  >
    <div class="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
      <div class="absolute inset-0 bg-zinc-900" />
      <div class="relative z-20 flex items-center text-lg font-medium">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="mr-2 h-6 w-6"
        >
          <!-- Голова бджоли -->
          <circle cx="12" cy="7" r="2" />
          <!-- Тіло бджоли -->
          <ellipse cx="12" cy="14" rx="4" ry="5" />
          <!-- Смуги на тілі -->
          <line x1="8" y1="14" x2="16" y2="14" />
          <line x1="8" y1="16" x2="16" y2="16" />
          <!-- Крила бджоли -->
          <ellipse cx="9" cy="9" rx="3" ry="1.5" />
          <ellipse cx="15" cy="9" rx="3" ry="1.5" />
        </svg>
        Vuluk.FM
      </div>
      <div class="relative z-20 mt-auto">
        <blockquote class="space-y-2">
          <p class="text-lg">&ldquo;Мова – це дзеркало душі.&rdquo;</p>
          <footer class="text-sm">Сократ</footer>
        </blockquote>
      </div>
    </div>
    <div class="flex items-center justify-center py-12">
      <NuxtPage />
    </div>
  </div>
</template>
