# =============================================
# FICHEIRO PRINCIPAL DA APLICAÇÃO FLASK
# Este é o ponto de entrada: aqui definimos as "rotas"
# (os endereços/URLs que a aplicação sabe responder).
# =============================================

from flask import Flask, jsonify, render_template

# Cria a aplicação Flask. "__name__" diz ao Flask onde procurar
# ficheiros como templates e ficheiros estáticos (CSS/JS/imagens).
app = Flask(__name__)


# -------------------------------------------------
# Rota principal ("/") - devolve uma página HTML
# -------------------------------------------------
@app.route("/")
def pagina_inicial():
    # O Flask vai procurar "index.html" dentro da pasta "templates/"
    return render_template("index.html")


# -------------------------------------------------
# Rota de exemplo que devolve JSON (útil para APIs)
# -------------------------------------------------
@app.route("/api/saudacao")
def saudacao():
    dados = {
        "mensagem": "Olá! Isto é uma resposta da API Flask."
    }
    return jsonify(dados)


# -------------------------------------------------
# Rota com um parâmetro na URL
# Exemplo: /api/saudacao/Maria
# -------------------------------------------------
@app.route("/api/saudacao/<nome>")
def saudacao_com_nome(nome):
    return jsonify({"mensagem": f"Olá, {nome}!"})


# -------------------------------------------------
# Ponto de arranque da aplicação
# Só corre quando executamos "python app.py" diretamente
# -------------------------------------------------
if __name__ == "__main__":
    # debug=True: mostra erros detalhados e recarrega o servidor
    # automaticamente sempre que gravamos alterações no código.
    # NUNCA usar debug=True em produção.
    app.run(debug=True)
