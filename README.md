# unit-4-game

# Installing

* Download the ZIP file
* Extract all the files
* Open index.html
* Follow the rules and good luck!

# Rules

The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters. 
Here's how the app works:

There will be four Kirby Characters displayed as buttons on the page.
The player will be shown a random number at the start of the game.

When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

Your game will hide this amount until the player clicks a crystal.
When they do click one, update the player's score counter.

The player wins if their total score matches the random number from the beginning of the game.
The player loses if their score goes above the random number.

The game restarts whenever the player wins or loses.

When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

# Option 1 Game design notes

The random number shown at the start of the game should be between 19 - 120.
Each crystal should have a random hidden value between 1 - 12.

# Technologies

* HTML5
* CSS3
* Bootstrap 4.0.0
* Javascript
* jQuery 3.3.1

# Link

You can access the game without downloading any file by clicking [https://gustavogibo.github.io/unit-4-game/](here).

#File Structure

- __unit-4-game__
  - [LICENSE](unit-4-game/LICENSE)
  - [README.md](unit-4-game/README.md)
  - __assets__
    - __css__
      - [reset.css](unit-4-game/assets/css/reset.css)
      - [style.css](unit-4-game/assets/css/style.css)
    - __img__
      - [1-CrystalCollector.jpg](unit-4-game/assets/img/1-CrystalCollector.jpg)
      - [background.png](unit-4-game/assets/img/background.png)
      - [background.jpg](unit-4-game/assets/img/background.jpg)
      - [bandana-dee.png](unit-4-game/assets/img/bandana-dee.png)
      - [kirby.png](unit-4-game/assets/img/kirby.png)
      - [kind-dedede.png](unit-4-game/assets/img/kind-dedede.png)
      - [meta-knight.png](unit-4-game/assets/img/meta-knight.png)
      - [wallpaper.jpg](unit-4-game/assets/img/wallpaper.jpg)
    - __js__
      - [logic.js](unit-4-game/assets/js/logic.js)
  - [index.html](unit-4-game/index.html)

#