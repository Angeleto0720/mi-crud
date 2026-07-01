function Item({ persona, editarPersona, eliminarPersona }) {
  return (
    <div className="card">

      <div className="datos">
        <h3>
          {persona.nombre} {persona.apellido}
        </h3>

        <p>
          <strong>Edad:</strong> {persona.edad}
        </p>

        <p>
          <strong>Correo:</strong> {persona.correo}
        </p>
      </div>

      <div className="botones">

        <button
          className="editar"
          onClick={() => editarPersona(persona)}
        >
          ✏️ Editar
        </button>

        <button
          className="eliminar"
          onClick={() => eliminarPersona(persona.id)}
        >
          🗑 Eliminar
        </button>

      </div>

    </div>
  );
}

export default Item;