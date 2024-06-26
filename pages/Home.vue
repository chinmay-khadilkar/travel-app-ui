<template>
  <div class="flex justify-center items-center w-full h-full" v-if="loader">
    <div role="status">
      <svg
        aria-hidden="true"
        class="inline w-12 h-12 text-gray-200 animate-spin dark:text-cobat-600 fill-cobalt-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span class="sr-only">Loading...</span>
    </div>
  </div>
  <div v-else class="w-full h-full flex flex-row">
    <div class="h-full w-2/12 bg-cobalt-900 text-baige-400 pt-28">
      <div
        class="text-xl mb-4 p-2 rounded-full border-baige-400 border text-center mx-2 cursor-pointer"
      >
        Home
      </div>
      <div
        class="text-xl mb-4 p-2 rounded-full border-baige-400 border text-center mx-2 cursor-pointer"
        @click="navigateToAddJourney"
      >
        Add Journey
      </div>
      <div
        class="text-xl mb-4 p-2 rounded-full border-baige-400 border text-center mx-2 cursor-pointer"
        @click="logout"
      >
        Log Out
      </div>
    </div>
    <div class="h-full w-4/5 p-4">
      <div class="w-5/6 h-24 text-cobalt-900 text-3xl font-bold">Home</div>
      <div class="w-5/6 overflow-auto h-5/6 pa-4 text-cobalt-900">
        <l-map :zoom="zoom" :center="center">
          <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          ></l-tile-layer>
          <l-marker
            v-for="(journey, index) in journeyList"
            :key="index"
            :lat-lng="[journey.lat, journey.lon]"
          >
            <l-tooltip>{{ journey.destination }}</l-tooltip>
          </l-marker>
        </l-map>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "@vue/composition-api";
import { useJourneyStore } from "../store/journey";
import { useTokenStore } from "~/store/token";

export default defineComponent({
  async setup() {
    const router = useRouter();
    const journeyStore = useJourneyStore();
    const tokenStore = useTokenStore();
    const authToken = tokenStore.authToken;
    const loader = ref(true);
    const message = await journeyStore.fetchJourneyList(authToken);
    const zoom = ref(3);
    const center = ref([0, 0]);
    if (message !== "Success") {
      router.push("/");
    }
    const journeyList = journeyStore.getJourneyList;
    loader.value = message === "Failure";
    function navigateToAddJourney() {
      router.push("/add");
    }
    function logout() {
      tokenStore.setToken("");
      router.push("/");
    }
    return {
      loader,
      journeyList,
      navigateToAddJourney,
      logout,
      zoom,
      center,
    };
  },
});
</script>
<style scoped>
::-webkit-scrollbar {
  width: 8px; /* Set the width of the scrollbar */
  border-radius: 50%;
  padding: 3px;
}

/* Track */
::-webkit-scrollbar-track {
  margin-left: 10px;
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
