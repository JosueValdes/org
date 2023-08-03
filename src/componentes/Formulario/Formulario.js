import "./Formulario.css"
import CampoTexto from "../CampoTexto/Index"
import ListaOpciones from "../ListaOpciones/index"

const Formulario = () => {
    return <section className="formulario">
        <form>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar Nombre" />
            <CampoTexto titulo="Puesto" placeholder="Ingresar Puesto"/>
            <CampoTexto titulo="Foto" placeholder="Ingresar Enlace de Foto" />
            <ListaOpciones />
        </form>
    </section>
}

export default Formulario