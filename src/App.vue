<template>
  <div class="wrapper">
    <TheHeader/>
    <div class="wrapper-content">
      <div class="container">
        <router-view />
      </div>
    </div>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";

export default {
  components: {TheFooter, TheHeader}
}
</script>
