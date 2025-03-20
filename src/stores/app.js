import { defineStore } from 'pinia'
import axios from 'axios'

export const useAppStore = defineStore('app', {
  state: () => ({
    characters: [],
    selectedHouse: '',
    loading: false
  }),
  actions: {
    async fetchCharacters(house) {
      this.loading = true
      this.selectedHouse = house
      try {
        const response = await axios.get('https://hp-api.onrender.com/api/characters/students')
        this.characters = response.data.filter(c => c.house === house)
      } catch (error) {
        console.error('API call error:', error)
      } finally {
        this.loading = false
      }
    }
  }
})
