<template>
  <div class="flex flex-row m-auto w-1/3 h-full">
    <div
      class="border-2 rounded border-cobalt-700 w-full h-5/6 p-5 mt-5 font-mono"
      v-if="page === 1"
    >
      <div class="text-cobalt-900 text-lg">Add/ Edit Journey</div>
      <div class="flex flex-row justify-between mt-2">
        <div class="block mr-5 w-full">
          <label class="mt-2 text-cobalt-900"
            >Journey Title
            <span class="text-scarlet-900 mt-1 font-bold">*</span>
          </label>
          <input
            type="text"
            v-model="journeyForm.title"
            class="w-full mt-2 mr-5 bg-baige-100 focus:bg-baige-100 border-2 border-cobalt-700 text-cobalt-700 rounded p-2 focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
      <div class="flex flex-row justify-between mt-2">
        <div class="block mr-5 w-full">
          <label class="mt-2 text-cobalt-900"
            >Journey Description
            <span class="text-scarlet-900 mt-1 font-bold">*</span></label
          >
          <textarea
            type="textarea"
            v-model="journeyForm.description"
            class="w-full mt-2 mr-5 bg-baige-100 focus:bg-baige-100 border-2 border-cobalt-700 text-cobalt-700 rounded p-2 focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
      <div class="flex flex-row justify-between mt-2">
        <div class="block mr-2">
          <label class="mt-2 text-cobalt-900"
            >Journey Start Date
            <span class="text-scarlet-900 mt-1 font-bold">*</span></label
          >
          <input
            type="date"
            v-model="journeyForm.startDate"
            class="w-full mt-2 mr-5 bg-baige-100 focus:bg-baige-100 border-2 border-cobalt-700 text-cobalt-700 rounded p-2 focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="block mr-2">
          <label class="mt-2 text-cobalt-900"
            >Journey End Date
            <span class="text-scarlet-900 mt-1 font-bold">*</span></label
          >
          <input
            type="date"
            v-model="journeyForm.endDate"
            class="w-full mt-2 mr-5 bg-baige-100 focus:bg-baige-100 border-2 border-cobalt-700 text-cobalt-700 rounded p-2 focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
      <div class="flex flex-row justify-between mt-2">
        <div class="block mr-2">
          <label class="mt-2 text-cobalt-900"
            >Journey Duration
            <span class="text-scarlet-900 mt-1 font-bold">*</span></label
          >
          <input
            type="number"
            v-model="journeyForm.duration"
            class="w-full mt-2 mr-5 bg-baige-100 focus:bg-baige-100 border-2 border-cobalt-700 text-cobalt-700 rounded p-2 focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="block">
          <label class="mt-2 text-cobalt-900"
            >Journey Total Cost
            <span class="text-scarlet-900 mt-1 font-bold">*</span></label
          >
          <input
            type="number"
            v-model="journeyForm.cost"
            class="w-full mt-2 mr-5 bg-baige-100 focus:bg-baige-100 border-2 border-cobalt-700 text-cobalt-700 rounded p-2 focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
      <div class="flex flex-row justify-between mt-2">
        <div class="block mr-2">
          <label class="mt-2 text-cobalt-900"
            >Starting From
            <span class="text-scarlet-900 mt-1 font-bold">*</span></label
          >
          <input
            type="text"
            v-model="journeyForm.start"
            class="w-full mt-2 mr-5 bg-baige-100 focus:bg-baige-100 border-2 border-cobalt-700 text-cobalt-700 rounded p-2 focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="block">
          <label class="mt-2 text-cobalt-900"
            >Destination
            <span class="text-scarlet-900 mt-1 font-bold">*</span></label
          >
          <input
            type="text"
            v-model="journeyForm.destination"
            @blur="fetchCoords"
            class="w-full mt-2 mr-5 bg-baige-100 focus:bg-baige-100 border-2 border-cobalt-700 text-cobalt-700 rounded p-2 focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
      <div class="w-fill h-56 flex flex-row justify-netween mt-2">
        <div
          class="border-2 border-dashed rounded border-cobalt-700 w-2/3 h-56 mt-2 font-mono"
        >
          <div>
            <div class="flex justify-start align-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-full h-48 text-cobalt-700"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                />
              </svg>
            </div>
            <label class="text-cobalt-700 block text-center text-lg"
              >Upload Itenenary as (pdf/image) or</label
            >
            <input
              class="text-cobalt-700 block text-center text-lg mt-2"
              type="file"
              @change="handleFileUpload"
            />
          </div>
        </div>
        <div class="w-1/3 h-56 mt-2 flex items-end justify-end">
          <button
            @click="goToPage(2)"
            class="border border-cobalt-700 rounded w-2/3 h-10 text-cobalt-700 roundex mx-2 hover:bg-baige-300"
          >
            Add Itenanary
          </button>
        </div>
      </div>
    </div>
    <div
      class="border-2 rounded border-cobalt-700 w-full p-5 mt-5 font-mono h-5/6 max-h-full overflow-auto"
      v-if="page === 2"
    >
      <div class="text-cobalt-900 text-lg">Add Itenenary</div>
      <div class="h-5/6 max-h-full overflow-y-scroll overflow-x-hidden mt-2">
        <div v-for="(item, index) in days" :key="index">
          <div class="flex flex-row">
            <div class="w-10/12">
              <label class="mt-2 text-cobalt-900"
                >Place Number {{ index + 1 }}</label
              >
              <input
                :key="index"
                v-model="item.cityName"
                type="text"
                @change="fetchLatLong(item.cityName)"
                class="w-full mt-2 mr-5 bg-baige-100 focus:bg-baige-100 border-2 border-cobalt-700 text-cobalt-700 rounded p-2 focus:outline-none focus:shadow-outline"
              />
            </div>
            <div class="w-1/12 flex justify-end items-center mt-5">
              <button
                title="Remove Day in itenenary"
                type="button"
                @click="removePlace(index)"
                class="rounded-full w-8 h-8 bg-cobalt-700 text-white mt-1 flex justify-center items-center hover:bg-cobalt-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <button
          title="Add new Day in itenenary"
          @click="addPlaces()"
          type="button"
          class="rounded-full w-8 h-8 bg-cobalt-700 text-white mt-1 flex justify-center items-center hover:bg-cobalt-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>

      <div class="w-fill flex flex-row justify-between mt-2">
        <div class="w-1/3 mt-4 flex items-end justify-start">
          <button
            @click="goToPage(1)"
            class="border border-cobalt-700 rounded w-2/3 h-10 text-cobalt-700 roundex mx-2 hover:bg-baige-300"
          >
            Back
          </button>
        </div>
        <div class="w-1/3 mt-4 flex items-end justify-end">
          <button
            @click="addItenenary"
            class="border bg-cobalt-700 rounded w-2/3 h-10 text-white rounded mx-2 hover:bg-cobalt-900"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useTokenStore } from "~/store/token";
