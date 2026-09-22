export class Funcionario{
    private nome: string;
    private salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    public get getNome(): string {
        return this.nome;
    }

    public get getSalario(): number {
        return this.salario;
    }

    public set setNome(novoNome: string) {
        // Regra de negócio: Nome não pode ser vazio
        if (novoNome.length === 0) {
            console.log("\n ERRO: O nome do funcionário não pode ser vazio!");
            return;
        }
        this.nome = novoNome;
        console.log("\n Nome alterado com sucesso!");
    }

    public set setSalario(novoSalario: number) {
        // Regra de negócio: Salário não pode ser negativo
        if (novoSalario < 0) {
            console.log("\n ERRO: O salário não pode ser negativo! Bloqueado.");
            return;
        }
        this.salario = novoSalario;
        console.log("\n Salário atualizado com sucesso!");
    }
}
