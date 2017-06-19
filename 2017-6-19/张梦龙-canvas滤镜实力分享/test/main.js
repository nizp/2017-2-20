const canvas = document.querySelector('.canvas'),
    ctx = canvas.getContext('2d'),
    arrFilterBtn = Array.from(document.querySelectorAll('.filter')),
    download = document.querySelector('.download'),
    imgfile = document.querySelector('.imgfile');

let img = new Image(),
    imgData = null,
    arrData = [];

arrFilterBtn.forEach((item,index)=>{
    item.onclick = function () {
        for(var i=0; i<arrData.length; i++){
            imgData.data[i] = arrData[i];
        };
        filter[index](imgData);
        ctx.putImageData(imgData,0,0);
        download.href = canvas.toDataURL('image/png');
    }
});

imgfile.onchange = function () {
    var file = this.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        img.src = this.result;
        img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img,0,0)
            imgData = ctx.getImageData(0,0,img.width,img.height);
            arrData = imgData.data.slice();
        }
    }
}

/*
 * 1.实现本地预览图片
 *       file接口 —— 选择图片
 *           files[0]
 *       FileReader —— 拿到图片数据
 *           readAsDataURL
 *           result
 *       Image —— 把数据给Image载体
 *       drawImage —— 图片显示在canvas上
 * 2.拿到图片的数据
 *       getImageData
 * 3.修改图片数据
 *       滤镜
 * 4.把修改的数据重新渲染到canvas上
 *       putImageData
 * 5.下载修改好的图片
 *       toDataURL
 *       a标签的download属性
 * */






