<template>
  <div
    class="h-auto w-96 p-4 absolute top-20 right-20 rounded-mac bg-mac-light-gray z-[9999] shadow-mac-window border-mac border-mac-blue"
  >
    <div>
      <div class="w-full mr-5 text-mac-blue font-system">
        {{ journeyDetails.title }}
      </div>
    </div>
    <div class="flex flex-row justify-between">
      <div class=" ">
        <div class="w-full mr-5 text-mac-blue font-system">
          {{ journeyDetails.description }}
        </div>
      </div>
    </div>
    <div class="flex flex-row justify-between">
      <div class=" ">
        <div class="w-full mr-5 text-mac-blue font-system">
          {{ journeyDetails.startDate }}
        </div>
      </div>
      <div class=" ">
        <div class="w-full mr-5 text-mac-blue font-system">
          {{ journeyDetails.endDate }}
        </div>
      </div>
    </div>
    <div class="flex flex-row justify-between">
      <div class=" ">
        <div class="w-full mr-5 text-mac-blue font-system">
          {{ journeyDetails.duration }}
        </div>
      </div>
      <div class="">
        <div class="w-full mr-5 text-mac-blue font-system">
          {{ journeyDetails.cost }}
        </div>
      </div>
    </div>
    <div class="flex flex-row justify-between">
      <div class=" ">
        <div class="w-full mr-5 text-mac-blue font-system">
          {{ journeyDetails.start }}
        </div>
      </div>
      <div class="block">
        <div class="w-full mr-5 text-mac-blue font-system">
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
