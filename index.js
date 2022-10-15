import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { sistemaDeAutenticacao } from "./sistemaDeAutenticação.js";

const diretor = new Diretor("João", 20000, 12345678900);
diretor.cadastrarSenha("1234")
const gerente = new Gerente("Vitor", 10000, 98765432100);
gerente.cadastrarSenha("12345")

const cliente = new Cliente("Velloso", 76543218900, "54321")

const diretorestaLogado = sistemaDeAutenticacao.login(diretor, "1234");

const gerenteestaLogado = sistemaDeAutenticacao.login(gerente, "12345");

const clienteestaLogado = sistemaDeAutenticacao.login(cliente, "54321")

console.log(gerenteestaLogado, diretorestaLogado, clienteestaLogado);