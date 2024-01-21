function openBatikPopup(title, description, imagePath) {
  var popup = document.getElementById("popupBatik");
  document.getElementById("popupBatikTitle").innerText = title;
  document.getElementById("popupBatikDescription").innerText = description;
  document.getElementById("popupImage").src = imagePath;
  popup.style.display = "block";
}

function closeBatikPopup() {
  try {
    var popup = document.getElementById("popupBatik");
    popup.style.display = "none";
} catch (error) {
    console.error("Terjadi kesalahan:", error);
}
}

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
    const isAtTop = scrolled === 0;
    
    if (isAtTop) {
      navbar.classList.remove('scrolled');
    } else {
      navbar.classList.add('scrolled');
    }
  
    // Add sticky functionality here
    const isSticky = scrolled > 100; // Adjust the value (100) to set the scroll position where the navbar becomes sticky
  
    if (isSticky) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  });







