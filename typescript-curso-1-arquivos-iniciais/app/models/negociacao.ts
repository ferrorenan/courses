export class Negociacao {

  // Colocando o private e o nome da var, o typescript criara automaticamente a
  // propriedade como por se eu fizesse:
  // private _data ...

  constructor(
      private _data: Date,
      public readonly quantidade: number,
      public readonly valor: number
  ) {
  }

  get data(): Date {
    return new Date(this._data.getTime());
  }
}