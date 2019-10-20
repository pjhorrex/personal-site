<template>
  <Layout>
    <AboutHeader />
    <ExampleWork />
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