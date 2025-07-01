🧪 Pruebas de Carga y Estrés – API Coordinadora
1. Prueba de Carga
Escenario:

20 usuarios virtuales simultáneos

790 solicitudes generadas (≈12.63 solicitudes/segundo)

Resultados:

Tasa de éxito: 100 % (sin fallos ni errores de validación)

Latencia promedio: 1,046 ms

Percentil 95 (p95): 1,751 ms

Umbrales incumplidos: 1 (posiblemente relacionado con latencias puntuales de hasta 2,383 ms)

Conclusión:
La API responde de forma estable y sin errores ante una carga sostenida. Aunque cumple en términos funcionales, se identifican oportunidades de mejora en la latencia bajo ciertos picos.

2. Prueba de Estrés
Escenario:

Incremento progresivo de carga hasta 249 usuarios virtuales

1,404 solicitudes totales (≈18.84 solicitudes/segundo)

Resultados:

Tasa de éxito: 100 % (sin fallos ni errores)

Throughput estable durante todo el incremento

p95 de latencia: 13.7 s, mostrando degradación bajo carga extrema

Umbrales incumplidos: 1, asociado al tiempo de respuesta

Conclusión:
El sistema mantiene su funcionalidad bajo alta demanda, demostrando buena escalabilidad. Se observa un aumento considerable en los tiempos de respuesta, lo cual es esperable en este tipo de prueba.

3. Observaciones Finales
Fortalezas:

Manejo robusto de solicitudes concurrentes

Ausencia total de fallos o errores HTTP

Capacidad para soportar >200 usuarios virtuales sin colapsar

Áreas a Optimizar:

Monitoreo en producción de métricas como uso de CPU, memoria y respuesta en picos

