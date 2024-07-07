import React, { Component } from 'react'

function WorldCapitalQuiz(props) {
    return (
        <div>
        <link rel="stylesheet" type="text/css" href='game.css' />
          <form class="container" action="/submit" method="post">
    <div class="horizontal-container">
      <h3>
        Total Score:
        <span id="score">
        </span>
      </h3>

    </div>

    <h1 id="countryName">
    </h1>
    <div class="answer-container">
      <input type="text" name="answer" id="userInput" placeholder="Enter the capital" autofocus autocomplete="off" />

    </div>
    <button className='submit-btn' type="submit">SUBMIT
        <span class="checkmark">✔</span>
          <span class="cross" id="error">✖</span>
    </button>

  </form>
        </div>
    )
}

export default WorldCapitalQuiz