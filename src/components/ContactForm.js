export default function ContactForm (){
    return (

        <form action="#" method="post" className="formulario">
      <p>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" name="nombre" id="nombre" />
      </p>

      <p>
        <label htmlFor="apellido">Apellido</label>
        <input type="text" name="apellido" id="apellido" />
      </p>

      <p>
        <label htmlFor="email">Email</label>
 <input type="email" name="email" id="email" />
      </p>

      <p>
        <label htmlFor="consulta">Consulta</label>
        <textarea name="consulta" id="consulta"></textarea>
      </p>

      <button type="submit">Enviar</button>
    </form>

    );
}