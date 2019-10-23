<template>
<div class="example-work">
  <h3 class="p-3 mb-0 mx-auto text-center section-headline">What I've been working on</h3>
	<div class="exmple-work-container container-fluid d-flex">
		<div class="row py-md-5 py-5 mx-auto justify-content-center">
			<div class="col-md-3 col-9 py-1 px-3"
        v-for="edge in $static.examples.edges" :key="edge.node.id"
      >
				<g-image class="w-100 shadow-lg rounded grow"
          :src="edge.node.img"
          :alt="edge.node.alt"
        />
			</div>
		</div>
	</div>
</div>
</template>

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
      }
    }
  }
}

</static-query>

<style lang="scss">
$background-color: #91d5b0;
.example-work {
  background-color: rgba($primary, 0.8);

  h3.section-headline {
    background-color: rgba($primary, 0);
    border-color: rgba($primary, 0);
  }
}

.exmple-work-container {
  background-color: rgba($background-color, 0.6);

	.row {
    max-width: 87rem;;
	}

  .grow {
    transition: all .1s ease-in-out;

    &:hover {
      transform: scale(1.05);
      filter: none;
      cursor: pointer;
    }
  }
}

</style>