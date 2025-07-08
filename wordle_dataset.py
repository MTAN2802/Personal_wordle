import requests
import json

url = "https://cheaderthecoder.github.io/5-Letter-words/words.json"
response = requests.get(url)
words = response.json()

with open('dataset.js', 'w') as js_file:
    js_file.write('const data = ')
    json.dump(words, js_file)
    js_file.write(';\nexport default data;')