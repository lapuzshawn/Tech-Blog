const post = $('.blogpost')
const comment = $('.commentButton')

const form = $('#newPostForm');
const newPostButton = $('#createNewPost');
const submitPost = $('#postSubmit')
const updateButton = $('#updatePostButton')
const deleteButton = $('#deletePostButton')


// Post form submit event
post.on('click', (event) => {
    // TODO xx 
    console.log($(event.target).closest('.blogpost').attr('data-post-id'))
    const postNumber = $(event.target).closest('.blogpost').attr('data-post-id')
    window.location.pathname = `/post/${postNumber}`
})


newPostButton.on('click', async (event) => {
    // TODO xx
    event.preventDefault();
    form.css('display', 'block')
    console.log('button clicked')
})


submitPost.on('click', async (event) => {
    // TODO
    event.preventDefault();

    const title = $('#postTitle').val();
    const content = $('#postContent').val();

    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify(
            { 
            'name': title, 
            'description': content 
            }
        ),
        headers: {
            'Content-Type': 'application/json',
        }
    })

    if (response.ok) {
        location.reload();
    } else {
        alert(response.statusText)
    }
})



// Update submit event
updateButton.on('click', async (event) => {
    // TODO xx 
    event.preventDefault();
    const postId = comment.attr('id')
    console.log(postId)

    const title = $('#mainPostTitle').text();
    const content = $('#mainPostBody').text();
    console.log(title)
    console.log(content)
    if (!title || !content) {
        return;
    }

    const response = await fetch(`/api/posts/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({ 
            'name': title, 
            'description': content 
        }),
        headers: {
            'Content-Type': 'application/json',
        }
    })

    if (response.ok) {
        location.reload();
    } else {
        alert(response.statusText)
    }
})

deleteButton.on('click', async (event) => {
    // TODO xx
    event.preventDefault();
    const postId = comment.attr('id')
    console.log(postId)

    const response = await fetch(`/api/posts/${postId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })

    if (response.ok) {
        window.location.pathname = '/dashboard';
    } else {
        alert(response.statusText)
    }
})



