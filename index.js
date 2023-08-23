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
    alert('Other browser');
}

const logo = document.querySelector(`.logos .${browser}`);
if(logo != ""){
    logo.style.opacity = "1";
    logo.style.transform = "rotateZ(360deg)";
    logo.style.boxshadow = "inset 2px 2px 5px #fff";
}


function userSystemOsVersion(){
    let os = navigator.appVersion;
    document.getElementById('OS').innerHTML=os;
}
function userSystemOs(){
    let OsName = "Unknown OS";
    let operatingSystem;
    if(navigator.appVersion.indexOf.match('Win') != -1)  {
        OsName = "Windows";
        operatingSystem = 'Window';
    }
    else if(navigator.appVersion.indexOf.match('Mac') != -1)  {
        OsName = "MacOS";
        operatingSystem = 'MacOS';
    }
    else if(navigator.appVersion.indexOf.match('X11') != -1)  {
        OsName = "UNIX";
        operatingSystem = 'UNIX';
    }
    else if(navigator.appVersion.indexOf.match('Linux') != -1)  {
        OsName = "LINUX";
        operatingSystem = 'LINUX';
    }
    else{
        alert ('Other Operating System');
    }
    const osname = document.querySelector(`.OS .${operatingSystem}`);
    if (osname != "") {
        osname.style.opacity = "1";
    }
}