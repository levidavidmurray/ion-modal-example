<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-buttons slot="end">
					<ion-button @click="dismissModal">
						Close
						<ion-icon slot="end" name="close"></ion-icon>
					</ion-button>
				</ion-buttons>
			</ion-toolbar>
		</ion-header>
		<ion-content>
			<h3>I am a Modal!</h3>
		</ion-content>
	</ion-page>
</template>

<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
    name: "SomeModal",
    props: {
      dismissCb: {
        type: Function,
        required: true,
      },
    },
    methods: {
      dismissModal()
      {
        this.dismissCb();
      },
    },
  });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	h3 {
		margin: 40px 0 0;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>
