# Pruebas de Rendimiento: Carga y Estrés - API de Coordinadora

Objetivo
Evaluar la capacidad de respuesta, estabilidad y límites del sistema bajo diferentes condiciones de tráfico.

📈 Prueba de Carga
Configuración:

20 usuarios virtuales constantes

790 solicitudes (12.63 req/s)

Resultados:

Disponibilidad: 100% (0 fallos)

Latencia:

Promedio: 1,046 ms

P95: 1,751 ms

Máxima: 2,383 ms (umbral incumplido)

Tráfico: 1.67 MB recibidos

Conclusión:
La API maneja cargas sostenidas de forma eficiente, con oportunidades para optimizar tiempos de respuesta en casos puntuales.

🚀 Prueba de Estrés
Configuración:

Escalado progresivo hasta 249 usuarios virtuales

1,404 solicitudes (18.84 req/s)

Resultados:

Estabilidad: 0 fallos / 0 errores de validación

Throughput: 18.84 req/s bajo carga máxima

Umbrales: 1 incumplido (revisar métrica específica en scripts)

Tráfico: 4.08 MB recibidos

Conclusión:
El sistema demuestra escalabilidad ante cargas extremas, manteniendo su funcionalidad básica.

🔎 Hallazgos Clave
Fortalezas:

Soporta >200 usuarios concurrentes sin errores.

Rendimiento consistente en pruebas prolongadas.

Oportunidades:

Optimizar peticiones lentas (hasta 2,383 ms).

Investigar el umbral incumplido en estrés.

🔧 Recomendaciones Técnicas
Monitorear en producción:

Uso de recursos (CPU/memoria) durante picos.

Latencia percentil 99 (p99).

Ejecutar prueba de resistencia (carga prolongada).
