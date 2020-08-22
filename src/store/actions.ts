import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  /**
   * Capture the text typed
   * @param {String} text typed
   */
  typing: ['data'],
  /**
   * Capture the click
   * @param {Boolean} click event to search into github
   */
  clickSearch: ['data'],
  /**
   * Loading
   * @param {Boolean} loading event
   */
  loading: ['data']
});

export default Creators;
