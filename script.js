document.addEventListener("DOMContentLoaded", () => {
    // 1. CHỨC NĂNG CHUYỂN TRANG QUA TABS (SPA LOGIC)
    const navItems = document.querySelectorAll(".nav-item");
    const sections = document.querySelectorAll(".portfolio-section");
    const navLinksContainer = document.getElementById("navLinks");

    navItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();

            // Loại bỏ class active ở tất cả các tab điều hướng
            navItems.forEach(nav => nav.classList.remove("active"));
            // Thêm class active vào tab hiện tại được click
            item.classList.add("active");

            // Lấy ID mục tiêu cần hiển thị
            const targetId = item.getAttribute("data-target");

            // Ẩn tất cả các Section nội dung và chỉ hiển thị Section được chọn
            sections.forEach(section => {
                section.classList.remove("active");
                if (section.id === targetId) {
                    section.classList.add("active");
                }
            });

            // Sau khi click trên điện thoại, tự động đóng menu rút gọn lại
            if (navLinksContainer.classList.contains("show")) {
                navLinksContainer.classList.remove("show");
            }

            // Tự động cuộn mượt lên đầu trang khi đổi bài tập
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    });

    // 2. CHỨC NĂNG ĐÓNG MỞ HAMBURGER MENU TRÊN DI ĐỘNG
    const menuToggle = document.getElementById("menuToggle");

    menuToggle.addEventListener("click", () => {
        navLinksContainer.classList.toggle("show");
    });
});
