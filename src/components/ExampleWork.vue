<template>
	<div class="exmple-work-container container-fluid d-flex mb-3">
		<div class="row py-md-5 py-5 mx-auto justify-content-center">
			<div class="col-md-3 col-9 py-1 px-3">
				<g-image class="w-100 shadow-lg rounded grow"
          src="~/img/examples/main-line-dance-company-studio-website.png"
          alt="Example image"
          width="672" />
			</div>
			<div class="col-md-3 col-9 py-1 px-3">
				<g-image class="w-100 shadow-lg rounded grow"
          src="~/img/examples/wins-pool-tracker-website.png"
          alt="Example image"
          width="672" />
			</div>
			<div class="col-md-3 col-9 py-1 px-3">
				<g-image class="w-100 shadow-lg rounded grow"
          src="~/img/examples/fantasy-football-website.png"
          alt="Example image"
          width="672" />
			</div>
			<div class="col-md-3 col-9 py-1 px-3">
				<g-image class="w-100 shadow-lg rounded grow"
          src="~/img/examples/main-line-dance-company-show-website.png"
          alt="Example image"
          width="672" />
			</div>
		</div>
	</div>
</template>

<style lang="scss">
$background-color: #91d5b0;
.exmple-work-container {
	background-color: $background-color;

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