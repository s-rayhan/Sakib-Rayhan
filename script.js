const form = document.getElementById('post-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent default form submission

  // get form data
  const formData = new FormData(event.target);
  const title = formData.get('title');
  const author = formData.get('author');
  const content = formData.get('content');

  // create post object
  const post = {
    title: title,
    author: author,
    content: content
  };

  // save post object to local storage
  localStorage.setItem('post', JSON.stringify(post));

  // redirect to post page
  window.location.href = './post.html';
});
