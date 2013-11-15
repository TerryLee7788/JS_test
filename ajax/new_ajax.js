function ajax(url, fnSucc, fnFaild){
    //1.創建Ajax對象
    //var oAjax = new XMLHttpRequest();   //IE6不兼容
    
    //IE6
    //var oAjax = new ActiveXObject('Microsoft.XMHTTP');  
    
    var oAjax = (window.XMLHttpRequest) ? (new XMLHttpRequest()) : (new ActiveXObject('Microsoft.XMHTTP')) ;
    //alert(oAjax);
    //alert(oAjax.readyState);
    //2.連接服務器
    //open(方法, 文件名, 異步傳輸)
    /*
    同步 -> 多件事情一起    (js) 事情一件一件來 
    異步 -> 一件一件的來    (js) 多件事情可以一起做
    */
    oAjax.open('GET', url + '?t=' + new Date().getTime(), true);
    
    //3.發送請求
    oAjax.send();
    
    //4.接收返回值 (看網速而定)
    //  資料回來後發生的事情
    oAjax.onreadystatechange = function(){
        //oAjax.readyState              //告訴瀏覽器和服務器, 進行到哪一步了
        if(oAjax.readyState == 4){      //讀取完成
            if(oAjax.status == 200){    //200代表成功
                fnSucc(oAjax.responseText)
            }else{
                if(fnFaild){
                    fnFaild(oAjax.status);
                }
                //alert('失敗');          //404
            }
        }
    }
}