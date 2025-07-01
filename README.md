📊 Prueba de Carga
Escenario:

20 usuarios virtuales constantes

790 solicitudes enviadas (12.63 req/s)

Resultados:
✅ 100% de disponibilidad (0 fallos)
⚡ Latencia promedio: 1,046 ms (95% bajo 1,751 ms)
⚠️ 1 umbral incumplido: Posiblemente relacionado con peticiones de hasta 2,383 ms

Conclusión:
La API maneja eficientemente cargas sostenidas, con oportunidades para optimizar tiempos de conexión en casos puntuales.


🚀 Prueba de Estrés
Escenario:

Carga progresiva hasta 249 usuarios virtuales

1,404 solicitudes (18.84 req/s)

Resultados:
✅ Estabilidad total (0 fallos, 0 errores de validación)
📈 Throughput consistente: 18.84 req/s bajo máxima carga
⚠️ 1 umbral incumplido: Métrica específica por analizar (latencia o throughput)

Conclusión:
El sistema soporta escenarios de alta demanda sin degradación funcional, demostrando escalabilidad.

🔍 Hallazgos Clave
Robustez confirmada:

Sin errores en ambas pruebas.

Soporte para >200 usuarios concurrentes.

Áreas de mejora:

Optimizar tiempos de respuesta en picos de carga (2,383 ms máximos).

Revisar el threshold incumplido en estrés (detalles en scripts K6).

📌 Recomendaciones

Monitorear en producción:

Uso de memoria/CPU durante picos.

Latencia percentil 99 (p99).
