const canvas = document.querySelector('.canvas'),
    ctx = canvas.getContext('2d'),
    arrFilterBtn = Array.from(document.querySelectorAll('.filter')),
    download = document.querySelector('.download'),
    imgfile = document.querySelector('.imgfile');

let img = new Image(),
    imgData = null,
    arrData = [];

imgfile.onchange = function () {
    let file = this.files[0],
        reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        img.src = this.result;
        img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img,0,0);
            imgData = ctx.getImageData(0,0,img.width,img.height);
            arrData = imgData.data.slice();
        }
    }
}

arrFilterBtn.forEach((item,index)=>{
    item.onclick = function () {
        for(var i=0; i<arrData.length; i++){
            imgData.data[i] = arrData[i];
        };
        filter[index](imgData);
        ctx.putImageData(imgData,0,0);
        download.href = canvas.toDataURL();
    }
})





