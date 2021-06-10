<!--
 * @Author: your name
 * @Date: 2021-06-09 09:44:33
 * @LastEditTime: 2021-06-10 09:33:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fence/src/views/Home.vue
-->
<template>
  <div class="home">
    <Map :data="data" />
  </div>
</template>

<script>
import { ref } from "vue";
import Map from "@/components/Map.vue";

export default {
  name: "Home",
  components: {
    Map,
  },
  setup() {
    const dataRef = ref([]);
    dataRef.value = [
      {
        classify: "",
        path: [
          [123.402999, 41.74784],
          [123.403999, 41.748456],
          [123.405553, 41.747517],
          [123.402998, 41.746706],
        ],
      },
      {
        classify: "",
        path: [
          [123.402999, 41.7485],
          [123.403999, 41.7488],
          [123.403, 41.7491],
        ],
      },
    ];

    return {
      data: dataRef,
    };
  },
};
</script>
