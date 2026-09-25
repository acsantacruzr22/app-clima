export function CurrentWeatherCard({ ciudad, clima, error }) {

    if (error) {
        return (
            <div className="tarjeta-clima-principal" style={{ background: 'linear-gradient(135deg, #F59E0B, #D97706)'}}>
                <h2 className="ciudad-titulo">Error de búsqueda</h2>
                <p style={{ marginTop: '20px', fontSize: '1.1rem' }}>
                    La ciudad <strong>"{ciudad}"</strong> no existe.
                </p>
                <p style={{marginTop: '10px', fontSize: '0.9rem', opacity: 0.9 }}>
                    Por favor revisa la ortografía o intenta buscar por país o región cercana.
                </p>
            </div>
        )
    }

    if (!clima) {
        return (
            <div className="tarjeta-clima-principal">
                <h2 className="ciudad-titulo">Busca una ciudad...</h2>
            </div>
        )
    }

    return (
        <div className="tarjeta-clima-principal">
            <h2 className="ciudad-titulo">{clima?.name || ciudad}, {clima?.sys?.country || ""}</h2>
            <div className="temperatura-gigante">
                <h1>{clima?.main?.temp ? Math.round(clima.main.temp) : "--"}°C</h1>
            </div>

            <p className="condicion-clima" style= {{ textTransform: 'capitalize' }}>
                {clima?.weather?.[0]?.description || "Sin información"}
            </p>

            <div className="detalles-extra">
                <span>Humedad: {clima?.main?.humidity || "--"}%</span>
                <span>Viento: {clima?.wind?.speed || "--"} m/s</span>
            </div>
        </div>
    )
}