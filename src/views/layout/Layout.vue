<template>
  <div></div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { SideBar, AppMain, NavBar } from "@/views/layout/components";

@Component({
  components: {
    SideBar,
    NavBar,
    AppMain
  }
})
export default class layout extends Vue {}
</script>

<style></style>
