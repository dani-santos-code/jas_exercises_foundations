# JS Is Fun 🦑
Here you can find some examples of how to apply JS.



## Setting Up Your Flask Environment

- Create a virtual environment called `venv`: `virtualenv venv`

- Activate the environment: `source activate venv/bin/activate`

- Install Flask: `pip install flask`

*Note*: You might have to install other dependencies, depending on your approach

## Mini Challenge

- Using the `flask_example` as a reference, you will see that each time we click on the button, a paragraph is appended to the DOM element `main` (or `main` tag). Make adjustments so it will only be appended once.

- Alert the user that he/she can only add a paragraph once, in case the user keeps clicking. 🤦‍🤦‍♀️

- Useful Resources:

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
https://medium.com/javascript-in-plain-english/how-to-traverse-the-dom-in-javascript-d6555c335b4e
https://zellwk.com/blog/dom-traversals/


## More "advanced" challenge

- Assuming you went through the whole Flask Tutorial and are familiar with templating in Flask (Jinja), consume the [Pokemon API](https://pokeapi.co/docs/v2.html) to display a list of pokemons with their names. Feel free to be creative and design something fancier and more beautiful.

Expected output should look something like this:

<p align="center">
    <img src="example.png" width="300" title="example">
</p>

*Note*: Feel free to display more info and play with this API!