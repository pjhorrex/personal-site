<template>
<div class="example-work">
  <h3 class="p-3 mb-0 mx-auto text-center section-headline">What I've been working on</h3>
	<div class="exmple-work-container container-fluid d-flex">
		<div class="row py-3 mx-auto justify-content-center">
			<div class="col-md-3 col-6 p-3"
        v-for="edge in $static.examples.edges" :key="edge.node.id"
        @click="$emit('example-clicked', edge.node)"
        :class="{'active-example': (activeExampleProp === edge.node.id)}"
      >
				<g-image class="w-100 rounded grow"
          :src="edge.node.img"
          :alt="edge.node.alt"
        />
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
  data: function() {
    return {
      active: ''
    }
  },
  props: {
    activeExampleProp: {
      default: "",
      required: false,
      type: String
    }
  }
}
</script>

<static-query>
query Examples {
  examples: allExamples(sortBy: "order", order: ASC) {
    edges {
      node {
        id
        img (width: 672)
        alt
        order
        content
        frameworks {
          name
          fa
          url
        }
        github
        demo
      }
    }
  }
}

</static-query>

<style lang="scss">
$background-color: #91d5b0;

@mixin selected {
  transform: scale(1.05);
}

.example-work {
  background-color: rgba($primary, 0.8);

  h3.section-headline {
    background-color: rgba($primary, 0);
    border-color: rgba($primary, 0);
  }

  img {
      border: rgba($background-color, 0.0) 6px solid;
      padding: 0;
  }

  .active-example {
    img {
      padding: 3px;
      border-color: $light;
      border-width: 3px;
      @include selected;
    }
  }
}

.exmple-work-container {
  background-color: rgba($background-color, 0.6);

	.row {
    max-width: 87rem;
	}

  .grow {
    transition: all .1s ease-in-out;

    &:not(.active-example):hover {
      @include selected;
      cursor: pointer;
    }
  }
}

</style>