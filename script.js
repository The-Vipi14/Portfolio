 // Video Modal Elements
    const videoModal = document.getElementById("videoModal");
    const modalVideo = document.getElementById("modalVideo");
    const closeVideoBtn = document.querySelector(".close");

    // Project Details Modal (create dynamically)
    const detailsModal = document.createElement("div");
    detailsModal.className = "modal";
    detailsModal.id = "detailsModal";
    detailsModal.innerHTML = `
        <div class="modal-content">
            <span class="close-details">&times;</span>
            <h3 id="detailsTitle"></h3>
            <p id="detailsText"></p>
        </div>
    `;
    document.body.appendChild(detailsModal);
    const detailsTitle = document.getElementById("detailsTitle");
    const detailsText = document.getElementById("detailsText");
    const closeDetailsBtn = document.querySelector(".close-details");

    // Open video modal
    document.querySelectorAll(".see-project-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            modalVideo.src = btn.dataset.video;
            videoModal.style.display = "block";
        });
    });

    // Close video modal
    closeVideoBtn.addEventListener("click", () => {
        videoModal.style.display = "none";
        modalVideo.pause();
        modalVideo.currentTime = 0;
    });

    // Open project details modal
    document.querySelectorAll(".project-details-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            detailsTitle.textContent = btn.dataset.title;
            detailsText.textContent = btn.dataset.details;
            detailsModal.style.display = "block";
        });
    });

    // Close details modal
    closeDetailsBtn.addEventListener("click", () => {
        detailsModal.style.display = "none";
    });

    // Close modals on outside click
    window.addEventListener("click", (e) => {
        if (e.target === videoModal) {
            videoModal.style.display = "none";
            modalVideo.pause();
            modalVideo.currentTime = 0;
        }
        if (e.target === detailsModal) {
            detailsModal.style.display = "none";
        }
    });

    // ============================================= skill ================================= //
    document.addEventListener("DOMContentLoaded", () => {
        const skills = document.querySelectorAll(".skill");

        skills.forEach(skill => {
            const percent = skill.getAttribute("data-percent");
            const progress = skill.querySelector(".progress");
            progress.style.width = percent + "%";
        });
    });     



// ================================ project scroll ========================================= //

  window.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.projects');
    container.scrollLeft = container.scrollWidth;
  });
