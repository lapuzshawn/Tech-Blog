const blogPost = $('.blog-post');
const commentButton = $('.commentButton')
const submitButton = $('#submitButton');

submitButton.on('click', async (event) => {
    // event.preventDefault();
    const textArea = $('#textArea').val()

    const response = await fetch('/api/users/comment', {
        method: 'POST',
        body: JSON.stringify({'content': textArea}),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        location.reload()
    } else {
        alert(response.statusText);
    }
})

commentButton.on('click', (event) => {
    // event.preventDefault();
    event.stopPropagation();
    
    const commentArea = $('.comment-area')
    commentArea.css('display', 'block')
})


blogPost.on('click', (event) => {
    // event.preventDefault();
    const postNumber = $(event.target).closest('.blog-post').attr('data-post-id')
    window.location.pathname = `/post/${postNumber}`
})