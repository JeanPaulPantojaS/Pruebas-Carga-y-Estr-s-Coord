import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 20,
  duration: '1m',
  thresholds: {
    http_req_duration: ['p(95)<500'],
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  http.get('https://apiv2-test.coordinadora.com/guias/cm-guias-consultas-ms/guia/99020012725');
  sleep(0.5); // 2 requests/segundo
}

import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
  return { "resultados/reporte-carga.html": htmlReport(data) };
}
