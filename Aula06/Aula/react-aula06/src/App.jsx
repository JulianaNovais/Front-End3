import Card from "./components/Card";
const usuarios = [
  {
    id: 1,
    name: "Juliana",
    turma: "Front-end",
    ativo: true,
  },
  {
    id: 2,
    name: "David",
    turma: "Back-end",
    ativo: false,
  },

  {
    id: 3,
    name: "Olívia",
    turma: "Infra",
    ativo: true,
  },
  {
    id: 4,
    name: "Theo",
    turma: "UX",
    ativo: false,
  },
];

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <ul>
        {usuarios.map((usuario) => (
          <Card key={usuario.id} usuario={usuario} />
        ))}
      </ul>
    </div>
  );
}

export default App;
