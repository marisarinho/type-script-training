export class Weight{
    private pesos: number[];

    constructor( notas : number[]){
        this.pesos = notas;
    }

    public getPesoQuestao( posicaoArray:number): number{
        return this.pesos[posicaoArray] || 0;
    }
}