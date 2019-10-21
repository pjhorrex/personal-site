<template>
  <div class="skill-list">
    <h5 class="mb-1">{{ skillName }}</h5>
    <ul>
      <li v-for="(skill, key) in skillList" :key="key">{{ skill }}</li>
    </ul>
  </div>
  
</template>

<script>
export default {
  props: {
    skillName: {
      type: String,
      required: true
    },
    skillList: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
.skill-list {
  ul {
    list-style: none;
    padding-left: 0;
    display: flex;
    flex-wrap: wrap;

    li {
      margin: 0.2rem;
      padding: 0.3rem;
      background-color: #b7f0c7;
      color: darken($primary, 10%);
      border-radius: 0.25rem;
      font-weight: bold;
      font-size: 0.9em;

      &:not(:last-child) {
        &:after {
          //content: ',\00a0';
        }
      }
    }
  }
}
</style>