import { useJourneyStore } from "~/store/journey";
export default {
  data() {
    return {
      page: 1,
      journeyForm: {
        title: "",
        description: "",
        startDate: "",
        endDate: "",
        duration: "",
        cost: "",
        start: "",
        destination: "",
        isItenenaryDocument: false,
        lat: "",
        lon: "",
      },
      days: [{ cityName: "", lat: "", long: "" }],
      file: {},
      tokenStore: useTokenStore(),
      journeyStore: useJourneyStore(),
    };
  },
  computed: {
    getAuthToken() {
      return this.tokenStore.authToken;
    },
  },
  methods: {
    goToPage(pageNumber) {
      this.page = pageNumber;
    },
    addPlaces() {
      this.days.push({
        cityName: "",
        lat: "",
        lon: "",
      });
    },
    removePlace(index) {
      this.days.splice(index, 1);
    },
    async addItenenary() {
      const journey = {
        ...this.journeyForm,
        days: this.days,
      };

      const journeyResponse = await this.journeyStore.addJourney(
        this.getAuthToken,
        JSON.stringify(journey)
      );
      if (journeyResponse.message === "Success") {
        this.$router.push("/home");
      }
    },
    handleFileUpload(e) {
      this.file = e.target.files[0];
    },
    async fetchCoords() {
      const name = this.journeyForm.destination;
      const response = await $fetch(
        `https://nominatim.openstreetmap.org/search?q=${name}&format=json&limit=1`
      );
      [this.journeyForm.lat, this.journeyForm.lon] = [
        response[0].lat,
        response[0].lon,
      ];
    },

    async fetchLatLong(name) {
      const response = await $fetch(
        `https://nominatim.openstreetmap.org/search?q=${name}&format=json&limit=1`
      );
      const day = {
        cityName: name,
        lat: response[0].lat,
        long: response[0].lon,
      };
      let indx = this.days.findIndex((day) => day.cityName === name);
      this.days[indx] = day;
    },
  },
};
</script>
<style scoped>
::-webkit-scrollbar {
  width: 8px; /* Set the width of the scrollbar */
  border-radius: 50%;
  padding: 3px;
}

/* Track */
::-webkit-scrollbar-track {
  margin-left: 2px;
  background-color: #eae2b7; /* Set the background color of the track */
}

/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #33596d; /* Set the background color of the thumb/handle */
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background-color: #003049; /* Set the background color on hover */
}
</style>
