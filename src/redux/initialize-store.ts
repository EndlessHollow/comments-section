import { AppDispatch } from "./store";

type StoreType = "users" | "comments";

const fetchStoreData = async (store: StoreType): Promise<unknown> => {
  const result = await fetch(`/${store}.json`);
  return result.json();
};

export const initializeStore = (
  store: StoreType,
  dispatch: AppDispatch,
  reducer: any
): void => {
  fetchStoreData(store).then((rawData) => {
    dispatch(reducer(rawData));
  });
};
