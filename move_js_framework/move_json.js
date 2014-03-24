    function getStyle(obj, name){
        if(obj.currentStyle){
            return obj.currentStyle[name];
        }else{
            return getComputedStyle(obj, false)[name];  //第二個參數放啥都行
        }
    }
    //調用的時候startMove(div, ({ width:100, height:300 }))
    function startMove(obj, json, fnEnd){   //改成json
        clearInterval(obj.timer);
        obj.timer = setInterval(function(){
            var bStop = true;
            for(var attr in json){
                var cur = 0;    //獲取
                if(attr === 'opacity'){
                    cur = Math.round( parseFloat( getStyle(obj, attr) )*100 );
                }else{
                    cur = parseInt( getStyle(obj, attr) );
                }
                
                var speed = (json[attr] - cur)/6;
                speed = (speed > 0) ? ( Math.ceil(speed) ) : ( Math.floor(speed) );
                if(cur != json[attr]){
                    bStop = false;
                }
                if(attr === 'opacity'){
                    obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')';
                    obj.style.opacity = (cur + speed)/100 ;
                }else{
                    obj.style[attr] = cur + speed + 'px';
                }
                if( bStop ){
                    clearInterval(obj.timer);
                    
                    if(fnEnd){  //防止出錯
                        fnEnd();
                    }
                }
            }
        }, 30);
    }
    /*
    多物體運動的情況下, 所有的東西都不能共用
    如果有需要的話, 你完全可以把它們多加一個屬性, 一人一個就不會打架了!
    */