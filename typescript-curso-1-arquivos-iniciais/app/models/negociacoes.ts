import { Negociacao } from './negociacao';

export class Negociacoes {

  private negociacoes: Negociacao[] = [];

  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  // lista(): readonly ReadonlyArray<Negociacao> {}
  lista(): readonly Negociacao[] {
    return this.negociacoes;
  }
}