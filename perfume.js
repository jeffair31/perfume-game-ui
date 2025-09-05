document.addEventListener("DOMContentLoaded", () => {

  class Perfume {
    constructor(name, scent) {
      this.name = name;
      this.scent = scent;
      this.presenter = "???";
    }

    revealPresenter() {
      const input = document.getElementById("codeInput").value.trim().toLowerCase();
      // รหัสต้องเป็นวันเกิด + yellow + น้ำหอม
      const correctCode = "230300yellow"; // ตัวอย่าง: 23 Mar + yellow

      if (input === correctCode) {
        document.getElementById("presenterText").textContent = "🌟 Presenter: Renjun 💚";
        document.getElementById("hintEmoji").textContent = "🎉💛🦊🍋"; // hint emoji 4 ตัว
        document.getElementById("hintPopup").classList.add("show");
      } else {
        document.getElementById("errorPopup").classList.add("show");
      }
    }

    changeScent(scent, color) {
      document.querySelector(".scent").textContent = `🌿 Scent: ${scent}`;
      document.querySelector(".container").style.backgroundColor = color;
    }
  }

  const dreamPerfume = new Perfume("Fresh & Bright", "citrus, clean, airy");

  // เปลี่ยนกลิ่นและปรับขนาดรูป
  document.querySelectorAll(".buttons button").forEach(btn => {
    btn.addEventListener("click", () => {
      let scent = btn.dataset.scent;
      let color = btn.dataset.color;

      let scentDescription = "";
      let perfumeWidth = "150px";

      if (scent.includes("Citrus")) {
        scentDescription = "สดชื่นแบบซิตรัสสุด ๆ 🍋 สดใสเหมือนเช้าวันใหม่";
        perfumeWidth = "160px";
      }
      if (scent.includes("Floral")) {
        scentDescription = "หวานละมุน กลิ่นดอกไม้เบา ๆ 🌷 น่ารักมีเสน่ห์";
        perfumeWidth = "180px";
      }
      if (scent.includes("Fresh")) {
        scentDescription = "สดใส มีชีวิตชีวา 🍃 ลุคน่ารักทันสมัย มีกลิ่นสะอาด ๆ ชวนยิ้มทุกครั้ง";
        perfumeWidth = "150px";
      }

      document.querySelector(".scent").textContent = `🌿 Scent: ${scentDescription}`;
      document.querySelector(".container").style.backgroundColor = color;

      const perfumeImg = document.getElementById("perfumeImg");
      perfumeImg.style.width = perfumeWidth;
      perfumeImg.classList.add("bounce");
      setTimeout(() => perfumeImg.classList.remove("bounce"), 500);

      const miniUI = document.querySelector(".ui-preview");
      miniUI.classList.add("shake");
      setTimeout(() => miniUI.classList.remove("shake"), 500);
    });
  });

  // ปุ่ม reveal presenter
  document.getElementById("revealPresenter").addEventListener("click", () => {
    dreamPerfume.revealPresenter();
  });

  // ปิด popup
  document.getElementById("closePopup").addEventListener("click", () => {
    document.getElementById("hintPopup").classList.remove("show");
  });

  document.getElementById("closeError").addEventListener("click", () => {
    document.getElementById("errorPopup").classList.remove("show");
  });

});
