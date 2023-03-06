/* 1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça

{

K = K + 1;

SOMA = SOMA + K;

}
imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA? */
const teste1 = () => {
  const INDICE: number = 13;
  let SOMA: number = 0;
  let k: number = 0;
  
  while (k < INDICE) {
    k += 1;
    SOMA += k;
  }
  console.log(SOMA);
};

export default teste1;
