let sliderElement = document.querySelector("#slider"); /*Seleciona o elemento id=slider que será o nosso 
controle deslizante*/

let buttonElement = document.querySelector("#button"); /* Seleciona o elemento id=button, que irá gerar nossa senha*/

let sizePassword = document.querySelector("#valor"); /* Seleciona o leemento id=valor que exibe o valor selecionado para a senha.*/
let password = document.querySelector("#password"); /* Este elemento é usado para exibir a senha gerada.  */

let containerPassword = document.querySelector("#container-password"); /* Este elemento é usado para exibir a senha gerada.  */

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!'; /* Aqui definimos todos os caracteres
que podem ser usados em nossa senha.  */
let novaSenha = ''; /* Inicializa uma variável vazia que será usada para armazenar a nova senha gerada.  */

sizePassword.innerHTML = sliderElement.value; /* Esta linha o valor inicial do controle deslizante, para que o usuário
saiba o tamanho antes de interagir com o controle deslizante.  */

/* Sempre que o valor do controle deslizante muda, este elemento é chamado
e reflete as alterações em tempo real no nosso HTML.  */
slider.oninput = function() {
  sizePassword.innerHTML = this.value;
}

/* Definimos uma função que possámos gerar uma senha.  */

function generatePassword(){ 

/* Inicializamos uma varíavel pass como uma String vazia, será essa váriavel que irá armazenar a senha gerada. */
  let pass = '';

  /*Inicialização: let i = 0, n = charset.length; inicia a variável i com o 
  valor 0 e n com o comprimento da string charset. n representa o número total 
  de caracteres disponíveis em charset.
Condição: i < sliderElement.value; especifica que o loop continuará enquanto i 
for menor que o valor do controle deslizante (sliderElement.value). Esse valor determina o número de caracteres que serão incluídos na senha gerada.
Incremento: ++i incrementa i em 1 após cada iteração do loop.*/

/* ass += charset.charAt(Math.floor(Math.random() * n));
Seleção de Caracter Aleatório: Math.random() gera um número aleatório entre 0 (inclusivo) e
 1 (exclusivo). Multiplicar por n (charset.length) escala esse número para estar dentro do 
 intervalo do comprimento de charset.
Math.floor(...) arredonda o número para baixo para obter um número inteiro entre 0 e n - 1, 
que são os índices válidos para acessar caracteres na string charset.
charset.charAt(...) retorna o caractere na posição especificada.
pass += ... adiciona o caractere selecionado à variável pass, construindo a senha um caractere 
de cada vez. */
  for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
    pass += charset.charAt(Math.floor(Math.random() * n));
  } 
  
  console.log(pass) /* imprime a senha gerada na janela do console do navegador. Isso é útil para depuração ou 
  verificação da senha gerada durante o desenvolvimento. */

  containerPassword.classList.remove("hide"); /* emove a classe hide do elemento com a classe containerPassword, tornando-o visível na interface do usuário. Isso geralmente é usado 
  para exibir o contêiner que contém a senha gerada. */
  password.innerHTML = pass;  /*  define o conteúdo HTML do elemento com a classe password para a senha gerada, exibindo a senha na página. */
  novaSenha = pass; /* rmazena a senha gerada na variável novaSenha, que pode ser usada posteriormente, como na função de copiar a senha. */
}

function copyPassword(){
  alert("Senha copiada com sucesso!") /* mostra uma mensagem de alerta para o usuário informando que a senha foi copiada com sucesso. */
  navigator.clipboard.writeText(novaSenha); /* sa a API do Clipboard para copiar o valor de novaSenha 
  (a senha gerada) para a área de transferência do sistema, permitindo que o usuário cole a senha em outro lugar. */
}