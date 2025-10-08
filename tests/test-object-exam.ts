import { Exam } from '../src/models/exam.js';
import { Weight } from '../src/models/weight.js';
import { Answer } from '../src/models/answer.js';


const gabarito = new Answer("João",[1, 2, 3, 4, 5]);

const pesos = new Weight([10, 20, 20, 25, 25]);
const provaDeMatematica = new Exam(gabarito, pesos);

const alunoJoao = new Answer("João",[1, 2, 3, 4, 5]);
