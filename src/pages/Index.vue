<template>
  <Layout>
    <div class="about-background">
      <AboutHeader />
      <ExampleWork />
    </div>
    <EventTimeline />
  </Layout>
</template>

<script>
import AboutHeader from '~/components/AboutHeader.vue'
import ExampleWork from '~/components/ExampleWork.vue'
import EventTimeline from '~/components/EventTimeline.vue'

export default {
  metaInfo: {
    title: 'Phil Horrex'
  },
  components: {
    AboutHeader,
    ExampleWork,
    EventTimeline
  }
}
</script>

<style lang="scss">
  .about-background {
    background-image: url("/assets/img/philadelphia.jpg");
    background-repeat:no-repeat;
    background-position: center top;
  }
</style>