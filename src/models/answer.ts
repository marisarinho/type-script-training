export class Answer {
    private name: string;
    private answer: number[];

    constructor(name: string, answer: number[]) {
        this.name = name;
        this.answer = answer;
    }

    public getAnswers(): number[] {
        return this.answer; 
    }

    public getName(): string {
        return this.name;
    }
}
