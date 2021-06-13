/**
 * Deletes a post from the page
 * @param {object} deleteBtn - An object that represents the HTML button element
 * that was clicked, which in this case is the delete button
 */
function deletePost(deleteBtn) {

    /*
     * TODO: Using the delete button that was passed in as a parameter, get access
     * to its parent element (The li element which represents the entire post)
     */

     element = deleteBtn.parentNode;

     element.remove();

    // TODO: Once you have the li element, delete it from the page

    /*
     * TODO: Delete the post in local storage by passing in the li element's
     * id to the deletePostStorage function
     * DON'T DO UNTIL SPECIFIED IN THE WRITE-UP
     */
}

/**
 * Deletes a post object from local storage
 * @param {object} postID - The post id that refers to the post to delete
 */
function deletePostStorage(postID) {

    // TODO: Grab the posts array from local storage
    var posts = JSON.parse(localStorage.getItem("posts"));

    // TODO: Find the post to delete in the array
    var p;
    var i = 0;
    for (p of posts){
        if (postID == p.getAttribute('id')){
            var toRemove = i;
        }
        i++;
    }

    // TODO: Delete the post from the array
    posts.splice(i,i+1);
    // TODO: Update local storage with the new array (Since a post was deleted)
    localStorage.setItem("posts",JSON.stringify(posts));
}

