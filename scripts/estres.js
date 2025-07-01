import http from 'k6/http';

export const options = {
  stages: [
    { duration: '15s', target: 100 },
    { duration: '15s', target: 150 },
    { duration: '15s', target: 200 },
    { duration: '15s', target: 250 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<1500'],
    http_req_failed: ['rate<0.05'],
  },
};

export default function () {
  http.get('https://apiv2-test.coordinadora.com/guias/cm-guias-consultas-ms/guia/99020012725');
}


import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
  return { "resultados/reporte-estres.html": htmlReport(data) };
}
