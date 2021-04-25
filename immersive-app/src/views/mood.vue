<template>
  <div class="content-container">
    <script
      type="application/javascript"
      src="https://aframe.io/releases/0.7.1/aframe.min.js"
    ></script>
    <script
      type="application/javascript"
      src="https://rawgit.com/chenzlabs/aframe-ar/827e9db/dist/aframe-ar.min.js"
    ></script>
    <script
      type="application/javascript"
      src="https://google-ar.github.io/three.ar.js/dist/three.ar.js"
    ></script>
    <div class="content-title-group not-found">
      <h2 class="title">View your Mood Board in AR</h2>
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

      <h2>This is a sample a-frame snippet</h2>
      <a-scene ar>
        <a-box
          width="0.25"
          height="0.25"
          depth="0.25"
          position="-0.25 0.125 -0.75"
          rotation="0 45 0"
          color="#4CC3D9"
        ></a-box>
        <a-sphere
          position="0 0.3125 -1.25"
          radius="0.3125"
          color="#EF2D5E"
        ></a-sphere>
        <a-cylinder
          position="0.25 0.1875 -0.75"
          radius="0.125"
          height="0.375"
          color="#FFC65D"
        ></a-cylinder>
        <a-plane
          position="0 0 -1"
          rotation="-90 0 0"
          width="1"
          height="1"
          color="#7BC8A4"
          shadow
        ></a-plane>
      </a-scene>
    </div>
  </div>
</template>
