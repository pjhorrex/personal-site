<template>
  <Layout>
    <div class="container-fluid bg-light mb-3">
      <div class="container resume-content"
        v-for="edge in $static.resume.edges" :key="edge.node.id"
      >
        <div class="row">
          <div class="col-12 col-lg-3 py-3 resume-skills">
            <div class="row">
              <g-image class="resume-image rounded-circle mx-auto mt-3" alt="Phil Horrex" src="~/img/phil.jpg" width="140" />
            </div>
            <ul>
              <li>{{ edge.node.name }}</li>
              <li>{{ edge.node.email }}</li>
              <li>{{ edge.node.phone }}</li>
              <li>
                {{ edge.node.location.city }},
                {{ edge.node.location.state }}
              </li>
            </ul>

            <SkillList :skillName="'Languages'" :skillList="edge.node.languages"/>
            <SkillList :skillName="'Frameworks'" :skillList="edge.node.frameworks"/>
            <SkillList :skillName="'Environments'" :skillList="edge.node.environments"/>
            <SkillList :skillName="'Tooling'" :skillList="edge.node.tooling"/>
            <SkillList :skillName="'Database'" :skillList="edge.node.database"/>
            <SkillList :skillName="'Software'" :skillList="edge.node.software"/>
          </div>
          <div class="col-12 col-lg-9 py-3 resume-text"
            v-html="edge.node.content"
          >
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import SkillList from '~/components/ResumeSkillList'
export default {
  components: {
    SkillList
  }
}
</script>

<static-query>
query Resume {
  resume: allResume {
    edges {
      node {
        id,
        name,
        email,
        phone,
        location {
          street,
          city,
          state,
          zip
        },
        languages,
        frameworks,
        environments,
        tooling,
        database,
        software,
        education,
        content
      }
    }
  }
}
</static-query>

export default {
  metaInfo: {
    title: 'Resume'
  }
}

<style lang="scss">
.resume-content {
  h2 {
    font-size: 2rem;
    padding: 0.5rem;
    color: $light;
    background-color: $primary;
    border-radius: 0.5rem;
    margin-top: 3rem;

    &:first-child {
      margin-top: 1rem;
    }
  }

  h3 {
    margin-bottom: 0.1rem;
  }

  h4 {
    font-style: italic;
    font-size: 1em;
    color: $gray-700;
  }
}

.resume-skills {
  border-right: 1px dotted lighten($primary, 10%);
}

.resume-image {
  border: 0.2rem solid $primary;
  padding: 0.1rem;
}
</style>