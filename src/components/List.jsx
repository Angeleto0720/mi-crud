import Item from "./Item";

function List({ personas, editarPersona, eliminarPersona }) {
  return (
    <div className="lista">

      <h2>Lista de Personas</h2>

      {personas.length === 0 ? (
        <p className="mensaje">
          No hay personas registradas.
        </p>
      ) : (
        personas.map((persona) => (
          <Item
            key={persona.id}
            persona={persona}
            editarPersona={editarPersona}
            eliminarPersona={eliminarPersona}
          />
        ))
      )}

    </div>
  );
}

export default List;