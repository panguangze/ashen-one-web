<template>
  <div>
    <side-bar></side-bar>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import SideBar from "@/views/layout/components/SideBar/index.vue";
@Component({
  components: {
    SideBar
  }
})
export default class Home extends Vue{
  
}
</script>

<style></style>
