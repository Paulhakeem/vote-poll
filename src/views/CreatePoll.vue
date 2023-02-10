<script setup></script>
<template>
  <section class="mx-auto max-w-2xl my-12 p-3">
    <div class="text-center">
      <h1 class="text-2xl font-bold">Create a Poll</h1>
      <p class="text-gray-300">Complete the below fields to create your poll.</p>
    </div>

     <form @submit.prevent="signinUser" class=" mx-auto max-w-2xl p-3 border border-t-2 border border-t-[#0FCB18] place-items-center justify-center grid my-12" >
      <div class="space-y-2 my-2 mx-auto max-w-lg">
        <label class="block">Title</label>
        <input type="text" class=" focus:outline-none p-2 border brder-gray-400 rounded-md focus:ring-1 focus:border-0">
      </div>
    </form>
  </section>
</template>