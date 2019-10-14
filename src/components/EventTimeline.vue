<template>
<div class="container-fluid bg-light mb-3">
  <div class="container">
  <div class="row bg-light d-flex flex-column">
    <div class="col-12 col-lg-6 px-3 pt-3 card-container"
      v-for="edge in $static.events.edges" :key="edge.node.id"
    >
      <div class="card shadow">
        <div class="type-icon rounded-circle d-flex border border-primary bg-light text-primary">      
          <FontAwesomeIcon class="fa-lg fa-fw mx-auto my-auto"
            :icon="[edge.node.faprefix, edge.node.faclass]"
          />
        </div>
        <div class="card-body">
        <h5 class="card-title">{{ edge.node.title }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ formatDate(edge.node.date) }}</h6>
        <div class="card-content" v-html="edge.node.content"></div>
        </div>
      </div>
    </div>
  </div>
  </div>
</div>

</template>

<script>
import moment from 'moment'

export default {
  methods: {
    formatDate: function(date) {
      return moment(date).format('MM/DD/YYYY')
    }
  }
}
</script>

<static-query>
query Events {
  events:allEvents {
    edges {
      node {
        id
        type
        title
        date
        faprefix
        faclass
        content
      }
    }
  }
}
</static-query>

<style lang="scss" scoped>
.card-container {
  border-right: 5px solid $primary;
  padding-right: 26px !important;

  &:last-child {
    padding-bottom: 3rem;
  }
}

.card {
  position: relative;
  margin-top: 3rem;

  $left-triange-start: 2rem;

  &:before {
    content: "";
    position: absolute;
    top: 15px;
    bottom: auto;
    left: auto;
    right: -21px;
    border-width: 15px 0 15px 21px;
    border-style: solid;
    border-color: transparent $gray-300;
    display: block;
    width: 0;
  }

  &:after {
    content: "";
    position: absolute;
    top: 16px;
    bottom: auto;
    left: auto;
    right: -20px;
    border-width: 14px 0 14px 20px;
    border-style: solid;
    border-color: transparent $white;
    display: block;
    width: 0;
  }

  .type-icon {
    position: absolute;
    top: 10px;
    right: -50px;
    height: 41px;
    width: 41px;
    z-index: 100;
    border-width: 5px !important;
  }
}
</style>