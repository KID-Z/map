<!--
 * @Author: your name
 * @Date: 2021-06-09 14:56:05
 * @LastEditTime: 2021-06-10 09:15:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fence/src/components/map.vue
-->
<template>
  <div class="map">
    <div id="container" style="height: 100vh; width: 100%"></div>
    <div class="control">
        <button>施工围栏</button>
        <button>管理人员</button>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, computed } from "vue";
import useMap from "../composition/useMap";
import useFence from "../composition/useFence";
import useLocation from "../composition/useLocation";
export default {
  name: "Map",
  props: {
    data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  setup(props) {
    const AMapRef = ref(null);
    const mapRef = ref(null);
    async function initMap() {
      AMapRef.value = await useMap();
    }

    // 响应数据 
    const dataRef = computed(() => props.data);

    onMounted(async () => {
      await initMap();
      mapRef.value = new AMapRef.value.Map("container", {
        zoom: 16.8, //设置地图显示的缩放级别
        viewMode: '3D',
      });

      // 根据数据生成围栏
      useFence(mapRef, AMapRef, dataRef);

      // 得到当前所在位置 并且标注
      useLocation(mapRef, AMapRef);
    });
  },
};
</script>

<style lang="less" scoped>
.control {
    position: fixed;
    right: 20px;
    top: 20px;
    z-index: 99;
    button {
        padding: 3px 20px;
        outline: none;
        border: 1px solid #000;
        cursor: pointer;
        &:nth-of-type(1) {
            margin-right: 15px;
            background: orange;
        }
    }
}
</style>