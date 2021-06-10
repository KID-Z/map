/*
 * @Author: your name
 * @Date: 2021-06-09 10:11:37
 * @LastEditTime: 2021-06-09 16:29:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fence/src/composition/useMap.js
 */

/*
 * 异步创建script标签 
 */

export default function MapLoader() {
    return new Promise((resolve) => {
        if (window.AMap) {
            resolve(window.AMap)
        } else {
            var script = document.createElement('script')
            script.async = true
            script.src = 'https://webapi.amap.com/maps?v=2.0&callback=initAMap&key=6eb79ff811e49761cb2bf4492d0b998c&plugin=AMap.PolygonEditor';
            document.head.appendChild(script)
        }
        window.initAMap = () => {
            resolve(window.AMap)
        }
    })
}
