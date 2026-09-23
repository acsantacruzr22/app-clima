import { useState } from 'react'

export function SearchBar({ onBuscar }) {

    const [textoInput, setTextoInput] = useState("")

    const ejecutarBusqueda = () => {
        if (textoInput.trim() !== "") {
            onBuscar(textoInput)
            setTextoInput("")
        }
    }
    return (
        <div className="contenedor-buscador">
            <input
                type="text"
                placeholder="Buscar ciudad..."
                className="input-busqueda"
                value={textoInput}
                onChange={(e) => setTextoInput(e.target.value)}
            />
            <button className="boton-buscar" onClick={ejecutarBusqueda}>
                Buscar
            </button>
        </div>
    )
}