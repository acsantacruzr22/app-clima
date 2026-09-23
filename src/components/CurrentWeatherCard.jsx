export function CurrentWeatherCard({ ciudad }) {
    return (
        <div className="tarjeta-clima-principal">
            <h2 className="ciudad-titulo">{ciudad}</h2>
            <p className="hora-local">Hora local: 15:30</p>

            <div className="temperatura-gigante">
                <h1>19°C</h1>
            </div>

            <p className="condicion-clima">Soleado</p>

            <div className="detalles-extra">
                <span>Humedad: 20%</span>
                <span>Viento: 14 km/h</span>
            </div>
        </div>
    )
}