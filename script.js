// Mengambil semua elemen "Read More" pada halaman
const readMoreButtons = document.querySelectorAll("a");

// Mengatur event listener untuk setiap tombol "Read More"
readMoreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const figcaption = button.parentNode;
    const paragraph = figcaption.querySelector("p");

    // Toggle class "expanded" untuk mengubah tampilan teks saat tombol diklik
    if (paragraph.classList.contains("expanded")) {
      // Jika sudah di-expand, kembalikan ke tampilan awal
      paragraph.classList.remove("expanded");
      button.textContent = "Read More";
    } else {
      // Jika belum di-expand, tambahkan class "expanded" untuk mengubah tampilan
      paragraph.classList.add("expanded");
      button.textContent = "Read Less";
    }
  });
});
