<template>
  <div class="flex flex-row m-auto w-1/3 h-auto">
    <div
      class="border-mac border rounded-mac border-mac-blue w-full h-5/6 p-5 mt-5 font-mono"
      v-if="page === 1"
    >
      <div class="text-mac-blue text-lg">Add Journey</div>
      <div class="flex flex-row justify-between mt-2">
        <div class="block mr-5 w-full">
          <label class="mt-2 text-mac-blue"
            >Journey Title
            <span class="text-mac-red mt-1 font-system">*</span>
          </label>
          <input
            type="text"
            v-model="journeyForm.title"
            class="w-full mt-2 mr-5 bg-mac-light-gray font-system focus:bg-mac-dark-gray border border-mac-blue text-mac-blue rounded-mac p-2 focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
      <div class="flex flex-row justify-between mt-2">
        <div class="block mr-5 w-full">
          <label class="mt-2 text-mac-blue"
            >Journey Description
            <span class="text-mac-red mt-1 font-system">*</span></label
          >
          <textarea
            type="textarea"
            v-model="journeyForm.description"
            class="w-full mt-2 mr-5 bg-mac-light-gray font-system focus:bg-mac-dark-gray border border-mac-blue text-mac-blue rounded-mac p-2 focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
      <div class="flex flex-row justify-between mt-2">
        <div class="block mr-2">
          <label class="mt-2 text-mac-blue"
            >Journey Start Date
            <span class="text-mac-red mt-1 font-system">*</span></label
          >
          <input
            type="date"
            v-model="journeyForm.startDate"
            class="w-full mt-2 mr-5 bg-mac-light-gray font-system focus:bg-mac-dark-gray border border-mac-blue text-mac-blue rounded-mac p-2 focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="block mr-2">
          <label class="mt-2 text-mac-blue"
            >Journey End Date
            <span class="text-mac-red mt-1 font-system">*</span></label
          >
          <input
            type="date"
            v-model="journeyForm.endDate"
            class="w-full mt-2 mr-5 bg-mac-light-gray font-system focus:bg-mac-dark-gray border border-mac-blue text-mac-blue rounded-mac p-2 focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
      <div class="flex flex-row justify-between mt-2">
        <div class="block">
          <label class="mt-2 text-mac-blue"
            >Journey Total Cost
            <span class="text-mac-red mt-1 font-system">*</span></label
          >
          <input
            type="number"
            v-model="journeyForm.cost"
            class="w-full mt-2 mr-5 bg-mac-light-gray font-system focus:bg-mac-dark-gray border border-mac-blue text-mac-blue rounded-mac p-2 focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
      <div class="flex flex-row justify-between mt-2">
        <div class="block mr-2">
          <label class="mt-2 text-mac-blue"
            >Starting From
            <span class="text-mac-red mt-1 font-system">*</span></label
          >
          <input
            type="text"
            v-model="journeyForm.start"
            class="w-full mt-2 mr-5 bg-mac-light-gray font-system focus:bg-mac-dark-gray border border-mac-blue text-mac-blue rounded-mac p-2 focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="block">
          <label class="mt-2 text-mac-blue"
            >Destination
            <span class="text-mac-red mt-1 font-system">*</span></label
          >
          <input
            type="text"
            v-model="journeyForm.destination"
            @blur="fetchCoords"
            class="w-full mt-2 mr-5 bg-mac-light-gray font-system focus:bg-mac-dark-gray border border-mac-blue text-mac-blue rounded-mac p-2 focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
      <div class="w-fill h-28 flex flex-row justify-end mt-2">
        <div class="w-1/3 h-28 mt-2 flex items-end justify-end">
          <button
            @click="goToPage(2)"
            class="border border-mac-blue rounded w-2/3 h-10 text-mac-blue roundex mx-2 hover:bg-mac-light-gray"
          >
            Add Itenanary
          </button>
        </div>
      </div>
    </div>
    <div
      class="border-2 rounded border-mac-blue w-full p-5 mt-5 font-mono h-5/6 max-h-full overflow-auto"
      v-if="page === 2"
    >
      <div class="text-mac-blue text-lg">Add Itenenary</div>
      <div class="h-5/6 max-h-full overflow-y-scroll overflow-x-hidden mt-2">
        <div v-for="(item, index) in days" :key="index">
          <div class="flex flex-row">
            <div class="w-10/12">
              <label class="mt-2 text-mac-blue"
                >Place Number {{ index + 1 }}</label
              >
              <input
                :key="index"
                v-model="item.cityName"
                type="text"
                @change="fetchLatLong(item.cityName)"
                class="w-full mt-2 mr-5 bg-mac-light-gray font-system focus:bg-mac-dark-gray border border-mac-blue text-mac-blue rounded-mac p-2 focus:outline-none focus:shadow-outline"
              />
            </div>
            <div class="w-1/12 flex justify-end items-center mt-5">
              <button
                title="Remove Day in itenenary"
                type="button"
                @click="removePlace(index)"
                class="rounded-full w-8 h-8 bg-mac-blue text-white mt-1 flex justify-center items-center hover:bg-mac-blue"
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
          class="rounded-full w-8 h-8 bg-mac-blue text-white mt-1 flex justify-center items-center hover:bg-mac-blue"
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
            class="border border-mac-blue rounded w-2/3 h-10 text-mac-blue roundex mx-2 hover:bg-mac-light-gray"
          >
            Back
          </button>
        </div>
        <div class="w-1/3 mt-4 flex items-end justify-end">
          <button
            @click="addItenenary"
            class="border bg-mac-blue rounded w-2/3 h-10 text-white rounded mx-2 hover:bg-mac-blue"
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
import { useAuthStore } from "~/store/auth";
export default {
  created() {
    const isLoggedIn = this.authStore.isAuthenticated;
    if (!isLoggedIn) {
      this.$router.push("/");
    }
  },
  data() {
    return {
      page: 1,
      journeyForm: {
        title: "",
        description: "",
        startDate: "",
        endDate: "",
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
      authStore: useAuthStore(),
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
      const isLoggedIn = this.authStore.isAuthenticated;
      if (isLoggedIn) {
        if (journeyResponse.message === "Success") {
          this.$router.push("/home");
        }
      } else {
        this.$router.push("/");
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

::-webkit-scrollbar-track {
  margin-left: 2px;
  background-color: #e5e5e5; /* Set the background color of the track */
}

/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #007aff; /* Set the background color of the thumb/handle */
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background-color: #1d4ed8; /* Set the background color on hover */
}
</style>
