'use strict';

import variables from '../core/variables.es6.js';
import functions from '../core/functions.es6.js';

// Adds padding to the element.
//
// @padding
//   A list of padding value(s) to use. Passing `default` in the list will result
//    in using the gutter width as a padding value.
//
// @example - LESS Usage
//   .element {
//     @mixin pad 30px -20px 10px default;
//   }
//
// @example - CSS Output
//   .element {
//     padding: 30px -20px 10px 2.3576516%;
//   }

let pad = (padding = 'default') => {
  var columnGutter = functions.percentage(functions.flexGutter());
  var parts = Array.isArray(padding) ? padding : padding.split(' ');

  if (!parts.length) {
    parts.push('default');
  }

  return {
    'padding': parts.reduce((aggr, value) => {
      aggr.push(value === 'default' ? columnGutter : value);
      return aggr;
    }, []).join(' ')
  };
};

export default pad;
