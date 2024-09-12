<script setup lang="ts">
const isLoading = ref(false);

async function onSubmit(event: Event) {
  event.preventDefault();
  isLoading.value = true;

  setTimeout(() => {
    isLoading.value = false;
  }, 3000);
}

definePageMeta({ layout: 'auth' });
</script>

<template>
  <div class="mx-auto grid w-[350px] gap-6">
    <div class="grid gap-2 text-center">
      <h1 class="text-3xl font-bold">Реєстрація</h1>
      <p class="text-balance text-muted-foreground">Введіть свої дані для створення облікового запису</p>
    </div>
    <form @submit="onSubmit">
      <div class="grid gap-4">
        <div class="grid grid-cols-2 gap-4">
          <div class="grid gap-2">
            <ULabel for="first-name">Ім'я</ULabel>
            <UInput id="first-name" placeholder="Max" required :disabled="isLoading" />
          </div>
          <div class="grid gap-2">
            <ULabel for="last-name">Прізвище</ULabel>
            <UInput id="last-name" placeholder="Robinson" required :disabled="isLoading" />
          </div>
        </div>
        <div class="grid gap-2">
          <ULabel for="email">Ел. адреса</ULabel>
          <UInput id="email" type="email" placeholder="m@example.com" required :disabled="isLoading" />
        </div>
        <div class="grid gap-2">
          <ULabel for="password">Пароль</ULabel>
          <UInput id="password" type="password" :disabled="isLoading" />
        </div>
        <UButton type="submit" class="w-full" :disabled="isLoading">
          <Icon v-if="isLoading" name="line-md:loading-twotone-loop" class="mr-2 h-4 w-4 animate-spin" />
          Створіть обліковий запис
        </UButton>
      </div>
    </form>
    <div class="relative">
      <div class="absolute inset-0 flex items-center">
        <span class="w-full border-t" />
      </div>
      <div class="relative flex justify-center text-xs uppercase">
        <span class="bg-background px-2 text-muted-foreground"> або </span>
      </div>
    </div>
    <UButton variant="outline" class="w-full" :disabled="isLoading">
      <Icon v-if="isLoading" name="line-md:loading-twotone-loop" class="mr-2 h-4 w-4 animate-spin" />
      Увійти за допомогою Google
    </UButton>
    <div class="mt-4 text-center text-sm">
      У вас є обліковий запис?
      <NuxtLink to="/login" class="underline">Увійдіть</NuxtLink>
    </div>
  </div>
</template>
