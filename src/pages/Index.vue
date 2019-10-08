<template>
  <Layout>
    <AboutHeader />
    <ExampleWork />
  </Layout>
</template>

<script>
import AboutHeader from '~/components/AboutHeader.vue'
import ExampleWork from '~/components/ExampleWork.vue'

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    AboutHeader,
    ExampleWork
  }
}
</script>

<style lang="scss">
</style>
