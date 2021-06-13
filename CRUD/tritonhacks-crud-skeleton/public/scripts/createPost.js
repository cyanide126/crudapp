const REPLACE_ID = "" ;
const REPLACE_TITLE = document.getElementById("t_title");
const REPLACE_SUMMARY = document.getElementById("ta_summary").value;

/**
 * Creates a post from the values filled in on the form and adds it to the page
 */
function createPost() {

    // You can get rid of this console.log statement once you've set the
    // event listener correctly
    console.log('You set the event listener correctly!!!');

    // TODO: Collect the values from the form and store them in an 
    // object literal to represent a post
    let post = {
        id: (new Date().getTime()).toString(),
        title: document.getElementById("t_title").value,
        summary: document.getElementById("ta_summary").value
    };

    // TODO: Clear the form entries so they don't have the previous input
    document.getElementById("t_title").value="";
    document.getElementById("ta_summary").value="";
    /* 
     * TODO: Create HTML for the post by passing in post object created earlier
     * as a parameter to the createPostHTML function. Make sure to implement
     * the createPostHTML function now before moving on
     */

    // TODO: Add the HTML for the post that was created in the createPostHTML
    // function into the ul tag in index.html
    var post_list = document.getElementById("post-list");
    post_list.insertAdjacentHTML("afterend",createPostHTML(post));

    /* 
     * TODO: Save the post to local storage by passing in the post object as 
     * a parameter to the save function
     * DON'T DO UNTIL SPECIFIED IN THE WRITE-UP
     */

     savePost(post);
}

/**
 * This is the template HTML for a blog post, and all that needs to be done
 * is filling in the id, title, and summary for a post.
 * @param {object} post - The post to translate into HTML
 * @returns {string} HTML representing the post passed in
 */
function createPostHTML(post) {

    // Replace the inside of each ${} with the correct values described
    let postHTML = 
        `<li id="${post.id}">
            <h2>${post.title}</h2>
            <p>${post.summary}</p>
            <br>
            <button onclick="updatePost(this)">Edit</button>
            <button onclick="deletePost(this)">Delete</button>
        </li>`;

    return postHTML;
}

/**
 * Saves a post object to local storage
 * @param {object} post - The post contents to save
 */
function savePost(post) {

    console.log("saving");
    // TODO: Grab the posts array from local storage
    var posts = JSON.parse(localStorage.getItem("posts"));
    console.log(posts);

    // TODO: Do a null check. If the posts array is null, then set to an empty 
    // array. Otherwise, the posts array exists and you can continue
    if (posts==null){
        posts = [];
    } ;

    // TODO: Add the passed in post parameter to the array
    posts.push(post);
    // TODO: Update local storage with the new array (Since a post was added)
    localStorage.setItem("posts",JSON.stringify(posts));
}

export { createPost, createPostHTML };