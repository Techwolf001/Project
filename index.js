let userAgent = navigator.userAgent;
let browser;
if(userAgent.match(/edg/i)){
    browser = 'edge';
}
else if(userAgent.match(/firefox|fxios/i)){
    browser = 'firefox';
}else if(userAgent.match(/opr/i)){
    browser = 'opera';
}else if(userAgent.match(/chrome|chromium|crios/i)){
    browser = 'chrome';
}else if(userAgent.match(/safari/i)){
    browser = 'safari';
}else{
    alert('Other browser')
}
const logo = document.querySelector(`.logos .${browser}`);
if(logo != ""){
    logo.style.opacity = "1";
    logo.style.transform = "rotateZ(360deg)"
}

function userSystemOsVersion(){
    let os = navigator.appVersion;
    document.getElementById('OS').innerHTML=os;
}
function userSystemOs(){
    let OsName = "Unknown OS";
    if(navigator.appVersion.indexOf('Win') != -1)  OsName = "Windows";
    if(navigator.appVersion.indexOf('Mac') != -1)  OsName = "MacOS";
    if(navigator.appVersion.indexOf('X11') != -1)  OsName = "UNIX";
    if(navigator.appVersion.indexOf('Linux') != -1)  OsName = "LINUX";
    document.getElementById('OsName').innerHTML = OsName;
}