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

document
    .querySelector('.update')
    .addEventListener('click', updateButtonHandler);

document
    .querySelector('.delete')
    .addEventListener('click', deleteButtonHandler);