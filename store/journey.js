import { defineStore } from "pinia";
export const useJourneyStore = defineStore('journey', {
  state: () => {
    return {
      journeyList: []
    }
  },
  actions: {
    async fetchJourneyList(token) {
      const journeys = await $fetch("http://localhost:5000/api/journey", {
        method: 'GET',
        headers: {
          authorization: `Bearer ${token}`
        }
      });
      this.journeyList = journeys.resp;
      return journeys.message
    },
    async addJourney(token, journeyObject) {
      const journeyResponse = await $fetch(
        "http://localhost:5000/api/journey/store",
        {
          method: "POST",
          headers: {
            authorization: `Bearer ${token}`,
          },
          body: journeyObject,
        }
      );
      return journeyResponse;
    }
  },
  getters: {
    getJourneyList() {
      return this.journeyList;
    }
  }
})