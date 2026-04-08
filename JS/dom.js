import slider from "./slider.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
  slider();

  const renderSelectedAccount = () => {
    const selected = localStorage.getItem("selectedAccountType");
    const $btns = d.querySelectorAll(".buy-btn");

    $btns.forEach(($btn) => {
      const account = $btn.dataset.account;
      const isSelected = selected && account === selected;

      if (isSelected) {
        $btn.textContent = "Comprado";
        $btn.style.backgroundColor = "red";
        $btn.disabled = true;
        $btn.style.borderBottom = "4px solid #6d0000";
      } else {
        $btn.textContent = "Comprar";
        $btn.style.backgroundColor = "";
        $btn.disabled = false;
        $btn.style.borderBottom = "";
      }
    });
  };

  renderSelectedAccount();

  d.addEventListener("click", (ev) => {
    const btn = ev.target?.closest?.(".buy-btn");
    if (!btn) return;

    const account = btn.dataset.account;
    if (!account) return;

    localStorage.setItem("selectedAccountType", account);

    renderSelectedAccount();
  });
})