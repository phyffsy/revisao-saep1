import readLine from "readline-sync";
import {Produto} from "./src/models/Produto.js";

const ObjProduto = new Produto("Laranja",4);

console.log(ObjProduto.getNome);
console.log(ObjProduto.getPreco);

ObjProduto.setNome = readLine.question("Digite o novo nome:");
ObjProduto.setPreco = readLine.questionFloat("Digite o novo preco:");
