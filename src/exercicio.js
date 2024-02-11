//Array de objetos com dois atributos: nome e nota de alunos.
const alunos = [
  {nome: 'Maria', nota: 8.5},
  {nome: 'Paulo', nota: 7},
  {nome: 'André', nota: 5.9},
  {nome: 'Tamires', nota: 6.4},
  {nome: 'João', nota: 4}
];

//Filtrar alunos com nota maior ou igual a 6:
const filtrarAlunos = alunos => alunos.nota >= 6;

//Chamando função filtrar e exibindo alunos aprovados:
const alunosAprovados= alunos.filter(filtrarAlunos);
console.log(alunosAprovados);
