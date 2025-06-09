@echo off
echo ╔══════════════════════════════╗
echo ║  Resetando o banco de dados  ║
echo ╚══════════════════════════════╝
node reset-db.js

echo.
echo ╔══════════════════════════════╗
echo ║  Iniciando o JSON Server     ║
echo ╚══════════════════════════════╝
npx json-server --watch db.json --port 3000
pause
