<template>
    <div class="example-details p-3">
        <button class="close text-light" type="button" @click="$emit('example-clicked', {id: ''})">
            <FontAwesomeIcon :icon="['fas', 'times-circle']" />
        </button>
        <div class="container my-5" v-if="node != null">
          <h3 class="text-light mt-3">{{ node.alt }}</h3>
          <div class="row">
            <div class="col-12">
                <ul class="framework-list list-inline">
                    <li class="list-inline-item">Built with:&nbsp;</li>
                    <li class="list-inline-item" v-for="framework of node.frameworks" :key="framework.name">
                        <a :href="framework.url" class="badge badge-light" target="_blank">
                            <FontAwesomeIcon
                                v-if="framework.fa != ''"
                                :icon="['fab', framework.fa]"
                            />
                            <span class="custom-brand-icon">
                                <JekyllSVG class="svg-inline--fa"
                                    v-if="framework.fa == '' && framework.name == 'Jekyll'"
                                />
                            </span>
                            {{ framework.name }}
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col-lg-10">
                <div v-html="node.content"></div>
                <ul class="framework-list list-inline">
                    <li v-if="node.github != ''" class="list-inline-item">
                        <a :href="node.github" class="badge badge-light" target="_blank"><FontAwesomeIcon :icon="['fab', 'github']"/> Github</a>
                    </li>
                </ul>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import JekyllSVG from '~/img/jekyll.svg'
export default {
    data: function() {
        return {}
    },
    components: {
        JekyllSVG
    },
    props: {
        node: {
            required: false
        }
    }
}
</script>

<style lang="scss">
  .example-details {
      background-color: $dark;
      min-height: 200px;
      color: $light;
  }

  .framework-list {
      a {
          font-size: 1em;
      }
  }
</style>
