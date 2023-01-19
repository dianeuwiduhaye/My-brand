function createBlog() {
    titleValue = document.getElementById("titleBlog").value;
    bodyValue = document.getElementById("bodyBlog").value;

    if (titleValue.length > 0 && bodyValue.length > 0) {
        var blog = { "title": titleValue, "body": bodyValue, "likes": 0 };

        var result = JSON.parse(localStorage.getItem("blog32") || "[]");
        console.log("result100" + result);
        console.log("result100" + typeof result);
        result.push(blog);


        localStorage.setItem("blog32", JSON.stringify(result));
        titleBlog.value = "";
        bodyBlog.value = "";
        alert("Blog created succesfully!");
        getBlogs();
    } else {
        alert("Invalid title or blog body!");
    }
}


function getBlogs(){
    document.getElementById("blogsDisplay").innerHTML = "";

    var blogs = JSON.parse(localStorage.getItem("blog32") || "[]");

    let blogsDisplay = document.getElementById("blogsDisplay");


    if(blogs != null){

        blogs.forEach(function(blog, index) {
            let li = document.createElement("li");
            li.innerText = "Title: " + blog.title + " Body: " + blog.body + " Likes: " + blog.likes;

            var editbutton = document.createElement("button");
            editbutton.innerHTML = 'Edit';
            editbutton.onclick = function(){
                editBlog(blog.title, blog.body);
            };

            var deletebutton = document.createElement("button");
            deletebutton.innerHTML = 'Delete';
            deletebutton.onclick = function(){
                deleteBlog(blog.title);
            };

            var likebutton = document.createElement("button");
            likebutton.innerHTML = 'Like';
            likebutton.onclick = function(){
                likeABlog(blog.title);
            };

            blogsDisplay.appendChild(li);
            blogsDisplay.appendChild(deletebutton);
            blogsDisplay.appendChild(editbutton);
//            blogsDisplay.appendChild(likebutton);
        });

    }
}

function getBlogsViewer(){
    document.getElementById("blogsDisplay").innerHTML = "";

    var blogs = JSON.parse(localStorage.getItem("blog32") || "[]");

    let blogsDisplay = document.getElementById("blogsDisplay");


    if(blogs != null){

        blogs.forEach(function(blog, index) {
            let li = document.createElement("li");
            li.innerText = "Title: " + blog.title + " Body: " + blog.body + " Likes: " + blog.likes;


            var likebutton = document.createElement("button");
            likebutton.innerHTML = 'Like';
            likebutton.onclick = function(){
                likeABlog(blog.title);
            };

            blogsDisplay.appendChild(li);
            blogsDisplay.appendChild(likebutton);
        });

    }
}


function likeABlog(title) {
    var blogs = JSON.parse(localStorage.getItem("blog32") || "[]");

    blogs.forEach(function(blog, index) {

        if (blog.title == title) {
            likes = parseInt(blog.likes) + 1;
            blog.likes = likes;
            localStorage.setItem("blog32", JSON.stringify(blogs));
        }
    });

    getBlogsViewer();

}

function editBlog(title, body) {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";

    document.getElementById('ediTitleContact').value = title;
    document.getElementById('editBodyBlog').value = body;

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    updateBUtton = document.getElementById('updateButton');

    updateBUtton.onclick = function() {
        console.log("updateBUtton" + updateBUtton);
        ediTitleContact = document.getElementById('ediTitleContact').value;
        editBodyBlog = document.getElementById('editBodyBlog').value;


        var blogs = JSON.parse(localStorage.getItem("blog32") || "[]");

        blogs.forEach(function(blog, index) {

            if (blog.title == title) {
                blog.title = ediTitleContact;
                blog.body = editBodyBlog;
                localStorage.setItem("blog32", JSON.stringify(blogs));
            }
        });

        getBlogs();

        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    };
}


function deleteBlog(title) {
    var blogs = JSON.parse(localStorage.getItem("blog32") || "[]");

    blogs.forEach(function(blog, index) {
        console.log("index" + index);

        if (blog.title == title) {
            console.log("index 2" + index);
            blogs.splice(index, 1);
            localStorage.setItem("blog32", JSON.stringify(blogs));
            getBlogs();

        }
    });
}