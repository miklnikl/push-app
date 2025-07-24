import { Store } from "@tanstack/react-store";

export type AppState = {
  pushupCount: number
  isSubmitted: boolean
}

export const store = new Store({
  pushupCount: 0,
  isSubmitted: false,
})