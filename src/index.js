/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family',
    knowsProgramming = true,
    config = {family: 4}
    ) {
      // return 0;

      let js_hours = 800;
      let base_hours = 500;
      if (knowsProgramming == true) {
        return Math.ceil(js_hours/config[focus])
      } else {
        return Math.ceil((js_hours + base_hours) / config[focus])
      }
  };
