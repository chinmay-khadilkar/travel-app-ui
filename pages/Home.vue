<template>
  <div class="h-5/6 w-full flex justify-center items-center">
    <div class="flex h-1/3 w-2/3 p-5 items-center justify-evenly">
      <button
        class="w-56 h-20 rounded-md border-2 text-white bg-cobalt-700 text-lg font-bold hover:bg-cobalt-800"
      >
        My Journeys
      </button>
      <button
        class="w-56 h-20 rounded-md border-2 text-white bg-cobalt-700 text-lg font-bold hover:bg-cobalt-800"
        @click="addNewJourney"
      >
        Add New Journey
      </button>
      <button
        class="w-56 h-20 rounded-md border-2 text-white bg-cobalt-700 text-lg font-bold hover:bg-cobalt-800"
      >
        Explore Other Journeys
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      journeyList: [],
    };
  },
  created() {
    this.fetchAllJourneys();
  },
  methods: {
    addNewJourney() {
      this.$router.push({ path: `/add/new` });
    },
    async fetchAllJourneys() {
      const journeys = await $fetch("http://localhost:5000/api/journey");
      this.journeyList.push(...journeys.resp);
    },
  },
};
</script>
