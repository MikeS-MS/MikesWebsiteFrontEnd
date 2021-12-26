// (function() {
//     let body = document.getElementsByClassName('menu-overview');
//     console.log(body[0].outerHTML);
// })();

function AddComment() {
    let firstName = document.getElementById('fname');
    let lastName = document.getElementById('lname');
    let commentContent = document.getElementById('comment');

    if ((firstName.value && lastName.value) && commentContent.value) {
        let commentSection = document.getElementById('comments');
        let comment = document.createElement('div');
        comment.classList.add('comment-container')
        comment.innerHTML = `<div class="post-text comment-text">${firstName.value} ${lastName.value}</div>
        <div class="post-divider comment-divider"></div>
        <div class="post-text comment-text comment-content" style="text-transform: none !important;">${commentContent.value}</div>`
        commentSection.appendChild(comment)
        HandlePageLoadDarkMode()
    } else {
        alert('You didn\'t fill all the fields!')
    }
}

// function ResetComments() {
//     let commentSection = document.getElementById('comments');
//     commentSection.innerHTML = '';
// }