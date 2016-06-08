
/**
 *	弹出层屏幕居中
 *  @param string event      show或hide
 *  @param object popupName  对象
 *  @example $('show',$('.box'));
 *	@author  Think.Dom
 */
function popupBox(event,popupName,setLeft,setTop){
	var _scrollHeight = $(document).scrollTop(),//获取当前窗口距离页面顶部高度
	_windowHeight = $(window).height(),//获取当前窗口高度
	_windowWidth = $(window).width(),//获取当前窗口宽度
	_popupHeight = popupName.height(),//获取弹出层高度
	_popupWeight = popupName.width();//获取弹出层宽度
	_posiTop = setTop || (_windowHeight - _popupHeight)/2 + _scrollHeight ;
	_posiLeft = setLeft || (_windowWidth - _popupWeight)/2;
    if(event == 'show'){
        var maxZ = getMaxZindex()+10;
        popupName.css({"left": _posiLeft + "px","top":_posiTop + "px",'position':'absolute',"display":"block",'zIndex':maxZ});//设置position
    }else{
        popupName.hide();
    }
}

/**
 *	添加灰色遮罩
 *  @param string event  show或hide
 *	@author  Think.Dom
 */
function grayPageEvent(event){
    if(typeof(event) == 'undefined' || event == ''){
        var event = 'show';
    }
    var maxZ = getMaxZindex()+10;
    var cWidth = document.body.scrollWidth;
    var cHeight = document.body.scrollHeight;
    if(event == 'show'){
        $(document.body).append("<div class='graydiv' style='background:#000;opacity:0.4;filter:progid:DXImageTransform.Microsoft.Alpha(opacity=40);height:"+cHeight+"px ;left: 0;position: absolute;top: 0;width:"+cWidth+"px ;z-index:"+maxZ+";'></div>");
    }else{
        $('.graydiv').remove();
    }
    
}

/**
 *	获取页面最大z-index值
 *	@author  Think.Dom
 */
function getMaxZindex(){
	var divs = document.getElementsByTagName("*");
    var maxNum = 0;
    var thisZ = 0;
    for(var i=0; i<divs.length; i++){
        thisZ = divs[i].style.zIndex;
        maxNum = Math.max( maxNum,thisZ || 0 );
    }
    return parseInt(maxNum);
}
