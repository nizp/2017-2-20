const filter = Object.values({
    origin(){},
    filter1(imgData){
        let d = imgData.data;
        for(var i=0; i<d.length; i+=4){
            d[i] += 50 ;
            d[i+1] += 50 ;
            d[i+2] += 50 ;
        }
    },
    filter2(imgData){
        let d = imgData.data;
        for(var i=0; i<d.length; i+=4){
            d[i] -= 50 ;
            d[i+1] -= 50 ;
            d[i+2] -= 50 ;
        }
    },
    filter3(imgData){
        let d = imgData.data;
        for(var i=0; i<d.length; i+=4){
            d[i] += 50 ;
        }
    },
    filter4(imgData){
        let d = imgData.data;
        for(var i=0; i<d.length; i+=4){
            let r = d[i] ,
                g = d[i+1],
                b = d[i+2];
            d[i] = 255 -r;
            d[i+1] = 255- g;
            d[i+2] = 255 - b;
        }
    },
})
