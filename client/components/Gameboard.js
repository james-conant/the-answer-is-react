import React from 'react';
import PropTypes from 'prop-types';
import Categories from '../components/Categories.js'
import categories from '../../testdata.js'
import Clue from '../components/Clue.js'


const Gameboard = props => {
  return (
    <div data-testid="gameboard" id={props.currentQuestion.question ? 'question' : 'gameboard'} >
      {/* was a question clicked?  */}
      {/* Yes? Show clue */}
      {/* No? Show Categories */}
      <Categories categories={categories.categories} />
    </div>
  );
};

Gameboard.propTypes = {
  currentQuestion: PropTypes.object,
  selectQuestion: PropTypes.func,
  categories: PropTypes.array,
  answeredQuestions: PropTypes.array
};

export default Gameboard;
