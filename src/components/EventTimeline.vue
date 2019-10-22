<template>
<div class="container-fluid bg-light mb-3">
  <div class="container justify-content-center pt-3">
    <h3 class="p-3 mb-0 ml-auto mr-0 mr-lg-auto text-center section-headline">What I've been up to</h3>
    <div class="row bg-light d-flex flex-column">
      <div class="col-11 col-lg-6 pt-3 card-container"
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
            <hr class="mt-2 mb-3">
            <div class="row d-flex">
              <div class="card-content" :class="[ edge.node.image ? 'col-8' : 'col-12' ]" v-html="edge.node.content"></div>
              <div class="card-image col-4" v-if="edge.node.image">
                <g-image :src="edge.node.image.src" :alt="edge.node.image.alt" class="w-100" width="500" />
              </div>
            </div>
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
      return moment(date).format('MMMM, YYYY')
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
        image {
          src (width: 500),
          alt
        }
        content
      }
    }
  }
}
</static-query>

<style lang="scss">
/*
.headline-container {
  position: relative;

  &:before {
      content: "";
      position: absolute;
      left: calc(50% - 127px);
      bottom: -8px;
      height: 1px;
      width: 255px;
      border-bottom: 5px solid $primary;
  }
}
*/

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
    top: 55px;
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
    top: 56px;
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
    top: 50px;
    right: -50px;
    height: 41px;
    width: 41px;
    z-index: 100;
    border-width: 5px !important;
  }
}

@include media-breakpoint-up(lg) {
  .card-container {
    margin-top: -100px;

    &:first-child {
      margin-top: 0;
    }

    &:nth-child(odd) {
      border-right: 5px solid $primary;
      border-left: none;
      padding-right: 26px !important;
      padding-left: 0;
      margin-right: auto;
      margin-left: 3px;
    }

    &:nth-child(even) {
      border-left: 5px solid $primary;
      border-right: none;
      padding-left: 26px !important;
      padding-right: 0;
      margin-left: auto;
      margin-right: 2px;

      .card {
        &:before {
          right: auto;
          left: -21px;
          border-width: 15px 21px 15px 0;
        }

        &:after {
          right: auto;
          left: -20px;
          border-width: 14px 20px 14px 0;
        }
      }

      .type-icon {
        // position: absolute;
        // top: 10px;
        left: -50px;
        right: 0;
        // height: 41px;
        // width: 41px;
        // z-index: 100;
        // border-width: 5px !important;
      }
    }
  }
}
</style>