#!/bin/bash

echo "Generando reportes HTML..."

npx k6-reporter-html resultados/resumen-carga.json -o resultados/reporte-carga.html
npx k6-reporter-html resultados/resumen-estres.json -o resultados/reporte-estres.html

echo "✅ Reportes generados en la carpeta resultados/"