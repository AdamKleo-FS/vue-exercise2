<script>
export default {
  props: {
    character: Object
  }
};
</script>

<template>
  
  <v-card class="mx-auto card">
    <v-img
      class="align-end text-white character-img"
      height="200"
      :src="character.image || 'src/assets/unknown-person.jpg'"
      cover
    >
      <v-card-title class="text-shadow">
        {{ character.name }}
      </v-card-title>
    </v-img>

    <v-card-subtitle class="pt-3 character-house">
      {{ character.house || 'Unknown House' }}
    </v-card-subtitle>

    <v-card-text class="character-details">
      <div><strong>Wand:</strong> {{ character.wand.wood || 'Unknown' }} wood, {{ character.wand.core || 'Unknown' }} core</div>
      <div><strong>Patronus:</strong> {{ character.patronus || 'None' }}</div>
    </v-card-text>

  </v-card>
</template>

<style scoped>
.card {
  max-width: 200px; /* Reduced width */
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
}

.card:hover {
  transform: scale(1.02);
  box-shadow: 0px 8px 18px rgba(0, 0, 0, 0.2);
}

.character-img {
  object-fit: cover;
}

.text-shadow {
  font-family: 'Harry Potter';
  font-size: 1rem; /* Slightly smaller */
  text-align: center;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
}

.character-house {
  font-family: 'Harry Potter';
  font-size: 0.9rem;
  font-weight: bold;
  text-align: center;
  color: #ff9e02;
}

.character-details {
  font-size: 0.8rem;
  text-align: center;
  font-style: italic;
  line-height: 1.3;
}
</style>
