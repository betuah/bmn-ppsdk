<template>
  <v-app>
    <v-main>
        <Nuxt />
    </v-main>
  </v-app>
</template>

<style>
  /* Works on Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(197, 156, 122, 0.521) transparent;
    -ms-overflow-style: none;
  }

  /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 5px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: rgba(139, 136, 134, 0.521);
    border-radius: 20px;
  }
</style>