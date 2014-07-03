    function getStyle(obj, name){
        if(obj.currentStyle){
            return obj.currentStyle[name];
        }else{
            return getComputedStyle(obj, false)[name];  //第二個參數放啥都行
        }
    }
    function startMove(obj, attr, target){
        clearInterval(obj.timer);
        obj.timer = setInterval(function(){
            var cur = 0;    //獲取
            if(attr === 'opacity'){
                cur = Math.round( parseFloat( getStyle(obj, attr) )*100 );
            }else{
                cur = parseInt( getStyle(obj, attr) );
            }
            
            var speed = (target - cur)/6;
            speed = (speed > 0) ? ( Math.ceil(speed) ) : ( Math.floor(speed) );
            
            if( cur === target ){
                clearInterval(obj.timer);
            }else{
                if(attr === 'opacity'){
                    obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')';
                    obj.style.opacity = (cur + speed)/100 ;
                    //document.getElementById('txt1').value = obj.style.opacity;
                }else{
                    obj.style[attr] = cur + speed + 'px';
                }
            }
        }, 30);
    }
    /*
    多物體運動的情況下, 所有的東西都不能共用
    如果有需要的話, 你完全可以把它們多加一個屬性, 一人一個就不會打架了!
    */