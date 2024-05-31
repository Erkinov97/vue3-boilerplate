import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  // state
  const user = ref(null);

  // getters
  const isAuth = computed(() => !!user.value);

  //   actions
  const login = () => {};
  const logout = () => {};
  return { isAuth, user, login, logout };
});

// In Setup Stores:
// ref()s become state properties
// computed()s become getters
// function()s become actions
