// Add a scroll listener to the window
window.addEventListener("scroll", function() {
    // Check if the window is scrolled past 100px
    if (window.scrollY > 100) {
      // Add the "scrolled" class to the navigation menu
      document.querySelector(".navigation").classList.add("scrolled");
    } else {
      // Remove the "scrolled" class from the navigation menu
      document.querySelector(".navigation").classList.remove("scrolled");
    }
  });
  
  // Add a hover listener to each navigation link
  document.querySelectorAll(".navigation ul li a").forEach(function(link) {
    link.addEventListener("mouseover", function() {
      // Add the "active" class to the navigation link
      link.parentNode.classList.add("active");
    });
  
    link.addEventListener("mouseout", function() {
      // Remove the "active" class from the navigation link
      link.parentNode.classList.remove("active");
    });
  });
  