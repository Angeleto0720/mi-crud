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

  // Eliminar
  const eliminarPersona = (id) => {
    if (window.confirm("¿Seguro que deseas eliminar este registro?")) {
      setPersonas(personas.filter((p) => p.id !== id));
    }
  };

  // Editar
  const editarPersona = (persona) => {
    setPersonaEditar(persona);
  };

  return (
    <div className="container">

      <h1>📋 CRUD de Personas</h1>

      <Form
        guardarPersona={guardarPersona}
        personaEditar={personaEditar}
      />

      <List
        personas={personas}
        editarPersona={editarPersona}
        eliminarPersona={eliminarPersona}
      />

    </div>
  );
}

export default App;