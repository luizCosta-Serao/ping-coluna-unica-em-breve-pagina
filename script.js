/*Criação do parágrafo de erro*/ 
const paragraph = document.createElement("p")
paragraph.style.fontSize = ".875rem"
paragraph.style.marginLeft = "1.3rem"

/*Selecionando o elemento button*/ 
const submit = document.querySelector(".ping form button")

//Adicionando um evento ao clique na const submit
submit.addEventListener("click", (e) => {
  //Prevenindo o comportamento padrão do form
  e.preventDefault()

  //Selecionando o elemento input do tipo email
  const email = document.querySelector(".ping form input")

  //Regex para email
  const emailRegex = /\S+@\S+\.\S+/

  //Validação do input email
  if(!email.value.match(emailRegex)) {
    //Inserindo o parágrafgo de erro no caso de ser um email inválido
    paragraph.style.display = "block"

    //Definindo o matchMedia
    const media = window.matchMedia("(max-width:678px)")
    //Estilo para telas maiores que 678px
    if(!media.matches) {
      submit.insertAdjacentElement("afterend", paragraph)
      paragraph.style.textAlign = "start"

    //Estilo para telas menores que 678px
    } else {
      submit.insertAdjacentElement("beforebegin", paragraph)
      paragraph.style.textAlign = "center"
      paragraph.style.position = "relative"
      paragraph.style.top = "-8px"
    }

    //Estilizando a borda do email em caso de email inválido
    email.style.borderColor = "red"

    //estilizando e inserindo texto no parágrafo em caso de erro
    paragraph.style.color = "red"
    paragraph.innerText = "Please provide a valid email address"
  } else {
    //Caso seja bem sucedido o email, mudar estilização do input email 
    email.style.borderColor = "green"
    email.value = ""

    //Caso seja bem sucedido o email, mudar estilização do parágrafo
    paragraph.style.color = "green"
    paragraph.innerText = "Email sent successfully"

    //Voltando ao estado inicial
    setTimeout(() => {
      email.style.borderColor = "hsl(223, 100%, 88%)"
      paragraph.innerText = ""
      paragraph.style.display = "none"
    },2000)
  }
})