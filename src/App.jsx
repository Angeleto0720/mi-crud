import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./index.css";

function App() {
  const [personas, setPersonas] = useState([]);
  const [personaEditar, setPersonaEditar] = useState(null);
  const [busqueda, setBusqueda] = useState("");

  // Crear o actualizar
  const guardarPersona = (persona) => {
    if (personaEditar) {
      setPersonas(
        personas.map((p) =>
          p.id === personaEditar.id
            ? { ...persona, id: personaEditar.id }
            : p
        )
      );
      setPersonaEditar(null);
    } else {
      setPersonas([
        ...personas,
        {
          id: Date.now(),
          ...persona,
        },
      ]);
    }
  };

  // Eliminar uno
  const eliminarPersona = (id) => {
    if (window.confirm("¿Seguro que deseas eliminar este registro?")) {
      setPersonas(personas.filter((p) => p.id !== id));
    }
  };

  // Editar
  const editarPersona = (persona) => {
    setPersonaEditar(persona);
  };

  // Contar personas
  const contarPersonas = () => {
    alert(`Hay ${personas.length} persona(s) registradas.`);
  };

  // Eliminar todo
  const eliminarTodo = () => {
    if (personas.length === 0) {
      alert("No hay personas para eliminar.");
      return;
    }

    if (window.confirm("¿Seguro que deseas eliminar todos los registros?")) {
      setPersonas([]);
      setPersonaEditar(null);
    }
  };

  // 🔍 FILTRO DE BÚSQUEDA
  const personasFiltradas = personas.filter((p) =>
    `${p.nombre} ${p.apellido} ${p.correo}`
      .toLowerCase()
      .includes(busqueda.toLowerCase())
  );

  return (
    <div className="container">
      <h1>📋 CRUD de Personas</h1>

      <Form
        guardarPersona={guardarPersona}
        personaEditar={personaEditar}
      />

      {/* 🔍 BUSCADOR */}
      <input
        type="text"
        placeholder="Buscar persona..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="buscador"
      />

      <div className="acciones">
        <button className="contar" onClick={contarPersonas}>
          Contar Personas
        </button>

        <button className="vaciar" onClick={eliminarTodo}>
          Eliminar Todo
        </button>
      </div>

      <List
        personas={personasFiltradas}
        editarPersona={editarPersona}
        eliminarPersona={eliminarPersona}
      />
    </div>
  );
}

export default App;