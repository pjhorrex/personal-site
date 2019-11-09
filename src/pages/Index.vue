<template>
  <Layout>
    <div class="about-background">
      <AboutHeader />
      <ExampleWork
        @example-clicked="onExampleClicked"
        :activeExampleProp="activeExample"
      />
    </div>
    <ExampleDetails
      v-if="activeExample != ''"
      @example-clicked="onExampleClicked"
      :node="activeNode"
      :key="1"
    />
    <EventTimeline />
  </Layout>
</template>

<script>
import AboutHeader from '~/components/AboutHeader';
import ExampleWork from '~/components/ExampleWork';
import ExampleDetails from '~/components/ExampleDetails';
import EventTimeline from '~/components/EventTimeline';

export default {
  metaInfo: {
    title: 'Phil Horrex'
  },
  components: {
    AboutHeader,
    ExampleWork,
    EventTimeline,
    ExampleDetails
  },
  data: function() {
    return {
      activeExample: '',
      activeNode: null
    }
  },
  methods: {
    onExampleClicked: function(value) {
      this.activeExample = value.id;
      this.activeNode = value;
    }
  }
}
</script>

<style lang="scss">
  .about-background {
    background-image: url("~@/img/philadelphia.jpg");
    background-repeat:no-repeat;
    background-position: center top;
  }
</style>