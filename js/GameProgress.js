class Progress{
    constructor(){
        this.initData();
    }
    initData(){
        //加载时间进度
        this.timeF        = 264;
        this.timeW_change = 2;
        this.timeW        = this.timeF;
        //进度条图片
        this.timeImage     = new Image;
        this.timeImage.src = "./img/progress-mutli.jpg";
        //所剩时间的不同样式
        this.ImageCutyF       = 337;
        this.ImageCuty_change = 100;
        this.ImageCuty        = this.ImageCutyF;
        this.change = 3;

    }
    logic(){
        this.timeW -= this.timeW_change;
        if(this.timeW<=0){
            this.timeW = 0;
            this.setState();
        }
    }
    run(paint){
        this.logic();
        this.onDraw(paint);
    }
    onDraw(paint){
        //绘制时间进度条
        paint.drawImage(this.timeImage,210,this.ImageCuty,100,16,98,111,this.timeW,24);
        if(this.timeW==this.timeF*(0.25*this.change)){
            this.ImageCuty -= 94;
            this.change --;
        }
    }
}