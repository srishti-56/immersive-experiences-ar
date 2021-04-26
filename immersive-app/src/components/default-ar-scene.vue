<template>
  <!--
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
  -->
  <a-scene>
    <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
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
    <a-sky color="#8ddfff"></a-sky>
  </a-scene>
</template>

<script>
import 'aframe';

export default {
  name: 'DefaultArScene',
};
</script>
