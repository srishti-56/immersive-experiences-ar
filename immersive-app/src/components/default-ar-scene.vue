<template>
  <a-scene embedded arjs>
    <a-camera></a-camera>
    <a-text
      :value="Name + ' Mood Board'"
      color="#111"
      position="0 2.5 -2"
      align="center"
    ></a-text>
    <a-entity rotation="0 05 0">
      <a-box
        src="https://cdn.glitch.com/b870d9ec-1139-44f9-b462-223e4a2c74e7%2Fdirt.jpg?1490308269805"
        position="-1 5 -8"
        color="#4CC3D9"
      ></a-box>
      <a-box position="0.1 5 -8" color="#fea1ff"></a-box>
      <a-box position="1.2 5 -8" color="#ced1ff"></a-box>
    </a-entity>
    <a-entity rotation="0 -05 0">
      <a-box position="1.2 4 -8" color="#ced1ff"></a-box>
      <a-box position="0.1 4 -8" color="#fea1ff"></a-box>
      <a-box position="-1 4 -8" color="#4CC3D9"></a-box>
    </a-entity>
    <!--
    <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
    <a-cylinder
      position="1 0.75 -3"
      radius="0.5"
      height="1.5"
      color="#FFC65D"
    ></a-cylinder>
    <a-plane
      position="0 0 -4"
      rotation="-90 0 0"
      width="4"
      height="4"
      color="#43C877"
    ></a-plane>
    <a-sky color="#D69AF4"></a-sky> -->
  </a-scene>
</template>

<script>
import 'aframe';
import 'aframe-ar';

export default {
  name: 'DefaultArScene',
  props: ['Name'],
  created() {
    console.log('created:', this.Name);
  },
};
</script>
