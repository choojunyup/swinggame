function saveScore(score){
 
    var varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기
    var score_ = score <= 0 ? 0 : score ;
 
    if ( varUA.indexOf('android') > -1) {
        //android
        window.android.setMessage(score_);   //send device
        //alert("="+score_+"=");

    } else if ( varUA.indexOf("iphone") > -1||varUA.indexOf("ipad") > -1||varUA.indexOf("ipod") > -1 ) {
        //IOS
        
    } else {
        //etc
        //alert("="+score_+"=");
    }
    
}

function puase(){
    game.blurHandler();
}

function resume(){
    game.focusHandler();
}
/*  use

private class AndroidBridge {

     public void setMessage(final String arg) {
      handler.post(new Runnable() {
       public void run() {
        mTextView.setText("받은 메시지 : \n" + arg);
       }
      });
     }
}

mWebView.addJavascriptInterface(new AndroidBridge(), "android");

*/

/*
function loadScore(){
 
    var varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기
 
    if ( varUA.indexOf('android') > -1) {
        //android
        return "android";
    } else if ( varUA.indexOf("iphone") > -1||varUA.indexOf("ipad") > -1||varUA.indexOf("ipod") > -1 ) {
        //IOS
        return "ios";
    } else {
        //etc
        return "other";
    }
    
}
*/

