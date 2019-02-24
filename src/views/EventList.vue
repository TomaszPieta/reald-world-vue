<template>
  <div>
    <h1>Event Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <BaseIcon />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue';
import EventService from '@/services/EventService.js';

export default {
  components: {
    EventCard,
  },
  created() {
    EventService.getEvents()
    .then(response => console.log(response.data))
    .catch(error => console.log(error.response))
  }
}
</script>

