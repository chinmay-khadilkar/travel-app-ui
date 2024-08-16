<template>
  <div
    class="h-auto w-96 p-4 absolute top-20 right-20 rounded bg-baige-300 z-[9999] shadow-2xl border-2 border-cobalt-400"
  >
    <div>
      <div class="w-full mr-5 text-cobalt-700">
        {{ journeyDetails.title }}
      </div>
    </div>
    <div class="flex flex-row justify-between">
      <div class=" ">
        <div class="w-full mr-5 text-cobalt-700">
          {{ journeyDetails.description }}
        </div>
      </div>
    </div>
    <div class="flex flex-row justify-between">
      <div class=" ">
        <div class="w-full mr-5 text-cobalt-700">
          {{ journeyDetails.startDate }}
        </div>
      </div>
      <div class=" ">
        <div class="w-full mr-5 text-cobalt-700">
          {{ journeyDetails.endDate }}
        </div>
      </div>
    </div>
    <div class="flex flex-row justify-between">
      <div class=" ">
        <div class="w-full mr-5 text-cobalt-700">
          {{ journeyDetails.duration }}
        </div>
      </div>
      <div class="">
        <div class="w-full mr-5 text-cobalt-700">
          {{ journeyDetails.cost }}
        </div>
      </div>
    </div>
    <div class="flex flex-row justify-between">
      <div class=" ">
        <div class="w-full mr-5 text-cobalt-700">
          {{ journeyDetails.start }}
        </div>
      </div>
      <div class="block">
        <div class="w-full mr-5 text-cobalt-700">
          {{ journeyDetails.destination }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    journeyDetails: Object,
  },
};
</script>
