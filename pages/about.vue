<template>
    <div>
      <h2>About</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque repellendus possimus vero. Nesciunt esse, modi iure fuga sint rerum vitae deserunt accusantium quo, dolor iusto natus quos repellat voluptates quibusdam.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque repellendus possimus vero. Nesciunt esse, modi iure fuga sint rerum vitae deserunt accusantium quo, dolor iusto natus quos repellat voluptates quibusdam.</p>
    </div>
    <div>{{ data }}</div>
  </template>
  
  <script setup>
      const { data } = await useFetch('/api/currency/USD')
  </script>
  
  <style  scoped>
  h2 {
      margin-bottom: 20px;
      font-size: 36px;
  }
   
  p {
      margin:20px 0;
  }
  
  </style>