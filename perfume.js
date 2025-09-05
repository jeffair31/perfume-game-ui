class Perfume {
  constructor(name, scent) {
    this.name = name;
    this.scent = scent;
  }

  revealPresenter() {
    const input = document.getElementById("codeInput").value.trim().toLowerCase();
    const correctCode = "230300yellowjanua";

    if(input === correctCode){
      document.getElementById("presenterText").textContent = "🌟 Presenter: Renjun 💚";
      document.getElementById("hintPopup").classList.add("show");
      document.getElementById("codePopup").classList.remove("show");
    } else {
      document.getElementById("errorPopup").classList.add("show");
    }
  }

  changeScent(scent, color, description) {
    document.querySelector(".scent").textContent = `🌿 Scent: ${description}`;
    document.querySelector(".container").style.backgroundColor = color;

    const perfumeImg = document.getElementById("perfumeImg");
    perfumeImg.classList.add("bounce","scale");
    setTimeout(()=>perfumeImg.classList.remove("bounce","scale"),500);

    const miniUI = document.querySelector(".ui-preview");
    miniUI.classList.add("shake");
    setTimeout(()=>miniUI.classList.remove("shake"),500);
  }
}

document.addEventListener("DOMContentLoaded",()=>{
  const dreamPerfume = new Perfume("Fresh & Bright","citrus, clean, airy");

  // เปลี่ยนกลิ่น
  document.querySelectorAll(".buttons button").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const scent = btn.dataset.scent;
      const color = btn.dataset.color;
      let description="";
      if(scent.includes("Pear")) description="🍐 Fresh and sweet-sour fruity aroma";
      else if(scent.includes("Freesia")) description="🌼 Soft, floral, delicate";
      else if(scent.includes("Bergamot")) description="🍋 Citrus and bright, zesty";

      dreamPerfume.changeScent(scent,color,description);
    });
  });

  // ปุ่มโชว์ popup ใส่รหัส
  document.getElementById("showCodeButton").addEventListener("click",()=>{
    document.getElementById("codePopup").classList.add("show");
  });

  // ปุ่ม Confirm ตรวจรหัส
  document.getElementById("checkCodeButton").addEventListener("click",()=>{
    dreamPerfume.revealPresenter();
  });

  // ปิด popup ใส่รหัส
  document.getElementById("closeCodePopup").addEventListener("click",()=>{
    document.getElementById("codePopup").classList.remove("show");
  });

  // ปิด popup เฉลย
  document.getElementById("closePopup").addEventListener("click",()=>{
    document.getElementById("hintPopup").classList.remove("show");
  });

  // ปิด popup error
  document.getElementById("closeError").addEventListener("click",()=>{
    document.getElementById("errorPopup").classList.remove("show");
  });
});
