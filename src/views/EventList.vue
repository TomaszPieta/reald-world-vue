<template>
  <div>
    <h1>Event Listing</h1>
    <router-link :to="{ name: 'EventShow', params: { id: 1 } }">Show Event #1</router-link><br>
    <router-link :to="{ name: 'EventShow', params: { id: 2 } }">Show Event #2</router-link><br>
    <router-link :to="{ name: 'EventShow', params: { id: 3 } }">Show Event #3</router-link><br>
    <router-link :to="{ name: 'EventShow', params: { id: 4 } }">Show Event #4</router-link><br>
  </div>
</template>
