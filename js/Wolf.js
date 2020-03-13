class Wolf{
    constructor(){
        //初始化数据
        this.initData();
        //初始化 狼图片
        this.initWolfImg();
    }
    initData(){
        //狼被打击的状态
        this.state_normal = 0;
        this.state_blow   = this.state_normal+1;
        this.wolfState    = this.state_normal;
        this.positionArr  = [
            { x: 170, y: 245 },
            { x: 50, y: 320 },
            { x: 45, y: 420 },
            { x: 70, y: 540 },
            { x: 200, y: 506 },
            { x: 330, y: 545 },
            { x: 320, y: 405 },
            { x: 305, y: 290 },
            { x: 200, y: 510 }
        ];
        //狼图片对象
        this.wolfImgs  = [
            [],
            []
        ];
        //狼图片的大小
        this.wolfW     = 108;
        this.wolfH     = 101;
        //初始化播放狼图片帧
        this.imgIndex  = -1;
        //随机显示不同类型的狼的变量
        this.tindex    = Math.floor(Math.random()*this.wolfImgs.length);
        //随机在不同的狼坐标显示狼
        this.pindex    = Math.floor(Math.random()*this.positionArr.length);
        //狼播放结束的帧
        this.endIndex  = 6;
    }
    initWolfImg(){
        let wolftype1 = [
            './img/wolf/h0.png',
            './img/wolf/h1.png',
            './img/wolf/h2.png',
            './img/wolf/h3.png',
            './img/wolf/h4.png',
            './img/wolf/h5.png',
            './img/wolf/h6.png',
            './img/wolf/h7.png',
            './img/wolf/h8.png',
            './img/wolf/h9.png'
        ];
        for(let i=0;i<wolftype1.length;i++){
            //狼图片
            this.wolfImgs[0][i]     = new Image();
            this.wolfImgs[0][i].src = wolftype1[i];
         }
        let wolftype2 = [
            './img/wolf/x0.png',
            './img/wolf/x1.png',
            './img/wolf/x2.png',
            './img/wolf/x3.png',
            './img/wolf/x4.png',
            './img/wolf/x5.png',
            './img/wolf/x6.png',
            './img/wolf/x7.png',
            './img/wolf/x8.png',
            './img/wolf/x9.png'
        ];
        for(let i=0;i<wolftype2.length;i++){
            //狼图片
            this.wolfImgs[1][i]     = new Image();
            this.wolfImgs[1][i].src = wolftype2[i];
         }
    }
    logic(){
        this.imgIndex++;

        switch(this.wolfState){
            case this.state_normal:
                if(this.imgIndex == this.endIndex){
                    this.imgIndex = 0
                    this.tindex    = Math.floor(Math.random()*this.wolfImgs.length); 
                    this.pindex   = Math.floor(Math.random()*this.positionArr.length)
                    }
                break;
            case this.state_blow:
                if(this.imgIndex == this.endIndex){
                    this.imgIndex  = 0;
                    this.wolfState = this.state_normal;
                    this.endIndex  = 6;
                    this.tindex    = Math.floor(Math.random()*this.wolfImgs.length); 
                    this.pindex    = Math.floor(Math.random()*this.positionArr.length)
                }
                break;
        }
    }
    run(paint){
        this.logic();
        this.onDraw(paint);
    }
    onDraw(paint){
        //绘制狼
        paint.drawImage(this.wolfImgs[this.tindex][this.imgIndex],this.positionArr[this.pindex].x,this.positionArr[this.pindex].y,this.wolfW,this.wolfH);
    }
    onmouseDown(x,y){
        if(
            x>this.positionArr[this.pindex].x&&
            x<this.positionArr[this.pindex].x+this.wolfW&&
            y>this.positionArr[this.pindex].y&&
            y<this.positionArr[this.pindex].y+this.wolfH&&
            this.wolfState != this.state_blow
        )
        {
         this.wolfState = this.state_blow;
         this.imgIndex  = 5;
         this.endIndex  = 10
         this.onclick(this.tindex);
        }
    }
}