const showComment = () => {
    const commentButton = document.querySelector('#comment-button');
    commentButton.remove();

    const form = document.createElement('form');
    form.classList.add('mt-5', 'comment-form');

    const label = document.createElement('label');
    const labelText = document.createTextNode('Comment');
    label.classList.add('form-label');
    label.setAttribute('for', 'comment');
    label.appendChild(labelText);

    const textArea = document.createElement('textarea');
    textArea.setAttribute('name', 'comment');
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

    const cardElement = document.getElementsByClassName('card-body')[0];
    cardElement.appendChild(form);
};

const submitComment =  async (event) => {
    event.preventDefault();

    const comment = document.getElementById('#comment').value.trim();

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
    console.log('hi');
};

const post = document.querySelector('#comment-button');
if (post) {
    post.addEventListener('click', showComment);
};

const el = document.querySelector('.comment-form');
if (el) {
    el.addEventListener('submit', submitComment);
};
