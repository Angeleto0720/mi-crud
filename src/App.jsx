import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./index.css";

function App() {
  const [personas, setPersonas] = useState([]);
  const [personaEditar, setPersonaEditar] = useState(null);

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

  // Eliminar todas las personas
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

  return (
    <div className="container">
      <h1>📋 CRUD de Personas</h1>

      <Form
        guardarPersona={guardarPersona}
        personaEditar={personaEditar}
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
        personas={personas}
        editarPersona={editarPersona}
        eliminarPersona={eliminarPersona}
      />
    </div>
  );
}

export default App;