const showComment = (e) => {
    if(e.target.name === 'comment') {

        // console.log(e.target)
        e.target.remove();
        const form = document.createElement('form');
        form.classList.add('mt-5', 'comment-form');
    
        const label = document.createElement('label');
        const labelText = document.createTextNode('Comment');
        label.classList.add('form-label');
        label.setAttribute('for', 'comment');
        label.appendChild(labelText);
    
        const textArea = document.createElement('textarea');
        textArea.setAttribute('name', 'comment-area');
        textArea.setAttribute('id', 'comment');
        textArea.setAttribute('cols', '100');
        textArea.setAttribute('rows', '5');
    
        const button = document.createElement('button');
        button.setAttribute('type', 'submit');
        button.classList.add('btn', 'btn-secondary');
        const buttonText = document.createTextNode('Submit');
        button.appendChild(buttonText);
    
        form.appendChild(label);
        form.appendChild(textArea);
        form.appendChild(button);
    
        if(document.querySelector('#id') === e.target.id ){
            console.log('Match')
        }
        const cardElement = document.getElementById(e.target.id);
        console.log(cardElement)
        cardElement.appendChild(form);
    
        document
        .querySelector('.comment-form')
        .addEventListener('submit', submitComment);
    }
    
};

const submitComment =  async (event) => {
    event.preventDefault();

    console.log(event.target)
    const comment = document.querySelector('textarea[name="comment"]').value;

    console.log(comment);

    if (comment) {
        const response = await fetch(`/api/users/comment`, {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: {'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
};

document.getElementById('posts').addEventListener('click', showComment);
