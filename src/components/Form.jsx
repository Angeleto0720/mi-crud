import { useEffect, useState } from "react";

function Form({ guardarPersona, personaEditar }) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [correo, setCorreo] = useState("");

  useEffect(() => {
    if (personaEditar) {
      setNombre(personaEditar.nombre);
      setApellido(personaEditar.apellido);
      setEdad(personaEditar.edad);
      setCorreo(personaEditar.correo);
    }
  }, [personaEditar]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      nombre.trim() === "" ||
      apellido.trim() === "" ||
      edad.trim() === "" ||
      correo.trim() === ""
    ) {
      alert("Debe completar todos los campos.");
      return;
    }

    guardarPersona({
      nombre,
      apellido,
      edad,
      correo,
    });

    setNombre("");
    setApellido("");
    setEdad("");
    setCorreo("");
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">

      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        type="text"
        placeholder="Apellido"
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
      />

      <input
        type="number"
        placeholder="Edad"
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
      />

      <input
        type="email"
        placeholder="Correo electrónico"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />

      <button type="submit">
        {personaEditar ? "Actualizar" : "Agregar"}
      </button>

    </form>
  );
}

export default Form;