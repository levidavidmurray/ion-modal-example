<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Some Page</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <h3>I present a modal!</h3>
      <ion-button @click="createModal">Present Modal</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import Vue from 'vue';
import SomeModal from '@/components/SomeModal.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'home',

  data()
  {
    return {
      ionModal: null as HTMLIonModalElement,
    }
  },

  methods: {
    createModal()
    {
      return this.$ionic.modalController
          .create({
            component: SomeModal,
            showBackdrop: true,
            componentProps: {
              propsData: {
                dismissCb: this.dismissModal,
              }
            }
          })
          .then((modal) => {
            this.ionModal = modal;
            this.ionModal.present();
          })
    },

    dismissModal()
    {
      if (this.ionModal)
      {
        this.ionModal.dismiss()
            .then(() => {
              this.ionModal = null;
            })
      }
    }
  }
});
</script>
