#!/bin/bash

# 1. Criação da estrutura de pastas
mkdir -p devtech/projetos/site-institucional/src/css
mkdir -p devtech/projetos/site-institucional/src/js
mkdir -p devtech/projetos/site-institucional/src/img
mkdir -p devtech/projetos/site-institucional/public

mkdir -p devtech/projetos/sistema-interno/backend/src/controllers
mkdir -p devtech/projetos/sistema-interno/backend/src/models
mkdir -p devtech/projetos/sistema-interno/backend/src/routes

mkdir -p devtech/projetos/sistema-interno/frontend/src/components
mkdir -p devtech/projetos/sistema-interno/frontend/src/pages
mkdir -p devtech/projetos/sistema-interno/frontend/src/services

mkdir -p devtech/financeiro/2025
mkdir -p devtech/RH
mkdir -p devtech/docs/contratos
mkdir -p devtech/docs/manuais

# 2. Entrar na pasta devtech
cd devtech || exit

# 3. Criar os arquivos
touch projetos/site-institucional/public/index.html
touch projetos/site-institucional/README.md

touch projetos/sistema-interno/backend/server.js
touch projetos/sistema-interno/frontend/index.html

touch financeiro/2025/janeiro.txt
touch financeiro/2025/fevereiro.txt
touch financeiro/2025/marco.txt
touch financeiro/relatorio-anual.txt

touch RH/funcionarios.txt
touch RH/contratacoes-2025.txt

# 4. Escrever o conteúdo básico
echo "# Site Institucional - DevTech" > projetos/site-institucional/README.md
echo "<!DOCTYPE html><html><head><title>Site Institucional</title></head><body><h1>DevTech Solutions</h1></body></html>" > projetos/site-institucional/public/index.html

echo "console.log('Servidor iniciado com sucesso!');" > projetos/sistema-interno/backend/server.js
echo "<!DOCTYPE html><html><head><title>Sistema Interno</title></head><body><h1>Painel Interno</h1></body></html>" > projetos/sistema-interno/frontend/index.html

echo "Relatório Financeiro Anual - 2025" > financeiro/relatorio-anual.txt
echo "Lista de Funcionários DevTech:" > RH/funcionarios.txt

# 5. Fazer o backup obrigatório
cp -r projetos/sistema-interno projetos/sistema-interno-backup

# Voltar para a pasta do usuário
cd ..

echo "Estrutura e backup do DevTech criados com sucesso!"
