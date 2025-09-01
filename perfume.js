class Perfume {
  constructor(name, scent) {
    this.name = name;
    this.scent = scent;
    this.presenter = "???";
    this.clickCount = 0;
  }

  revealPresenter() {
    const btn = document.getElementById("revealPresenter");
    const miniUI = document.querySelector(".ui-preview");
    const errorMsg = document.querySelector(".error-msg");
    const hintPopup = document.getElementById("hintPopup");

    this.clickCount++;

    // Flash button + sparkle mini UI
    btn.classList.add("flash");
    miniUI.classList.add("sparkle");
    setTimeout(() => {
      btn.classList.remove("flash");
      miniUI.classList.remove("sparkle");
    }, 600);

    // ถ้ายังไม่ครบ 6 ครั้ง → error
    if (this.clickCount < 6) {
      errorMsg.classList.add("show");
      setTimeout(() => errorMsg.classList.remove("show"), 1000);
      return;
    }

    // ครบ 6 ครั้ง → แสดง popup
    hintPopup.classList.add("show");
  }

  changeScent(scent, color) {
    document.querySelector(".scent").textContent = `🌿 Scent: ${scent}`;
    document.querySelector(".container").style.backgroundColor = color;
  }
}

const dreamPerfume = new Perfume("Fresh & Bright", "citrus, clean, airy");

document.querySelectorAll(".buttons button").forEach(btn => {
   btn.addEventListener("click", () => {
    let scent = btn.dataset.scent;
    let color = btn.dataset.color;

    // ปรับคำอธิบายกลิ่นใหม่
    let scentDescription = "";
    if(scent.includes("Citrus")) scentDescription = "สดชื่นแบบซิตรัสสุด ๆ 🍋 สดใสเหมือนเช้าวันใหม่";
    if(scent.includes("Floral")) scentDescription = "หวานละมุน กลิ่นดอกไม้เบา ๆ 🌷 น่ารักมีเสน่ห์";
    if(scent.includes("Fresh")) scentDescription = "สดใส มีชีวิตชีวา 🍃 ลุคน่ารักทันสมัย มีกลิ่นสะอาด ๆ ชวนยิ้มทุกครั้ง";

    document.querySelector(".scent").textContent = `🌿 Scent: ${scentDescription}`;
    document.querySelector(".container").style.backgroundColor = color;

    const perfumeImg = document.getElementById("perfumeImg");
    perfumeImg.classList.add("bounce");
    setTimeout(() => perfumeImg.classList.remove("bounce"), 500);

    const miniUI = document.querySelector(".ui-preview");
    miniUI.classList.add("shake");
    setTimeout(() => miniUI.classList.remove("shake"), 500);
  });
});

document.getElementById("revealPresenter").addEventListener("click", () => {
  dreamPerfume.revealPresenter();
});

// ปิด popup
document.getElementById("closePopup").addEventListener("click", () => {
  document.getElementById("hintPopup").classList.remove("show");
});
