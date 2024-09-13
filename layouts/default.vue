<script setup lang="ts"></script>

<template>
  <div class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
    <div class="hidden border-r bg-muted/40 md:block">
      <div class="flex h-full max-h-screen flex-col gap-2">
        <div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <a href="/" class="flex items-center gap-2 font-semibold">
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
          <UButton variant="outline" size="icon" class="ml-auto h-8 w-8">
            <Icon name="lucide:bell" class="h-4 w-4" />
            <span class="sr-only">Сповіщення</span>
          </UButton>
        </div>
        <div class="flex-1">
          <nav class="grid items-start px-2 text-sm font-medium lg:px-4">
            <a
              href="/"
              class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Icon name="lucide:home" class="h-4 w-4" />
              Головна
            </a>
            <a
              href="#"
              class="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
            >
              <Icon name="lucide:chart-no-axes-combined" class="h-4 w-4" />
              Популярні
            </a>
            <a
              href="#"
              class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Icon name="lucide:globe" class="h-5 w-5" />
              Всі
            </a>
          </nav>
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <header class="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
        <MobileMenu />
        <div class="w-full flex-1">
          <form>
            <div class="relative">
              <Icon name="lucide:search" class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <UInput
                type="search"
                placeholder="Пошук меду..."
                class="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
              />
            </div>
          </form>
        </div>
        <UDropdownMenu>
          <UDropdownMenuTrigger as-child>
            <UButton variant="secondary" size="icon" class="rounded-full">
              <Icon name="lucide:circle-user" class="h-5 w-5" />
              <span class="sr-only">Користувацьке меню</span>
            </UButton>
          </UDropdownMenuTrigger>
          <UDropdownMenuContent align="end">
            <UDropdownMenuLabel>Мій обліковий запис</UDropdownMenuLabel>
            <UDropdownMenuSeparator />
            <UDropdownMenuItem>Налаштування</UDropdownMenuItem>
            <UDropdownMenuItem>Підтримка</UDropdownMenuItem>
            <UDropdownMenuSeparator />
            <UDropdownMenuItem>Вийти</UDropdownMenuItem>
          </UDropdownMenuContent>
        </UDropdownMenu>
      </header>
      <main class="flex flex-1 flex-col gap-4 p-4 lg:gap-2 lg:p-2 px-4 lg:h-[60px] lg:px-6">
        <NuxtPage />
      </main>
    </div>
  </div>
</template>
