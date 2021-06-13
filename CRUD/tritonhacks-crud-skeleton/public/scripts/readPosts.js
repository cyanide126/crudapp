import { createPostHTML } from './createPost.js';

/**
 * Display posts saved in local storage
 */
function readPosts() {

    // TODO: Grab the posts array from local storage
    var posts = JSON.parse(localStorage.getItem("posts"));
    console.log(posts);

    // TODO: Do a null check. If the posts array is null, then set to an empty 
    // array. Otherwise, the posts array exists and you can continue
    if (posts==null){
        posts = [];
    } ;

    /*
     * TODO: For each post in the posts array, create the post HTML using the
     * createPostHTML function and append it to the end of the post list on the
     * web page
     */
    var p;
    for (p of posts){
        var post_list = document.getElementById("post-list");
        post_list.insertAdjacentHTML("afterend",createPostHTML(p));
    }

}

export { readPosts };