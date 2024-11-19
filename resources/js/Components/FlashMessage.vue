<template>
  <div
    v-if="visible"
    class="fixed bottom-5 right-5 bg-gray-800 text-[#f8a200] p-4 rounded-lg shadow-lg z-50"
    style="pointer-events: none;"
    role="alert"
  >
    <div class="flex justify-between items-center">
      <span class="mr-4">{{ flashMessage }}</span>
      <button
        class="text-white hover:text-gray-300 focus:outline-none"
        @click="close"
        aria-label="Close"
        style="pointer-events: auto;"
      >
        &times;
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flashMessage: null,
      visible: false,
    };
  },
  watch: {
   
    '$page.props.flash.message': {
      handler(newMessage) {
        if (newMessage) {
          this.flashMessage = newMessage;
          this.visible = true;
          this.startTimer();
        }
      },
      immediate: true, 
    },
  },
  methods: {
    startTimer() {
      setTimeout(() => {
        this.visible = false;
      }, 5000); 
    },
    close() {
      this.visible = false;
    },
  },
};
</script>

<style>

.alert {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
</style>
