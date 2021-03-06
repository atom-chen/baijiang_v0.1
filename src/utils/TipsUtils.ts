  /**
	* tips特效汇总
	* by zhaoxin
	* (c) copyright 2014 - 2035
	* All Rights Reserved. 
	* TipsUtils.showTipsDownToUp()
    */

module TipsUtils {

    //从下到上弹出
    export function showTipsDownToUp(str:string = "",isWarning:boolean = false):void{
        var tipsGroup = new egret.DisplayObjectContainer();
        var bg = Utils.createBitmap("tipBg_png");
        tipsGroup.addChild(bg);
        tipsGroup.x = Common.curWidth()/2 - bg.width/2;
        var effectTips = new egret.TextField();
        effectTips.size = 24;
        if(isWarning){
            effectTips.textColor = Common.TextColors.red;
        }else{
            effectTips.textColor = Common.TextColors.milkWhite;
        }
        tipsGroup.alpha = 0;
        
        effectTips.text = str;
        effectTips.strokeColor = 0x000000;
        effectTips.y = bg.height/2 - effectTips.height/2;
        effectTips.x = bg.width/2 - effectTips.width/2;        
        effectTips.stroke  = 2;
        effectTips.bold = true;
        effectTips.textAlign = egret.HorizontalAlign.CENTER;
        tipsGroup.addChild(effectTips);
        tipsGroup.y = Common.curHeight()/2;
        if(!GameLayerManager.gameLayer().effectLayer.contains(tipsGroup)){
            GameLayerManager.gameLayer().effectLayer.addChild( tipsGroup );
        }        

        var onComplete2:Function = function(){
            if(GameLayerManager.gameLayer().effectLayer.contains(tipsGroup)){
                GameLayerManager.gameLayer().effectLayer.removeChild( tipsGroup );
                tipsGroup = null;
            }
        };
        var onComplete1:Function = function(){
            egret.Tween.get(tipsGroup).to({alpha:0},500).call(onComplete2,this);   
        };
        tipsGroup.visible = true;
        egret.Tween.get(tipsGroup).to({y:tipsGroup.y - 120,alpha:1},800,egret.Ease.backOut).call(onComplete1,this);   
    }    

    //从左至右 或者 从右至左
    export function showTipsLeftOrRight(str:string = "",isWarning:boolean = false,isFromeLeft:boolean = true):void{
        var effectTips = new egret.TextField();

        effectTips.size = 24;
        effectTips.y = Common.curHeight()/2;
        if(isWarning){
            effectTips.textColor = Common.TextColors.red;
        }else{
            effectTips.textColor = Common.TextColors.green;
        }
        effectTips.alpha = 0;
        
        effectTips.text = str;
        effectTips.strokeColor = 0x000000;
        if(isFromeLeft){
            effectTips.x = - effectTips.width;        
        }else{
            effectTips.x = Common.curWidth();        
        }
        effectTips.stroke  = 2;
        effectTips.bold = true;
        effectTips.textAlign = egret.HorizontalAlign.CENTER;

        if(!GameLayerManager.gameLayer().effectLayer.contains(effectTips)){
            GameLayerManager.gameLayer().effectLayer.addChild( effectTips );
        }        

        if(isFromeLeft){
            egret.Tween.get(effectTips).to({x:Common.curWidth()/2 - effectTips.width/2 - 50,alpha:1},300,egret.Ease.sineInOut);   
        }else{
            egret.Tween.get(effectTips).to({x:Common.curWidth()/2 - effectTips.width/2 + 50,alpha:1},300,egret.Ease.sineInOut);   
        }

        egret.setTimeout(function () {
            if(isFromeLeft){
                egret.Tween.get(effectTips).to({x:effectTips.x + 100},500);  
            }else{
                egret.Tween.get(effectTips).to({x:effectTips.x - 100},500);   
            }
        }, this, 300);  

        egret.setTimeout(function () {
            if(isFromeLeft){
                egret.Tween.get(effectTips).to({x:Common.curWidth()},300,egret.Ease.sineIn);    
            }else{
                egret.Tween.get(effectTips).to({x:-effectTips.width},300,egret.Ease.sineIn);    
            }
        }, this, 800);  

        egret.setTimeout(function () {
            if(GameLayerManager.gameLayer().effectLayer.contains(effectTips)){
                GameLayerManager.gameLayer().effectLayer.removeChild( effectTips );
                effectTips = null;
            }
        }, this, 1100);     

    }  

    //从里到外
    export function showTipsFromCenter(str:string = "",isWarning:boolean = false):void{
        var effectTips = new egret.TextField();

        effectTips.size = 24;
        effectTips.y = Common.curHeight()/2;
        if(isWarning){
            effectTips.textColor = Common.TextColors.red;
        }else{
            effectTips.textColor = Common.TextColors.green;
        }
        effectTips.alpha = 0;
        
        effectTips.text = str;
        effectTips.strokeColor = 0x000000;
        effectTips.x = Common.curWidth()/2;        
        effectTips.stroke  = 2;
        effectTips.bold = true;
        effectTips.textAlign = egret.HorizontalAlign.CENTER;

        if(!GameLayerManager.gameLayer().effectLayer.contains(effectTips)){
            GameLayerManager.gameLayer().effectLayer.addChild( effectTips );
        }        

        effectTips.anchorOffsetX = effectTips.width/2;
        effectTips.anchorOffsetY = effectTips.height/2;
        effectTips.scaleX = 0;
        effectTips.scaleY = 0;
        
        var onComplete2:Function = function(){
            if(GameLayerManager.gameLayer().effectLayer.contains(effectTips)){
                GameLayerManager.gameLayer().effectLayer.removeChild( effectTips );
                effectTips = null;
            }
        };
        egret.Tween.get(effectTips).to({scaleX:1,scaleY:1,alpha:1},200); 
        egret.setTimeout(function () {
            egret.Tween.get(effectTips).to({alpha:0},500).call(onComplete2,this);   
        }, this, 1000);   

    }    

    //从外到里
    export function showTipsBigToSmall(str:string = "",isWarning:boolean = false):void{
        var effectTips = new egret.TextField();

        effectTips.size = 24;
        effectTips.y = Common.curHeight()/2;
        if(isWarning){
            effectTips.textColor = Common.TextColors.red;
        }else{
            effectTips.textColor = Common.TextColors.green;
        }
        effectTips.alpha = 0;
        
        effectTips.text = str;
        effectTips.strokeColor = 0x000000;
        effectTips.x = Common.curWidth()/2;        
        effectTips.stroke  = 2;
        effectTips.bold = true;
        effectTips.textAlign = egret.HorizontalAlign.CENTER;

        if(!GameLayerManager.gameLayer().effectLayer.contains(effectTips)){
            GameLayerManager.gameLayer().effectLayer.addChild( effectTips );
        }        

        effectTips.anchorOffsetX = effectTips.width / 2;
        effectTips.anchorOffsetY = effectTips.height / 2;
        effectTips.scaleX = 4;
        effectTips.scaleY = 4;
        
        var onComplete2:Function = function(){
            if(GameLayerManager.gameLayer().effectLayer.contains(effectTips)){
                GameLayerManager.gameLayer().effectLayer.removeChild( effectTips );
                effectTips = null;
            }
        };
        egret.Tween.get(effectTips).to({scaleX:1,scaleY:1,alpha:1},200); 
        egret.setTimeout(function () {
            egret.Tween.get(effectTips).to({alpha:0},500).call(onComplete2,this);   
        }, this, 1000);   

    }    

}