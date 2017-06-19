
var filter = Object.values({

    // 原图
    origin(imgData){},

    // 曝光
    light(imgData){
        let d = imgData.data;
        for (var i = 0; i < d.length; i += 4) {
            d[i] += 50 ;
            d[i + 1] += 50 ;
            d[i + 2] += 50 ;
        }
    },

    // 变暗
    dark(imgData){
        let d = imgData.data;
        for (var i = 0; i < d.length; i += 4) {
            d[i] -= 50 ;
            d[i + 1] -= 50 ;
            d[i + 2] -= 50 ;
        }
    },

    // 暖色
    bianhong(imgData) {
        let d = imgData.data;
        for (var i = 0; i < d.length; i += 4) {
            d[i] += 30;
        }
    },

    // 反色
    colorInvertProcess(imgData) {
        let d = imgData.data;
        for (var i = 0; i < d.length; i += 4) {
            var r = d[i];
            var g = d[i + 1];
            var b = d[i + 2];

            d[i] = 255-r;
            d[i + 1] = 255-g;
            d[i + 2] = 255-b;
        }
    },

    // 黑白
    blackAndWhite(imgData) {
        let d = imgData.data;
        for (var i = 0; i < d.length; i += 4) {
            var r = d[i];
            var g = d[i + 1];
            var b = d[i + 2];

            var v = 0.2126*r + 0.7152*g + 0.0722*b;
            d[i] = d[i+1] = d[i+2] = v;
        }
    },


    // 复古
    sepiaFilter(imgData){
        let d = imgData.data;
        for (let i = 0; i < d.length; i += 4) {
            let r = d[i]
            let g = d[i + 1]
            let b = d[i + 2]
            d[i] = (r * 0.393) + (g * 0.769) + (b * 0.189) // red
            d[i + 1] = (r * 0.349) + (g * 0.686) + (b * 0.168) // green
            d[i + 2] = (r * 0.272) + (g * 0.534) + (b * 0.131) // blue
        }
    },

    // 阈值
    yuzhi(imgData) {
        let d = imgData.data;
        for (var i = 0; i < d.length; i += 4) {
            var r = d[i];
            var g = d[i + 1];
            var b = d[i + 2];

            var v = (0.2126*r + 0.7152*g + 0.0722*b >= 60) ? 255 : 0;
            d[i] = d[i+1] = d[i+2] = v;
        }
    },

    // 动态模糊
    muhu(imgData) {
        let d = imgData.data;
        let n = 20;
        let m = n - 1 ;
        for (var i = 0; i < d.length; i += 4) {
            d[i] = (d[i] + d[i - 4] * m) / n
            d[i + 1] = (d[i + 1] + d[i - 3] * m) / n
            d[i + 2] = (d[i + 2] + d[i - 2] * m) / n
            d[i + 3] = (d[i + 3] + d[i - 1] * m) / n
        }
    },

})
