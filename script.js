function avaliarBemEstar() {
  const form = document.getElementById('bemestarForm');
  let total = 0;
  for (let i = 1; i <= 5; i++) {
    total += parseInt(form['q' + i].value);
  }

  const max = 25;
  const div = document.getElementById('resultadoBemestar');
  let mensagem = `Seu resultado: ${total} de ${max}.\n\n`;

  if (total <= 12) {
    mensagem += "Pode haver sinais de baixo bem-estar. Procure desacelerar e, se possível, converse com um profissional.";
  } else {
    mensagem += "Seu bem-estar parece em bom nível. Continue cultivando hábitos saudáveis!";
  }

  div.innerText = mensagem + "\n\n⚠️ Este teste é apenas reflexivo, não diagnóstico.";
}
