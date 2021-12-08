const updateButtonHandler = async (event) => {
    if (event.target.hasAttribute('id')) {
        const id = event.target.getAttribute('id');

        const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT'
        }) ;

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to update post');
        }
    };

};
const deleteButtonHandler = async (event) => {
    if (event.target.hasAttribute('id')) {
        const id = event.target.getAttribute('id');
        console.log(id);

        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE'
        }) ;

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete post');
        }
    };

};

const createPostFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();

    if (title && content) {
        const response = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: {
              'Content-Type': 'application/json',
            },
        });
      
        if (response.ok) {
        document.location.replace('/dashboard');
        } else {
        alert('Failed to create post');
        }
    }
    
};

const createPostButtonHandler = () => {
    document.location.replace('/post-create')   
};

const createPost = document.querySelector('#create-post');
if (createPost) {
    createPost.addEventListener('click', createPostButtonHandler);
};

const update = document.querySelector('.update');
if (update) {
    update.addEventListener('click', updateButtonHandler);
};

const post = document.querySelector('#post');
if (post) {
    post.addEventListener('click', createPostFormHandler);
};
