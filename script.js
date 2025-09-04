 const btn = document.querySelector(".logo-aside");
    const sidebar = document.getElementById("sidebar");

    btn.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });