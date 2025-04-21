from flask import Flask, request
import pygame
import requests
import os
from flask_cors import CORS  # Importa CORS
import os

temp_dir = 'temp_files'
if not os.path.exists(temp_dir):
    os.makedirs(temp_dir)

temp_path = os.path.join(temp_dir, 'temp.mp3')

with open(temp_path, 'wb') as f:
    f.write(respuesta.content)


app = Flask(__name__)
CORS(app)  # Habilita CORS para todo el servidor

pygame.mixer.init()

@app.route('/reproducir', methods=['POST'])
def reproducir():
    data = request.get_json()
    url = data.get('url')
    if not url:
        return {'error': 'Falta la URL'}, 400

    # Descargar el archivo temporalmente
    respuesta = requests.get(url)
    with open("temp.mp3", "wb") as f:
        f.write(respuesta.content)

    pygame.mixer.music.load("temp.mp3")
    pygame.mixer.music.play()

    return {'mensaje': 'Reproduciendo'}

@app.route('/detener', methods=['POST'])
def detener():
    pygame.mixer.music.stop()
    return {'mensaje': 'Detenido'}

if __name__ == '__main__':
    app.run(port=5002)
