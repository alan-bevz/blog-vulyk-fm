<script setup lang="ts"></script>

<template>
  <div>
    <UTabs default-value="all">
      <div class="flex items-center">
        <UTabsList>
          <UTabsTrigger value="all"> Всі </UTabsTrigger>
          <UTabsTrigger value="active"> Нові </UTabsTrigger>
          <UTabsTrigger value="draft"> Популярні </UTabsTrigger>
          <UTabsTrigger value="hot"> Гарячі </UTabsTrigger>
        </UTabsList>
        <div class="ml-auto flex items-center gap-2">
          <UButton size="sm" class="h-7 gap-1">
            <Icon name="lucide:plus-circle" class="h-3.5 w-3.5" />
            <span class="sr-only sm:not-sr-only sm:whitespace-nowrap"> Додати меду </span>
          </UButton>
        </div>
      </div>
      <UTabsContent value="all"> Ласкаво просимо на головну сторінку </UTabsContent>
    </UTabs>
  </div>
</template>
