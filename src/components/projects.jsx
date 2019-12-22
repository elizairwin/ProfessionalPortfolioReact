/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

export default class Projects extends Component {
    render() {
        return (

            <section>
                <header className="major">
                    <h2>Projects</h2>
                </header>
                <div className="posts">
                    <article>
                        <a href="#" className="image"><img src="images/restaurant.png" alt="Appetizer" /></a>
                        <h3>Appetizer</h3>
                        <p>This is a full-stack MCV app that provides restaurant owners with an easy way to create a customized website and be online in minutes.</p>
                        <p>The models folder has the database tables, fields and definitions. This was done using Mongo DB.</p>
                        <p>The brand new technology used here is Passport and JWT for user login.</p>
                        <ul className="actions">
                            <li><a href="https://obscure-shore-32335.herokuapp.com/" className="button">See the
                    Project</a></li>
                            <li><a href="https://github.com/elizairwin/Appetizer" className="button">See the
                    Code</a></li>
                        </ul>
                    </article>
                    <article>
                        <a href="#" className="image"><img src="images/clicky.jpg.png" alt="Clicky Game" /></a>
                        <h3>Clicky Game</h3>
                        <p>This is a guessing game built with react that tests the user's memory.</p>
                        <p>There is a 'score' as well as a 'high score' function built in. The user is alerted once the game is over.</p>
                        <p>This app uses all skills learned so far as a full-stack developer.</p>
                        <ul className="actions">
                            <li><a href="https://elizairwin.github.io/Click-Game/" className="button">See the
                    Project</a></li>
                            <li><a href="https://github.com/elizairwin/Click-Game" className="button">See the
                    Code</a></li>
                        </ul>
                    </article>
                    <article>
                        <a href="#" className="image"><img src="images/workout.jpg.png" alt="Workout Tracker" /></a>
                        <h3>Workout Tracker</h3>
                        <p>This is a full-stack app that allows users to track and view their workouts.</p>
                        <p>The user is able to log runs and lifts.</p>
                        <p>I worked on this app from beginning to end, installing necessary packages including
                            axios,
								writing the code, performing testing, debugging, and then finally I deployed the app.</p>
                        <ul className="actions">
                            <li><a href="https://desolate-oasis-54176.herokuapp.com/" className="button">See the
                    Project</a></li>
                            <li><a href="https://github.com/elizairwin/WorkoutTracker" className="button">See the
                    Code</a></li>
                        </ul>
                    </article>
                    <article>
                        <a href="#" className="image"><img src="images/nfl.png" alt="NFL Gear Zone" /></a>
                        <h3>NFL Gear Zone</h3>
                        <p>This is a full-stack MCV app that allows users to subscribe to receive hats monthly for their favorite NFL team.</p>
                        <p>The models consist of three associated tables - person, hats, and teams.</p>
                        <p>The brand new package used here is Moment which allows us to easily handle dates/times.</p>
                        <ul className="actions">
                            <li><a href="https://nflgearzone.herokuapp.com" className="button">See
                        the Project</a></li>
                            <li><a href="https://github.com/NayCS/NFLGearZone" className="button">See the
                        Code</a></li>
                        </ul>
                    </article>
                    <article>
                        <a href="#" className="image"><img src="images/friend.png" alt="Friend Finder" /></a>
                        <h3>Friend Finder</h3>
                        <p>This is a compatability-based friend finding application - similar to a dating app.</p>
                        <p>It is a full-stack site that takes in user survey results, compares answers with other
                  users, and provides a name of a friend match.</p>
                        <ul className="actions">
                            <li><a href="https://secure-dawn-46163.herokuapp.com" className="button">See
                      the Project</a></li>
                            <li><a href="https://github.com/elizairwin/FriendFinder" className="button">See the
                      Code</a></li>
                        </ul>
                    </article>
                    <article>
                        <a href="#" className="image"><img src="images/Bamazon.png" alt="Bamazon" /></a>
                        <h3>Bamazon</h3>
                        <p>This is an Amazon-like storefront that simulates a simple retail site. Using SQL,
                          Bamazon stores product information. Using Node.js packages, Bamazon interacts with the
                            user.</p>
                        <p>In the console, a user can select to perform customer or manager tasks. </p>
                        <p>In bamazonCustomer.js, Bamazon displays inventory, takes in orders, and depletes stock as
                          necessary.
                          In bamazonManager.js, Bamazon allows the user to perform higher level tasks such as
                              checking inventory or adding product to site.</p>
                        <ul className="actions">
                            <li><a href="https://github.com/elizairwin/bamazon" className="button">See the
                            Code</a></li>
                        </ul>
                    </article>
                    <article>
                        <a href="#" className="image"><img src="images/LiriBot.png" alt="Liri Bot" /></a>
                        <h3>Liri-Bot</h3>
                        <p>Liri is like the iPhone's Siri. It is a language interpreter that takes in text and
                          returns data
                  for the user. Here, we use the command line to ask Siri about songs and/or movies.</p>
                        <p>In the command line, the user enters spotify-this-song 'song name', movie-this
                          'movie-name',
                          or do-what-it-says (this will pull from random.txt). The user is returned song or movie
                    data. </p>
                        <p>I worked on this app from beginning to end, installing necessary packages including
                          axios,
                          writing the code, performing testing, debugging, and then finally I deployed the app.
                </p>
                        <ul className="actions">
                            <li><a href="https://github.com/elizairwin/liri-node-app" className="button">See the
                      Code</a></li>
                        </ul>
                    </article>
                    <article>
                        <a href="#" className="image"><img src="images/BeGin.png" alt="Let The Evening BeGin" /></a>
                        <h3>Let The Evening BeGin</h3>
                        <p>A responsive app that uses HTML5, Bootstrap, CSS, Javascript, JQuery, and APIs. APIs
                  include Open Weather Map and Cocktail DB.</p>
                        <p>The user enters his or her city and is recommended drinks based on the weather of that
                          city. The app comes complete with instructions and ingredients for the cocktail chosen
                  by the user from the recommended list.</p>
                        <p>The 'icebox' includes features such as a targeted city and state search, as well as the
                  capability to get the weather for a future date.</p>
                        <ul className="actions">
                            <li><a href="https://patrickvenkat.github.io/LetTheEveningBeGin/#" className="button">See
                      the Project</a></li>
                            <li><a href="https://github.com/patrickvenkat/LetTheEveningBeGin" className="button">See the
                      Code</a></li>
                        </ul>
                    </article>
                    <article>
                        <a href="#" className="image"><img src="images/giphy.png" alt="GifTastic" /></a>
                        <h3>GifTastic</h3>
                        <p>An app that uses HTML5, Bootstrap, CSS, Javascript, and JQuery.</p>
                        <p>The user enters a Gif search and the page populates with 10 items related to the search.
                </p>
                        <p>Code is included to stop/start the Gifs.</p>
                        <ul className="actions">
                            <li><a href="https://elizairwin.github.io/GifTastic/" className="button">See the Project</a>
                            </li>
                            <li><a href="https://github.com/elizairwin/GifTastic" className="button">See the Code</a>
                            </li>
                        </ul>
                    </article>
                    <article>
                        <a href="#" className="image"><img src="images/trivia.png" alt="Trivia Game" /></a>
                        <h3>The Fantastic Food Trivia Game</h3>
                        <p>A responsive game that uses HTML5, CSS, JavaScript, and JQuery, and Timers.</p>
                        <p>The user begins the game and has 30 seconds to answer each question.</p>
                        <p>At the end, a scoreboard is returned for the user.</p>
                        <ul className="actions">
                            <li><a href="https://elizairwin.github.io/TriviaGame/" className="button">See the
                      Project</a></li>
                            <li><a href="https://github.com/elizairwin/TriviaGame" className="button">See the Code</a>
                            </li>
                        </ul>
                    </article>
                    <article>
                        <a href="#" className="image"><img src="images/crystal.png" alt="Crystal Collector" /></a>
                        <h3>Crystal Collector Game</h3>
                        <p>A fun and interacting game that uses HTML5, CSS, Bootstrap, JavaScript, and JQuery.</p>
                        <p>The user clicks on the crystals (which are all assigned different point values) and tries
                  to match the target score.</p>
                        <p>Alerts are displayed for wins/losses and the game is reset at the end of a session.</p>
                        <ul className="actions">
                            <li><a href="https://elizairwin.github.io/Crystal-Game/" className="button">See the
                      Project</a></li>
                            <li><a href="https://github.com/elizairwin/Crystal-Game" className="button">See the Code</a>
                            </li>
                        </ul>
                    </article>
                    <article>
                        <a href="#" className="image"><img src="images/dressup.png" alt="Dress Up Game" /></a>
                        <h3>Dress Up Game</h3>
                        <p>A simple game that uses HTML5, CSS, Bootstrap, JavaScript, and JQuery.</p>
                        <p>The user clicks the clothing buttons to dress the character in an outfit.</p>
                        <p>The 'icebox' includes more outfit/accessory choices for the user to pick from.</p>
                        <ul className="actions">
                            <li><a href="https://elizairwin.github.io/Dress-Up-Game/" className="button">See the
                      Project</a></li>
                            <li><a href="https://github.com/elizairwin/Dress-Up-Game" className="button">See the Code</a>
                            </li>
                        </ul>
                    </article>
                    <article>
                        <a href="#" className="image"><img src="images/psychic.png" alt="Psychic Game" /></a>
                        <h3>Psychic Game</h3>
                        <p>A very simple game that HTML5, CSS, Bootstrap, and JavaScript.</p>
                        <p>The user types a letter guess and attempts to match the letter the computer is thinking
                  of.</p>
                        <p />
                        <p>Alerts are displayed for wins/losses and the game is reset at the end of a session.</p>
                        <ul className="actions">
                            <li><a href="https://elizairwin.github.io/Psychic-Game/" className="button">See the
                      Project</a></li>
                            <li><a href="https://github.com/elizairwin/Psychic-Game" className="button">See the Code</a>
                            </li>
                        </ul>
                    </article>
                </div>
            </section>
        );
    }
};