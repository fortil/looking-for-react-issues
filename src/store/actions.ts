import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  /**
   * Capture the text typed
   * @param {String} text typed
   */
  issuesSelected: ['data'],
  /**
   * Loading
   * @param {Boolean} loading event
   */
  loading: ['data'],
  /**
   * loading all react issues
   */
  getReactIssues: ['data'],
  /**
   * loading all react issues
   */
  issues: ['data']
});

export default Creators;
