function scrollToTop() {
    document.documentElement.scrollTop = 0;
}

var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  // If last image it wraps back to the beginning
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  // Hides all other slides
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  // Hides slide once its been shown
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  // Displays slide
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function printBlogs() {
    // Gets todays date
    var today = new Date();
    var date = today.getDate() + '.' + (today.getMonth()+1) + '.' + today.getFullYear();

    // Gets all inputs from the form
    var title = document.getElementById("blogTitle").value;
    var author = document.getElementById("blogAuthor").value;
    var post = document.getElementById("blogPost").value;
    var rating = document.getElementById("rating").value;

    // Checks all sections are completed
    if(title == 0 || author == 0 || post == 0) {
        alert("All sections need to be filled in before posting!");
    } else {

        // Adds date to author
        var author = "By " + document.getElementById("blogAuthor").value +  " on " + date;

        // Formats blog title and author
        var titles = document.createElement("H1");
        var node = document.createTextNode(title);
        titles.appendChild(node);
        var brk = document.createElement('br');
        titles.appendChild(brk);
        var brk = document.createElement('br');
        titles.appendChild(brk);
        var node = document.createTextNode(author);
        titles.appendChild(node);
        var brk = document.createElement('br');
        titles.appendChild(brk);
        var brk = document.createElement('br');
        titles.appendChild(brk);
        
        // Formats blog post
        var content = document.createElement("P");
        var node = document.createTextNode(post);
        content.appendChild(node);
        var brk = document.createElement('br');
        content.appendChild(brk);
        var brk = document.createElement('br');
        content.appendChild(brk);

        // Formats rating
        rateDesc = "Travel Rating: ";
        var detail = document.createElement("detail");
        var node = document.createTextNode(rateDesc);
        detail.appendChild(node);

        // Sets variables for each star
        var img = document.createElement('img'); 
        img.src =  "star.jpg"; 
        var img2 = document.createElement('img'); 
        img2.src =  "star.jpg"; 
        var img3 = document.createElement('img'); 
        img3.src =  "star.jpg"; 
        var img4 = document.createElement('img'); 
        img4.src =  "star.jpg"; 
        var img5 = document.createElement('img'); 
        img5.src =  "star.jpg"; 
        var brk = document.createElement('br'); 
        var brk2 = document.createElement('br'); 
        
        // Pop-up alert for posting
        if (confirm("Are you sure you want to post?")) {
            var element = document.getElementById("outputBlogs");
            element.insertBefore(titles, element.childNodes[2]);
            element.insertBefore(content, element.childNodes[3]);
            element.insertBefore(detail, element.childNodes[4]);
            
            // Decides amount of stars needed
            if (rating == 1) {
                element.insertBefore(img, element.childNodes[5]);
                element.insertBefore(brk, element.childNodes[6]);
                element.insertBefore(brk, element.childNodes[7]);
                element.insertBefore(brk2, element.childNodes[7]);
            } else if (rating == 2) {
                element.insertBefore(img, element.childNodes[5]);
                element.insertBefore(img2, element.childNodes[6]);
                element.insertBefore(brk, element.childNodes[7]);
            } else if (rating == 3) {
                element.insertBefore(img, element.childNodes[5]);
                element.insertBefore(img2, element.childNodes[6]);
                element.insertBefore(img3, element.childNodes[7]);
                element.insertBefore(brk, element.childNodes[8]);
                element.insertBefore(brk2, element.childNodes[8]);
            } else if (rating == 4) {
                element.insertBefore(img, element.childNodes[5]);
                element.insertBefore(img2, element.childNodes[6]);
                element.insertBefore(img3, element.childNodes[7]);
                element.insertBefore(img4, element.childNodes[8]);
                element.insertBefore(brk, element.childNodes[9]);
                element.insertBefore(brk2, element.childNodes[9]);
            } else if (rating == 5) {
                element.insertBefore(img, element.childNodes[5]);
                element.insertBefore(img2, element.childNodes[6]);
                element.insertBefore(img3, element.childNodes[7]);
                element.insertBefore(img4, element.childNodes[8]);
                element.insertBefore(img5, element.childNodes[9]);
                element.insertBefore(brk, element.childNodes[10]);
                element.insertBefore(brk2, element.childNodes[10]);
            }
            // Sets form back to empty
            document.getElementById("blog").reset();
        } 
    } 
}

function editBlogs(button) {
    var x = document.getElementById("outputBlogs");
    // Checks if already editing the blog
    if (x.contentEditable == "true") {
      x.contentEditable = "false";
      button.innerHTML = "Edit Blogs";
    } else {
      x.contentEditable = "true";
      button.innerHTML = "Save Blogs";
    }
}

