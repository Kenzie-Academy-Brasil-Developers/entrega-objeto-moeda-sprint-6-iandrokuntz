const coin = {
    state: 0,
  
    flip: function () {
      // Use "this.state" para acessar a propriedade "state".
      // Configure de forma randômica a propriedade “state” do
      // seu objeto moeda. "STATE" deve receber somente os valores 0 ou 1.
      this.state = Math.floor(Math.random() * 2)
      
    },
  
    toString: function () {
      // Se o valor de "state" for 0, retorne "Heads"
      let text = document.querySelector(".text")
      let texto = document.createElement("p") 

      if(coin.state === 0){

        texto.innerText = "Tail"
        text.appendChild(texto)

      }
      // Se o valor de "state" for 1, retorne "Tails"

      if(coin.state === 1){

        texto.innerText = "Heads"
        text.appendChild(texto)
        

      }
    },
  

    toHTML: function () {
      
      let img = document.querySelector(".img")
      
      
      if(coin.state === 0){

        let image = document.createElement("div");

        image.style.width = "50px"
        image.style.height = "50px"
        image.style.backgroundImage = "url('./coinObject/assets/coroa.jpg')"
        image.style.backgroundSize = "cover"
        img.appendChild(image)
      }
      // Colocar uma imagem correspondente a essa valor.
      if(coin.state === 1){

        let image = document.createElement("div");

        image.style.width = "50px"
        image.style.height = "50px"
        image.style.backgroundImage = "url('./coinObject/assets/cara.jpg')"
        image.style.backgroundSize = "cover"
        img.appendChild(image)
      }
    },
  };
  
  function display20Flips() {
    // Use um loop para arremessar a moeda 20 vezes.
    for(let i = 0; i < 20; i++){
      
      coin.flip()
      coin.toString()

    }
    // Depois que o seu loop terminar, exiba o resultado na página no formato de TEXTO.
    // Além de exibir os resultados na página, não esqueça
    // de retornar o valor de "results".
    // Caso esqueça de retornar "results", sua função não
    // irá passar nos testes.
  }
  
  function display20Images() {
    // Use um loop para arremessar a moeda 20 vezes.
    for(let i = 0; i < 20; i++){

      coin.flip()
      coin.toHTML()

    }
    // Depois que o seu loop terminar, exiba o resultado na página no formato de IMAGEM.
    // Além de exibir os resultados na página, não esqueça
    // de retornar o valor de "results".
    // Caso esqueça de retornar "results", sua função não
    // irá passar nos testes.
  }

    display20Flips()
    display20Images()