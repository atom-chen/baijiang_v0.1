/**
* 浏览器相关接口(如localStorage、kookies等)
*/
var NativeAPI;
(function (NativeAPI) {
    // 储存数据需要key和value，都必须是字符串
    function setLocalData(key, value) {
        egret.localStorage.setItem(key, value);
    }
    NativeAPI.setLocalData = setLocalData;
    // 读取数据
    function getLocalData(key) {
        return egret.localStorage.getItem(key);
    }
    NativeAPI.getLocalData = getLocalData;
    // 删除数据
    function deleteLocalData(key) {
        egret.localStorage.removeItem(key);
    }
    NativeAPI.deleteLocalData = deleteLocalData;
    // 将所有数据清空
    function clearLocalData() {
        egret.localStorage.clear();
    }
    NativeAPI.clearLocalData = clearLocalData;
    //调用麦克风  
    function getMic() {
        //getUserMedia API 大部分手机不支持，所以暂不考虑
    }
    NativeAPI.getMic = getMic;
    //调用canvas截屏
    function getScreen() {
    }
    NativeAPI.getScreen = getScreen;
    //调用打电话功能
    function callPhone(telNum) {
        window.open("tel:" + telNum, '_self');
    }
    NativeAPI.callPhone = callPhone;
    //调用发短信功能
    function sendMessage(telNum) {
        window.open("sms:" + telNum, '_self');
    }
    NativeAPI.sendMessage = sendMessage;
    //获取当前地址
    function getCurUrl() {
        return window.location.href;
    }
    NativeAPI.getCurUrl = getCurUrl;
    //当前游戏角度
    NativeAPI.curAngle = Number(window["orientation"]);
})(NativeAPI || (NativeAPI = {}));
//# sourceMappingURL=NativeApi.js.map