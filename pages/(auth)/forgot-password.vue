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
      <h1 class="text-3xl font-bold">Не вдається ввійти?</h1>
      <p class="text-balance text-muted-foreground">
        Укажіть електронну адресу користувача і ми надішлемо вам посилання для відновлення доступу до облікового запису.
      </p>
    </div>
    <form @submit="onSubmit">
      <div class="grid gap-4">
        <div class="grid gap-2">
          <ULabel for="email">Ел. адреса</ULabel>
          <UInput id="email" type="email" placeholder="m@example.com" required :disabled="isLoading" />
        </div>
        <UButton type="submit" class="w-full" :disabled="isLoading">
          <Icon v-if="isLoading" name="line-md:loading-twotone-loop" class="mr-2 h-4 w-4 animate-spin" />
          Надіслати посилання для входу
        </UButton>
        <div class="text-center text-sm">
          <NuxtLink to="/login">Не вдається скинути пароль?</NuxtLink>
        </div>
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
    <UButton variant="outline" class="w-full">
      <NuxtLink to="/register" variant="outline" class="w-full">Створити обліковий запис</NuxtLink>
    </UButton>
  </div>
</template>
