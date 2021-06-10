/*
 * @Author: your name
 * @Date: 2021-06-09 14:28:33
 * @LastEditTime: 2021-06-10 09:19:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fence/src/composition/useFence.js
 */
export default function useFence(mapRef, AMapRef, dataRef) {
    for (let i = 0; i < dataRef.value.length; i++) {
        const path = dataRef.value[i];
        const polygon = new AMap.Polygon({
            path: path.path,
            strokeColor: "#FF33FF",
            strokeWeight: 6,
            strokeOpacity: 0.2,
            fillOpacity: 0.4,
            fillColor: "#1791fc",
            zIndex: 50,
            bubble: true,
          });
        mapRef.value.add([polygon]);
    }

    // 缩放地图到合适的视野级别
    mapRef.value.setFitView();
}