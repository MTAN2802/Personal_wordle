# Personal_wordle

This personal project will be an imitation of New York Times' wordle where once a day, you have 6 guesses to find the assigned word. Each guess will show different colours for each letter, depending on whether the letter is part of the word and in the right position or not. No colour will mean the letter is not part of the word, yellow will mean the letter is in the word but in the wrong position, and green will mean the letter is in the word and in the right position. Although right now only 5 letter words will be used, I will look into using words with more letters to increase the difficulty.

## Features

- On screen keyboard to type word, but can also use normal keyboard
- End screen to show results
- New Word button for unlimited play (on end screen)
- Transition animation to make it seem like the original Wordle e.g. changing the letter background to green
- (Potential) Choosing between 5, 6, and 7 letter words

## Dataset

The 5-letter word dataset will be extracted from a GitHub repository from cheaderthecoder (https://github.com/cheaderthecoder/5-Letter-words). I will be using the words.json file they have provided which I will extract using Python:
```python
import requests

url = "https://cheaderthecoder.github.io/5-Letter-words/words.json"
response = requests.get(url)
words = response.json()
```

Overall this dataset has 5760 entries.
