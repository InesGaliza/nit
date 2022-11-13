let url 

//este é o botão para chamar a API
$ ('#button').on('click', dogs_race);

//esta função é chamada quando clico no botão
function dogs_race(){
    //esta é a raça do cão
   let input = $('.raca').val();
   //é o array com as imagens dos cães
   let imgarray = [];
   //url onde é feito o pedido (https://dog.ceo/dog-api/)
   url = `https://dog.ceo/api/breed/${input}/images`;

   //dar remove à imagem já existente
   //$('li').remove();

   //faz o pedido à API
   fetch(url)
      .then(function (resposta) { 
        return resposta.json();
      })
      .then(function (dados) {
        //o número aletório para ir buscar a imagem
        //vai gerar um número random entre 0 e o numero da mensagem
        imgnumber = Math.floor(Math.random() * (dados.message.length-1));

        //a posição do array
        img = dados.message[imgnumber];

        //a junção da raça com numero da fotografia
        imageId = input + imgnumber

        //adiciona o array das imagens
        imgarray.push(imageId);

        //aqui estou a adicionar o li, o titulo(h2) da raça(input), a imagem e o botão para remover a imagem 
        $('.resultados').prepend(`<li  id="${imageId}"> <h2>${input}</h2> <img src="${img}"><input type="button" value="Remove AU AU!" id="button${imageId}"></li>`);

        //ciclo para adicionar os metodos de remove das imagens
        //para cada botao é criada uma funcao espefica para cada imagem diferente
        for (let i = 0; i< imgarray.length; i++){

          $(`#button${imgarray[i]}`).on('click', function () {
            $(`#${imgarray[i]}`).remove();
          });
        
        }
      })
      .catch(function (erro) {
        console.log('Ups! Houve um erro.', erro);
      });
}



