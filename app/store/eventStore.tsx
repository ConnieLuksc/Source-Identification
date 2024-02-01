import { create } from "zustand";

// Define the type for your store's state
interface EventStoreState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

// Create the store
const useEventStore = create<EventStoreState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),
}));

export default useEventStore;
