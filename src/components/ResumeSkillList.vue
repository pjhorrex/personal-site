<template>
  <div class="skill-list">
    <h5>{{ skillName }}</h5>
    <ul>
      <li v-for="(skill, key) in skillList" :key="key">
        {{ skill }}
      </li>
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