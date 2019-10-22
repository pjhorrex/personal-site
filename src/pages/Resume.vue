<template>
  <Layout>
    <div class="container-fluid bg-light mb-3">
      <div class="container resume-content"
        v-for="edge in $static.resume.edges" :key="edge.node.id"
      >
        <div class="row">
          <div class="col-12 col-lg-3 py-3 resume-skills">
            <div class="row">
              <div class="col-12 col-md-4 col-sm-6 col-lg-12 p-3">
                <h3 class="w-100 text-center">{{ edge.node.name }}</h3>
                <g-image class="resume-image d-flex mx-auto rounded-circle mt-2" alt="Phil Horrex" src="~/img/phil.jpg" width="140" />
              </div>
              <div class="col-12 col-md-8 col-sm-6 col-lg-12 my-auto personal-details ">
                <ul>
                  <h5 class="mb-1">Contact</h5>
                  <li>
                    <FontAwesomeIcon class="fa-fw text-primary mr-1" :icon="['fas', 'envelope']"/>
                    <span class="ml-1"><a :href="`mailto:${ edge.node.email }`">{{ edge.node.email }}</a></span>
                  </li>
                  <li>
                    <FontAwesomeIcon class="fa-fw text-primary mr-1" :icon="['fas', 'phone']"/>
                    <span class="ml-1">{{ edge.node.phone }}</span>
                  </li>
                  <li>
                    <FontAwesomeIcon class="fa-fw text-primary mr-1" :icon="['fas', 'home']"/>
                    <span class="ml-1">{{ edge.node.location.city }}, {{ edge.node.location.state }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="row">
              <div class="col-12 col-sm-4 col-lg-12 mb-1">
                <SkillList :skillName="'Languages'" :skillList="edge.node.languages"/>
              </div>
              <div class="col-12 col-sm-4 col-lg-12 mb-1">
                <SkillList :skillName="'Frameworks'" :skillList="edge.node.frameworks"/>
              </div>
              <div class="col-12 col-sm-4 col-lg-12 mb-1">
                <SkillList :skillName="'Environments'" :skillList="edge.node.environments"/>
              </div>
              <div class="col-12 col-sm-4 col-lg-12 mb-1">
                <SkillList :skillName="'Tooling'" :skillList="edge.node.tooling"/>
              </div>
              <div class="col-12 col-sm-4 col-lg-12 mb-1">
                <SkillList :skillName="'Database'" :skillList="edge.node.database"/>
              </div>
              <div class="col-12 col-sm-4 col-lg-12 mb-1">
                <SkillList :skillName="'Software'" :skillList="edge.node.software"/>
              </div>
            </div>

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
  metaInfo: {
    title: 'Resume'
  },
  components: {
    SkillList,

  }
}
</script>

<static-query>
query Resume {
  resume: allResume {
    edges {
      node {
        id
        name
        email
        phone
        location {
          street
          city
          state
          zip
        }
        languages
        frameworks
        environments
        tooling
        database
        software
        education
        content
      }
    }
  }
}
</static-query>

<style lang="scss">
.personal-details {
  ul {
    list-style: none;
    padding-left: 0;
  }

  a {
    text-decoration: underline;
  }
}

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
    color: darken($primary, 15%);
  }
}

.resume-skills {
  $border-style: 1px dotted lighten($primary, 10%);

  border-right: 0;
  border-bottom: $border-style;

  @include media-breakpoint-up(lg) {
    border-right: $border-style;
    border-bottom: 0;
  }
}

.resume-image {
  border: 0.2rem solid $primary;
  padding: 0.1rem;
}
</style>