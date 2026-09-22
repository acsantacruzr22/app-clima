export function SearchBar() {
    return (
        <div className="contenedor-buscador">
            <input
                type="text"
                placeholder="Buscar ciudad..."
                className="input-busqueda"
            />
            <button className="boton-buscar">Buscar</button>
        </div>
    )
}