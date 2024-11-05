/*
<div class="card">
<h3>Sopa de Agnoline</h3>
<img src="./images/bolinho-de-chuva.jpg" alt="">
<p>Receita de alguma coisa legal que você vai ver depois</p>
<span class="button"><a href="">Ver Receita</a></span>
</div>
*/


const items = [
  {
    titulo: 'Sopa de Agnoline',
    imagem: './images/agnoline.webp',
    mensagem: 'Receita de alguma coisa legal que você vai ver depois',
    msg_botao: 'Ver Receita'
  },
  {
    titulo: 'Bolinho de chuva',
    imagem: './images/bolinho-de-chuva.jpg',
    mensagem: 'Receita de alguma coisa legal que você vai ver depois',
    msg_botao: 'Ver Receita'
  }
]


for (let i = 0; i < items.length; i++) {
  const item = items[i]
  // div .card
  const divCard = document.createElement("div")
  divCard.setAttribute("class", "card")

  // h3
  const h3 = document.createElement("h3")
  h3.innerText = item.titulo
  divCard.appendChild(h3)


  // img
  const img = document.createElement("img")
  img.setAttribute("src", item.imagem)
  divCard.appendChild(img)

  // p
  const p = document.createElement("p")
  p.innerText = item.mensagem
  divCard.appendChild(p)


  // span .button -> a
  const button = document.createElement("span")
  button.setAttribute("class", "button")

  const link = document.createElement("a")
  link.setAttribute("href", "./receitas/fuba.html")
  link.innerText = item.msg_botao
  button.appendChild(link)
  divCard.appendChild(button)

  // Adicionar dentro do content
  const content = document.querySelector(".content")
  content.appendChild(divCard)


}
