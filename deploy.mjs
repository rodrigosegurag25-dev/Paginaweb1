// Publica el contenido ya compilado (carpeta dist/) en el VPS.
// Uso: npm run deploy   (corre "vite build" y luego este script)
// Requiere el alias SSH "vps" en ~/.ssh/config (PC y Mac ya lo tienen).
// Funciona igual en Windows y Mac porque usa Node, no bash.

import { execSync } from 'node:child_process'
import { existsSync } from 'node:fs'

const VPS = 'vps'
const STAGING = '/home/claude/deploy-ektreporte'          // carpeta puente (la escribe 'claude')
const DOCROOT = '/home/irsg1994/public_html/ektreporte'   // carpeta web real del sitio
const URL = 'https://ektreporte.irsg.work'

function run(cmd) {
  console.log(`\n$ ${cmd}`)
  execSync(cmd, { stdio: 'inherit' })
}

if (!existsSync('dist')) {
  console.error('No existe dist/. Corre "npm run build" primero (o usa "npm run deploy").')
  process.exit(1)
}

console.log('→ Publicando en', URL)

// 1) Limpiar la carpeta puente en el VPS
run(`ssh ${VPS} "rm -rf ${STAGING} && mkdir -p ${STAGING}"`)

// 2) Subir la carpeta dist completa a la carpeta puente
run(`scp -r dist ${VPS}:${STAGING}/`)

// 3) Publicar en la carpeta web (con sudo), preservando .well-known del SSL
run(
  `ssh ${VPS} "sudo rsync -a --delete --exclude '.well-known' ${STAGING}/dist/ ${DOCROOT}/ ` +
  `&& sudo chown -R irsg1994:irsg1994 ${DOCROOT}"`
)

console.log(`\n✅ Listo. Sitio actualizado en ${URL}`)
