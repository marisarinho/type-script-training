

import { Weight } from "./weight.js";
import { Answer } from "./answer.js";

interface notasFinais {
    nome: string;
    nota: number;
}

export class Exam {
    private weight: Weight;
    private answer: Answer; 
    private answers: Array<Answer>; 

    constructor(answer: Answer, weight: Weight) {
        this.answer = answer;
        this.weight = weight;
        this.answers = [];
    }

    public add(provaDoAluno: Answer): void {
        this.answers.push(provaDoAluno);
    }

   
    public calcularNota(): notasFinais[] {
        const gabarito = this.answer.getAnswers();
        const result: notasFinais[] = [];

        for (const provaDoAluno of this.answers) {
            const respostasDoAluno = provaDoAluno.getAnswers();
            let notaFinal = 0;

            for (let i = 0; i < gabarito.length; i++) {
                if (respostasDoAluno[i] === gabarito[i]) {
                    notaFinal += this.weight.getPesoQuestao(i);
                }
            }
            result.push({
                nome: provaDoAluno.getName(),
                nota: notaFinal,
            });
        }
        return result;
    }

    public avg(): number {
        const notasFinais = this.calcularNota();
        if (notasFinais.length === 0) {
            return 0;
        }

        let somaTotal = 0;
        for (const aluno of notasFinais) {
            somaTotal += aluno.nota;
        }

        return somaTotal / notasFinais.length;
    }

    
    public min(count: number = 1): number[] {
     
        const todasAsNotas = this.calcularNota().map(
            (resultado) => resultado.nota
        );

        todasAsNotas.sort((a, b) => a - b);

        
        return todasAsNotas.slice(0, count);
    }

    
    public max(count: number = 1): number[] {
        const todasAsNotas = this.calcularNota().map(
            (resultado) => resultado.nota
        );

       
        todasAsNotas.sort((a, b) => b - a);

        return todasAsNotas.slice(0, count);
    }

    public lt(limit: number): number[] {
        const todasAsNotas = this.calcularNota().map(
            (resultado) => resultado.nota
        );
        const notasMenores: number[] = [];

        for (const nota of todasAsNotas) {
            if (nota < limit) {
                notasMenores.push(nota);
            }
        }
        return notasMenores;
    }


    public gt(limit: number): number[] {
        const todasAsNotas = this.calcularNota().map(
            (resultado) => resultado.nota
        );
        const notasMaiores: number[] = [];

        for (const nota of todasAsNotas) {
            if (nota > limit) {
                notasMaiores.push(nota);
            }
        }
        return notasMaiores;
    }
}
 