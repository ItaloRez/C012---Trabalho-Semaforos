export default class Semaphore {
  //Construtor com max de requisições concorrentes, padrão 1
  constructor(maxRequisicoesConcorrentes = 1) {
    this.requisicoes = [];
    this.requisicoesAtivas = 0;
    this.maxRequisicoesConcorrentes = maxRequisicoesConcorrentes;
  }

  //funcao sendo chamada
  chamarFuncao(funcaoChamada) {
    return new Promise((resolve, reject) => {
      this.requisicoes.push({
        resolve,
        reject,
        funcaoChamada,
      });
      this.proxFuncao();
    });
  }

  //passar para proxima função quando estiver livre o recurso compartilhado
  proxFuncao() {
    if (this.requisicoesAtivas < this.maxRequisicoesConcorrentes) {
      let { resolve, reject, funcaoChamada } = this.requisicoes.shift();
      this.requisicoesAtivas++;
      let req = funcaoChamada();
      req
        .then((res) => resolve(res))
        .catch((err) => reject(err))
        .finally(() => {
          this.requisicoesAtivas--;
          this.proxFuncao();
        });
    }
  }
}
