/*
 * @Author: your name
 * @Date: 2021-06-09 10:23:23
 * @LastEditTime: 2021-06-09 17:23:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fence/src/composition/useDrawPath.js
 */
export default function useLocation(mapRef, AMapRef) {
    // 定位到所在位置
    mapRef.value.plugin("AMap.Geolocation", () => {
        const geolocation = new AMap.Geolocation({
            // 是否使用高精度定位，默认：true
            enableHighAccuracy: true,
            // 设置定位超时时间，默认：无穷大
            timeout: 0,
            // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
            buttonOffset: new AMap.Pixel(10, 20),
            //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            zoomToAccuracy: true,
            //  定位按钮的排放位置,  RB表示右下
            buttonPosition: "RB",
        });

        geolocation.getCurrentPosition((status, result) => {
            if (status == "complete") {
                onComplete(result);
            } else {
                onError(result);
            }
        });

        function onComplete(data) {
            // data是具体的定位信息
            mapRef.value.setCenter([data.position.lng, data.position.lat]);

            // 创建一个 Marker 实例
            const marker = new AMapRef.value.Marker({
                position: [data.position.lng, data.position.lat],
            });

            // 将创建的点标记添加到已有的地图实例：
            mapRef.value.add(marker);
        }

        function onError(data) {
            // 定位出错
            console.log('定位出错' + data);
        }
    });
}
