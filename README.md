


# HIGHER lower - A Game of Chance!

Higher Lower is an interactive, fully responsive game of chance.

The game will generate 5 random numbers between 1-20.  A user must sign-in to play the game.  The user is welcomed, and the first number of 5 is displayed.  The user must guess whether each consecutive number is Higher or Lower than the previous number.  The numbers will be kept hidden from the user until they select either the Higher/Lower button to guess the outcome of that number. The game will continue until either all 5 numbers have been correctly guessed, or an incorrect guess ends the game.

The user's score is counted and the Correct Answer score is displayed under the game area.

**note - to do**
[insert screenshot of deployed project here from http://amiresponsivedesign.is/website]
## Features
[include screenshots of each feature]

In this section, you should go over the different parts of your project, and describe each in a sentence or so. You will need to explain what value each of the features provides for the user, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

### Existing Features

#### Higher Lower Logo and Heading

Featured at the top of the page, the bespoke logo and heading is easy to see for the user. Upon viewing the page, the user will be able to see the name of the game.

![logo and heading screenshot](assets/images/README-images/logo%20and%20heading.png)

Bespoke logo designed using the favicon.io generator https://favicon.io/

#### The Sign-in Area

The Sign-in Area contains a text input box, a submit button, and Directions on how to play the game.

![signin and game instructions screenshot](assets/images/README-images/signin-directions-display.png)

The user is prompted to enter a username to the text input box both by the placeholder in the text input box, and by an alert message if the user tries to start the game without signing in.  

Once the user has entered a username into the text box, they must then click on the 'Enter Game' button to start the game.

!['Enter Game' button screenshot](assets/images/README-images/enter-game-hover.png)

The graphics of the 'Enter Game' button are consistent in style and colour with the game's icon for optimum user experience.

The user is then welcomed by name.

![welcome message screenshot](assets/images/README-images/welcome-message.png)

#### The Game Area

This section will be displayed to the user upon successfully signing in.

![Game area screenshot](assets/images/README-images/game-area.png)

The user will be able to easily see five button icons displayed.  The first button icon displays the first number of the game.  The other four button icons display only a question mark.  The user will see two submit buttons below the five button icons, 'Higher' and 'Lower'.  The user selects either of these submit buttons to enter their guess and progress through the game.

#### The Score Area

This section will allow the user to see exactly how many correct answers they have provided.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

Features Left to Implement
Another feature idea

## Testing
In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your project’s features and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

Test that user is prompted to input a username before starting the game.  Click on 'Enter Game', pop-up alert displays.

![log-in prompt](assets/images/README-images/log-in-prompt.png)


## Validator Testing

### Lighthouse

Lighthouse passed

[lighthouse validation screenshot](assets/images/README-images/lighthouse-validation-test.png)
### HTML
No errors were returned when passing through the official W3C validator
### CSS
No errors were found when passing through the official (Jigsaw) validator
### JavaScript
No errors were found when passing through the official Jshint validator
The following metrics were returned:
There are 11 functions in this file.
Function with the largest signature takes 2 arguments, while the median is 0.
Largest function has 10 statements in it, while the median is 3.
The most complex function has a cyclomatic complexity value of 4 while the median is 2.
Unfixed Bugs
You will need to mention unfixed bugs and why they were not fixed. This section should include shortcomings of the frameworks or technologies used. Although time can be a big variable to consider, paucity of time and difficulty understanding implementation is not a valid reason to leave bugs unfixed.

## Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows:

In the GitHub repository, navigate to the Settings tab
From the source section drop-down menu, select the Master Branch
Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.
The live link can be found here - 

## Credits

CI Love Maths

Stackoverflow

Google

W3Schools

jquery https://www.w3schools.com/jquery/default.asp


CI Tutor support

Guidance from Tutor Alex fix a problem with jquery.  It was not working because I downloaded jquery instead of including the following link: <script src="https://code.jquery.com/jquery-3.6.1.slim.js" integrity="sha256-tXm+sa1uzsbFnbXt8GJqsgi2Tw+m4BLGDof6eUPjbtk=" crossorigin="anonymous"></script>
from here: https://releases.jquery.com/

Slack


In this section you need to reference where you got your content, media and extra help from. It is common practice to use code from other repositories and tutorials, however, it is important to be very specific about these sources to avoid plagiarism.

You can break the credits section up into Content and Media, depending on what you have included in your project.

## Content
The text for the Home page was taken from Wikipedia Article A
Instructions on how to implement form validation on the Sign Up page was taken from Specific YouTube Tutorial
The icons in the footer were taken from Font Awesome
Media

https://favicon.io/