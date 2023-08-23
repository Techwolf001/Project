function userBrowser(){
    let userAgent = navigator.userAgent;
    let browser;
    
    if(userAgent.match(/edg/i)) userAgent = 'edge';
    
    if(userAgent.match(/firefox|fxios/i)) userAgent = 'firefox';
    
    if(userAgent.match(/opr/i)) userAgent = 'opera mini';
    
    if(userAgent.match(/chrome|chromium|crios/i)) userAgent = 'chrome';
    
    if(userAgent.match(/safari/i)) userAgent = 'safari';
    
    document.getElementById('Browser').innerHTML=userAgent;
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