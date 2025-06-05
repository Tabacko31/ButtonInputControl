import type { CountryInfo } from "../../../shared/types/country";
import { makeAutoObservable, runInAction } from "mobx";
import { getCountryByName } from "../../../shared/api/apiService";

export class AutocompleteControlVM {
    value = "";
    suggestions: CountryInfo[] = [];
    isLoading = false;
  
    private maxSuggestions: number;
    private searchTimer: ReturnType<typeof setTimeout> | null = null;
  
    constructor(maxSuggestions: number) {
      this.maxSuggestions = maxSuggestions;
      makeAutoObservable(this);
    }
  
    setValue(val: string) {
      this.value = val;
      this.debounceFetch();
    }
  
    select(country: CountryInfo) {
      this.value = country.name;
      this.suggestions = [];
    }
  
  
    private debounceFetch() {
      if (this.searchTimer) clearTimeout(this.searchTimer);
      this.searchTimer = setTimeout(() => this.fetch(), 300);
    }
  
    private async fetch() {
      if (!this.value.trim()) {
        this.suggestions = [];
        return;
      }
      this.isLoading = true;
      try {
        const raw = await getCountryByName(this.value);
       
        const unique = Array.from(new Map(raw.map((c) => [c.name, c])).values());
        runInAction(() => {
          this.suggestions = unique.slice(0, this.maxSuggestions);
        });
      } finally {
        runInAction(() => {
          this.isLoading = false;
        });
      }
    }
  }