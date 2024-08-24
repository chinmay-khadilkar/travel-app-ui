<template>
  <transition mode="out-in" name="fade" v-if="toastType === 'failure'">
    <div
      v-if="show"
      class="absolute h-10 w-96 text-white rounded-mac top-0 right-0 mt-2 mr-2 p-2 bg-mac-red"
    >
      {{ message }}
    </div>
  </transition>
  <transition mode="out-in" name="fade" v-if="toastType === 'success'">
    <div
      v-if="show"
      class="absolute h-10 w-96 text-white rounded-mac top-0 right-0 mt-2 mr-2 p-2 bg-mac-green"
    >
      {{ message }}
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    message: {
      type: String,
    },
    toastType: {
      type: String,
      default: "failure",
    },
    timeout: {
      type: Number,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showToastMessage() {
      this.show = true;
      setTimeout(() => {
        this.show = false;
        this.$emit("close");
      }, this.timeout);
    },
  },
  mounted() {
    this.showToastMessage();
  },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
