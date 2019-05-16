import { SAVE_CATEGORY } from "./types";

export function createCategory(category) {
  return {
    type: SAVE_CATEGORY,
    payload: category
  };
}
