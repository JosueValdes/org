import "./CampoTexto.css"

const CampoTexto = (props) => {
    console.log("Datos: ", props.titulo)
    const placeholderNodificado = `${props.placeholder}...`
    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input placeholder={placeholderNodificado} />
    </div>
}

export default CampoTexto