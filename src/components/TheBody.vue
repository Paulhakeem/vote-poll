<script setup></script>
<template>
  <section class="grid md:grid-cols-2 my-6 gap-2">
  <img class="w-full" src="../assets/vote.png"/>
  <div class="p-3">
    <h1 class=" text-3xl font-bold px-3">Make your own polling and share easily with Fast<span class="text-[#0FCB18]">Poll</span></h1>

    <div class="p-2 space-y-3 ">
    <p class="p-2">Share your polling and receive your friend polling. Its totally free and you are able to get realtime results.</p>
    <div class="grid grid-cols-2 bg-gray-300 px-2">
      <h2 class="text-2xl font-bold">Lets create your own polling app with fast poll</h2>
    <div class="p-3 space-y-2">
    <p class="p-3">Sign Up and enjoy the Fast Poll app.</p>
      <RouterLink to="/signup">
    <button class="bg-[#0FCB18] text-white rounded-xl p-3 w-full sm:w-full">Create Poll</button>
      </RouterLink>
    </div>
    </div>
    </div>
  </div>
  </section>
</template>