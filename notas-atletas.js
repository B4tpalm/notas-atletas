let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

for (let i = 0; i < atletas.length; i++) {
    let atleta = atletas[i];
    let notas = atleta.notas.slice(); // copia para não alterar original

    // Ordena as notas em ordem crescente
    notas.sort(function(a, b) {
        return a - b;
    });

    // Pega apenas as 3 do meio (eliminando a menor e a maior)
    let notasComputadas = notas.slice(1, 4);

    // Calcula a soma
    let soma = 0;
    notasComputadas.forEach(function(n) {
        soma += n;
    });

    // Calcula média
    let media = soma / notasComputadas.length;

    // Exibe resultados
    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas Obtidas: ${atleta.notas.join(",")}`);
    console.log(`Média Válida: ${media}`);
    console.log(""); // linha em branco
}
