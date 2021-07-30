<template>
  <div class="content-container">
    <div class="content-title-group not-found">
      <h2 class="title">View A Default AR Scene</h2>
      <p>This page will display a default Mood Board.</p>
      <br />
      <h2 class="title">Resources</h2>
      <ul>
        <li>
          <a
            href="https://srishti-56.medium.com/deploying-a-serverless-vue-js-app-using-github-codespaces-and-static-web-apps-5f5f51dabe76"
          >
            Deploying a Serverless Vue.js App using GitHub Codespaces and Static
            Web Apps
          </a>
        </li>
      </ul>

      <h2 class="title">This is a sample a-frame snippet</h2>
      <div id="example">
        <DefaultArScene></DefaultArScene>
      </div>
    </div>
  </div>
</template>

<script>
import DefaultArScene from '../components/default-ar-scene.vue';

export default {
  name: 'mood',
  components: {
    DefaultArScene,
  },
  data() {
    return {
      Name: 'User',
    };
  },
};
</script>
