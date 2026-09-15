# Aula de Backend — Flask (Python)

Projeto básico de uma aplicação Flask, com código comentado em português.

## Estrutura

```
backend-flask-basico/
├── app.py              # Ficheiro principal (rotas da aplicação)
├── requirements.txt     # Lista de bibliotecas Python necessárias
├── templates/
│   └── index.html       # Página HTML servida pelo Flask
└── static/
    └── css/
        └── estilos.css   # Ficheiro estático (CSS)
```

## Pré-requisitos

- Python 3.10+ instalado (`python3 --version` para confirmar)

## Instalação (passo a passo)

1. Abrir um terminal dentro da pasta `backend-flask-basico`.

2. Criar um ambiente virtual (isola as bibliotecas deste projeto do resto do computador):

   ```bash
   python3 -m venv venv
   ```

3. Ativar o ambiente virtual:

   - **Linux / macOS:**
     ```bash
     source venv/bin/activate
     ```
   - **Windows (PowerShell):**
     ```powershell
     venv\Scripts\Activate.ps1
     ```

   Quando estiver ativo, aparece `(venv)` no início da linha do terminal.

4. Instalar as dependências listadas no `requirements.txt`:

   ```bash
   pip install -r requirements.txt
   ```

## Correr a aplicação

```bash
python app.py
```

Depois abrir o browser em: **http://127.0.0.1:5000**

Para parar o servidor, usar `Ctrl + C` no terminal.

## Desativar o ambiente virtual

Quando terminares:

```bash
deactivate
```

## Rotas disponíveis

| Rota                       | Descrição                                  |
|-----------------------------|---------------------------------------------|
| `/`                          | Página inicial (HTML)                        |
| `/api/saudacao`              | Exemplo de resposta em JSON                  |
| `/api/saudacao/<nome>`       | Exemplo de rota com parâmetro (ex: `/api/saudacao/Maria`) |

## Ideias para os alunos experimentarem

1. Criar uma nova rota `/api/soma/<int:a>/<int:b>` que devolve a soma de dois números.
2. Criar uma segunda página HTML (`sobre.html`) e uma rota `/sobre` que a mostra.
3. Adicionar um formulário HTML que envia dados para o Flask (rota com `methods=["POST"]`).
