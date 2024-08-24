<template>
  <div class="relative w-full h-full flex justify-center flex-row">
    <div
      class="h-fit w-96 rounded-mac shadow-mac-window hover:shadow-2xl mt-8 border-mac border-mac-blue p-4 z-38"
    >
      <div class="h-80 w-80 ml-4">
        <!-- <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-80 w-80 text-cobalt-700 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"
          />
        </svg> -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-80 w-80 text-mac-blue mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      </div>
      <label class="mt-2 text-mac-dark-blue font-system" for="username">
        Username
      </label>
      <input
        class="w-full mt-2 mr-5 bg-mac-light-gray font-system focus:bg-mac-dark-gray border border-mac-blue text-mac-blue rounded-mac p-2 focus:outline-none focus:shadow-outline"
        id="username"
        type="text"
        v-model="username"
        placeholder="Email"
      />
      <label class="mt-4 text-mac-blue font-system" for="username">
        Password
      </label>
      <input
        class="w-full mt-2 mr-5 bg-mac-light-gray font-system focus:bg-mac-dark-gray border border-mac-blue text-mac-blue rounded-mac p-2 focus:outline-none focus:shadow-outline"
        id="username"
        v-model="password"
        type="password"
        placeholder="Password"
      />
      <div class="flex justify-between mt-5">
        <button
          @click="performSignIn"
          class="bg-mac-blue font-system rounded-mac text-white w-24 h-10 mx-2 hover:bg-mac-dark-blue"
        >
          Sign In
        </button>
        <button
          class="border border-mac font-system border-mac-blue rounded-mac w-24 h-10 text-mac-blue rounde-mac mx-2 hover:bg-dark-gray"
        >
          Sign up
        </button>
      </div>
    </div>
    <toast
      v-if="showToast"
      :message="message"
      :timeout="3000"
      @close="showToast = false"
    ></toast>
  </div>
</template>
<script setup lang="js">
import { useAuthStore } from '../store/auth';
import toast from '../components/toast.vue';
const authStore = useAuthStore();
const username = ref("");
const password = ref("");
const router = useRouter();
let showToast = ref(false);
let message = ref("");
async function performSignIn() {
  message = await authStore.login({
      email: username.value,
      password: password.value,
    }
  );

  if (message === 'Success') {
    router.push('/home');
  } else {
    showToast.value = true;
  }
}
</script>
