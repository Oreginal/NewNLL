
  // document.addEventListener('DOMContentLoaded', function () {
  //   const links = document.querySelectorAll('a');

  //   links.forEach(function (link) {
  //     link.addEventListener('click', function (event) {
  //       event.preventDefault();
  //       const targetPage = this.getAttribute('href');

  //       // Apply a fade-out effect
  //       document.body.style.opacity = 0;

  //       // After a short delay, navigate to the new page
  //       setTimeout(function () {
  //         window.location.href = targetPage;
  //       }, 500); // Adjust the delay to match the CSS transition duration
  //     });
  //   });

  //   // Apply a fade-in effect when the new page is loaded
  //   window.addEventListener('pageshow', function () {
  //     document.body.style.opacity = 1;
  //   });
  // });

  function showPopup() {
    event.preventDefault();

    document.getElementById("popupModal").style.display = "block";
}

function closePopup() {
    document.getElementById("popupModal").style.display = "none";
}

