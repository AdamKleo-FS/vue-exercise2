<template>
  <transition name="fade" mode="out-in">
    <v-container class="fill-height">
      <v-responsive class="align-center fill-height mx-auto" max-width="700">
        <v-img class="mb-4" height="250" src="@/assets/hogwarts-repo.png" />

        <div class="py-3" />
        <v-row>
          <v-col cols="12" sm="6" md="3">
            <v-img src="@/assets/gryffindor.png" height="200" class="mb-4 house-img" alt="Gryffindor"
              @click="fetchCharacters('Gryffindor')" />
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-img src="@/assets/ravenclaw.png" height="200" class="mb-4 house-img" alt="Ravenclaw"
              @click="fetchCharacters('Ravenclaw')" />
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-img src="@/assets/hufflepuff.png" height="200" class="mb-4 house-img" alt="Hufflepuff"
              @click="fetchCharacters('Hufflepuff')" />
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-img src="@/assets/slytherin.png" height="200" class="mb-4 house-img" alt="Slytherin"
              @click="fetchCharacters('Slytherin')" />
          </v-col>
        </v-row>
        <div class="py-5" />

        <div v-if="store.selectedHouse">
          <h2 class="text-center hp-font">Students of {{ store.selectedHouse }}</h2>
        </div>
        <div class="py-3" />

        <v-row v-if="store.characters.length">
          <v-col v-for="character in store.characters" :key="character.name" cols="12" sm="6" md="4">
            <CharacterCard :character="character" />
          </v-col>
        </v-row>

        <v-alert v-else-if="!store.loading && store.selectedHouse && store.characters.length === 0" type="warning" class="mt-5">
          No students found for {{ store.selectedHouse }}.
        </v-alert>
      </v-responsive>
    </v-container>
  </transition>
</template>

<script>
import { useAppStore } from '@/stores/app'
import CharacterCard from '@/components/CharacterCard.vue'

export default {
  components: { CharacterCard },
  setup() {
    const store = useAppStore()

    const fetchCharacters = (house) => {
      store.fetchCharacters(house)
    }

    return {
      store,
      fetchCharacters
    }
  }
}
</script>

<style scoped>
.hp-font {
  font-family: 'Harry Potter';
  font-size: 1.5rem;
  text-shadow: 2px 2px 5px rgb(0, 0, 0);
}

.house-img {
  cursor: pointer;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.house-img:hover {
  transform: scale(1.05);
  filter: brightness(1.2);
}
</style>
