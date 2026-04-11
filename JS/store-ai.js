(function () {
  const d = document;
  const $messages = d.getElementById("storeAiMessages");
  const $form = d.getElementById("storeAiForm");
  const $input = d.getElementById("storeAiInput");
  if (!$messages || !$form || !$input) return;

  function appendBubble(text, who) {
    const row = d.createElement("div");
    row.className = "store-ai-row " + (who === "user" ? "is-user" : "is-bot");
    const bubble = d.createElement("p");
    bubble.className = "store-ai-bubble";
    bubble.textContent = text;
    row.appendChild(bubble);
    $messages.appendChild(row);
    $messages.scrollTop = $messages.scrollHeight;
  }

  function replyForQuestion(q) {
    const t = (q || "").trim().toLowerCase();
    const selected = (localStorage.getItem("selectedAccountType") || "").toLowerCase();

    if (!t) {
      return "Escribe una pregunta corta y te respondo.";
    }
    if (/^(hola|hey|buenas|hi)\b/.test(t) || t === "hola") {
      return "¡Hola! Estoy para ayudarte con la tienda X-GAMES.";
    }
    if (/(precio|precios|costo|cuánto|cuesta)/.test(t)) {
      return "Los precios dependen de cada juego. Elige una tarjeta y usa Comprar cuando estés listo.";
    }
    if (/(comprar|compra|pagar|pago)/.test(t)) {
      return "Para comprar, pulsa Comprar en el juego que quieras. Si tienes dudas de pago, revisa el proceso al finalizar.";
    }
    if (/(cuenta|gold|silver|diamond|planes)/.test(t)) {
      if (selected) {
        return (
          "Tu última cuenta elegida en Cuentas es: " +
          selected +
          ". Puedes cambiarla en la página Cuentas antes de comprar."
        );
      }
      return "En Cuentas puedes elegir Gold, Silver o Diamond. La selección se guarda para cuando compres.";
    }
    if (/(juego|juegos|catálogo|catalogo|store|tienda)/.test(t)) {
      return "Aquí ves el catálogo de juegos. Pasa el cursor sobre una portada para ver el personaje y usa Comprar.";
    }
    if (/(envío|envio|entrega|digital)/.test(t)) {
      return "Si tu compra es digital, la entrega suele ser por descarga o código según el producto.";
    }
    if (/(gracias|thanks)/.test(t)) {
      return "¡De nada! Si necesitas algo más, escríbelo aquí.";
    }
    return "Soy el asistente de la tienda. Prueba: precios, comprar, cuentas o juegos.";
  }

  appendBubble("Pregúntame por la tienda, compras o cuentas.", "bot");

  $form.addEventListener("submit", function (e) {
    e.preventDefault();
    const text = $input.value;
    if (!text.trim()) return;
    appendBubble(text, "user");
    $input.value = "";
    appendBubble(replyForQuestion(text), "bot");
  });
})();
