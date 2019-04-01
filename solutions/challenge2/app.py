from flask import Flask, render_template
import requests

app = Flask(__name__)

@app.route('/')
def getPokes():
    url = 'https://pokeapi.co/api/v2/ability/?limit=20&offset=20'
    pokes = requests.get(url)
    pokes = pokes.json()
    poke_names = []
    for p in pokes['results']:
        poke_names.append(p['name'].title())
    return render_template("index.html", poke_names=poke_names)

if __name__ == "__main__":
    app.run(port="3000")
