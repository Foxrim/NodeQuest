import "dotenv/config"
import { say } from 'cowsay';

const Name = process.env.NAME;
const Campus = process.env.CAMPUS;

console.log(say({ text: `${Name} est en ${Campus}` }));