<script setup></script>
<template>
    <header class="flex itmes-center justify-between p-3 shadow-lg">
    <h1 class="text-xl">Fast 
      <span class="text-[#0FCB18]">Poll</span>
    </h1>
      <RouterLink to="/login">
    <button class="bg-[#0FCB18] p-2 rounded-md text-white">Create Poll</button>
      </RouterLink>
    <div class="flex items-center justify-evenly space-x-3">
      <button class="text-red-500">Public Poll</button>
      <div class="space-x-2 border-l border-gray-300 px-3">
        <RouterLink to="/login">
      <button class="text-gray-700">login</button>
        </RouterLink>
        <RouterLink to="/signup">
      <button class="bg-[#1385D2] text-white p-2 rounded-md">Signup</button>
        </RouterLink>
      </div>
    </div>
  </header>
</template>