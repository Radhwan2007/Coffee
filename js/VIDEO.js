const video = document.getElementById("videoIntro");

  // نخلي المستخدم هو الي يشغّل الفيديو، وقتها نعمل fullscreen
  video.addEventListener('play', () => {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) { // Safari
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { // IE11
      video.msRequestFullscreen();
    }

    // نعمل timeout كان بعد ما الفيديو يبدأ
    setTimeout(() => {
      video.pause(); // نوقف الفيديو
      video.style.display = "none";
      window.location.href = "index.html"; // نحيلو للصفحة الرئيسية
    }, 5000);
  });
  