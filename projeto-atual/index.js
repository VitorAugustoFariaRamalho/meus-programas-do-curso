import {Cliente} from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticação } from "./SistemaAutenticação.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456789")
const gerente = new Gerente("Ricardo", 5000, 12378945601);
gerente.cadastrarSenha("123456")

const cliente = new Cliente("Lais", 789321456, "456");

const diretorEstaLogado = SistemaAutenticação.login(diretor, "123456789");
const gerenteEstaLogado = SistemaAutenticação.login(gerente, "123456");

const clienteEstaLogado = SistemaAutenticação.login(cliente, "456");

console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);