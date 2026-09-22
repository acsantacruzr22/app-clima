# DOCUMENTO DE ESPECIFICACIÓN DE REQUISITOS - PROYECTO APP CLIMA

## Requisitos Funcionales

1. **Entrada de búsqueda:**
El sistema debe mostrar un cuadro para introducir el nombre de la ciudad cuyo clima se desea revisar.
2. **Ejecución de consultas:**
El sistema debe procesar la solicitud de búsqueda cuando el usuario presione la tecla "buscar ciudad".
3. **Manejo de errores:**
El sistema debe mostrar un mensaje de error ("Error: la ciudad ingresada no existe.) cuando se introduce el nombre de una ciudad que no existe.
4. **Visualización de temperatura:**
El sistema debe mostrar la temperatura de la ciudad ingresada en grados centígrados por defecto.
5. **Alternancia de unidades:**
El sistema debe tener un botón que cambie la temperatura de grados centígrados a grados Fahrenheit.
6. **Indicador gráfico:**
El sistema debe renderizar íconos referentes al clima actual de la ciudad ingresada (ej.: nublado, soleado, lluvioso…).
7. **Hora local:**
El sistema debe mostrar la hora actual de la ciudad cuyo clima se está revisando.
8. **Pronóstico diario:**
El sistema debe mostrar la proyección del clima (temperatura máxima, mínima…) para el resto del día en curso.
9. **Pronóstico extendido:**
El sistema debe mostrar la proyección del clima para el día inmediatamente siguiente al que se está consultando.

## Requisitos No Funcionales

1. **Entorno de desarrollo:**
La aplicación debe ser construida utilizando React y la herramienta de construcción Vite.
2. **Adaptabilidad de la interfaz:**
La maquetación debe tener en cuenta el principio "mobile first", garantizando que los elementos se ajusten correctamente al tamaño de la pantalla de dispositivos móviles.
3. **Gestión de código:**
El proyecto deberá utilizar Git como herramienta de control de versiones, manteniendo el historial de cambios sincronizado en un repositorio remoto en GitHub.
4. **Despliegue y disponibilidad:**
El código fuente principal debe compilarse y publicarse como una aplicación web estática accesible al público a través de la plataforma Netlify.
5. **Rendimiento de la interfaz:**
El sistema debe renderizar la actualización de los datos meteorológicos en máximo 2 segundos después de recibir la carga útil de la API externa.
6. **Compatibilidad:**
La aplicación debe ejecutarse correctamente en las versiones estables recientes de navegadores móviles como Chrome, Edge, Brave o Mozilla sin que se requieran descargas adicionales.