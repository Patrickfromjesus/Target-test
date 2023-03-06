/* 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),
escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código; */

const teste2 = (n: number) => {
  if (n < 0) throw new Error('Insira apenas números positivos');
  const fiboArr = [0, 1, 1];
  while (fiboArr[fiboArr.length - 1] < n) {
    fiboArr.push(fiboArr[fiboArr.length - 1] + fiboArr[fiboArr.length - 2]);
  }
  const result = fiboArr.includes(n);
  console.log(result);
  return result;
};

export default teste2;
