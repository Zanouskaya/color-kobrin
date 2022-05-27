# color-kobrin

Color-kobrin.by is a website that displays information about the company's products. 
You can go to the product page, color palette, and contacts from the main page. 
Navigation and footer are inserted using the JS-code. 
The product page is filled with product cards from the data file, you can filter by category and use the search. 
Detailed information is displayed on a separate page after clicking on the card. The color picker page also displays cards from the color data file. 
Using the buttons on the cards, you can switch to the color display mode on the whole screen, as well as save to favorites. 
Favorite Colors is a tab with different colors and saturation wounds. Data from this tab is not stored in the browser. 
The page with contact details is quite simple and does not have any additional features.

---
## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v16.14.2

    $ npm --version
    8.5.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

---

## Install

    $ git clone https://github.com/Zanouskaya/color-kobrin.git
    $ cd color-kobrin
    $ npm install

## Running the project

    $ npm start

## Simple build for production

    $ npm build
