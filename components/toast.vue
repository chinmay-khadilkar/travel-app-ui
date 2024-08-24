<template>
  <transition mode="out-in" name="fade">
    <div
      v-if="show"
      class="absolute h-10 w-96 text-white rounded-mac top-0 right-0 mt-2 mr-2 p-2"
      :class="[`bg-${bg_color}-500`]"
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
      bg_color:
        this.toastType === "failure"
          ? "mac-red"
          : this.toastType === "success"
          ? "mac-green"
          : "mac-yellow",
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
