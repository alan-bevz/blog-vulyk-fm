<script setup lang="ts">

</script>

<template>
  <USheet>
    <USheetTrigger as-child>
      <UButton variant="outline" size="icon" class="shrink-0 md:hidden">
        <Icon name="lucide:menu" class="h-5 w-5" />
        <span class="sr-only">Меню навігації</span>
      </UButton>
    </USheetTrigger>
    <USheetContent side="left" class="flex flex-col">
      <nav class="grid gap-2 text-lg font-medium">
        <a href="#" class="flex items-center gap-2 text-lg font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-6 w-6"
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
          <span class="">Vuluk.FM</span>
        </a>
        <a
          href="#"
          class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
        >
          <Icon name="lucide:home" class="h-5 w-5" />
          Головна
        </a>
        <a
          href="#"
          class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
        >
          <Icon name="lucide:chart-no-axes-combined" class="h-4 w-4" />
          Популярні
        </a>
        <a
          href="#"
          class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
        >
          <Icon name="lucide:globe" class="h-5 w-5" />
          Всі
        </a>
      </nav>
    </USheetContent>
  </USheet>
</template>