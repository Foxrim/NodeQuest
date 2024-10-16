import "dotenv/config"
import { say } from 'cowsay';

const name = process.env.NAME;
const campus = process.env.CAMPUS;

console.log(say({ text: `${name} est en ${campus}` }));
