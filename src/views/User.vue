<template>
  <div class="user">
    <h1>Owner: {{ username }}</h1>
  </div>
</template>
<script>
export default {
  props: ["username"]
}
</script>