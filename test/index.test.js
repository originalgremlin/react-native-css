var css = require('../index');

css.parse('./test/style.css', './test/style-css.js');
css.parse('./test/style.scss', './test/style-scss.js');
css.parse('./test/style.css', './test/style-css-pretty.js', true);
css.parse('./test/style.scss', './test/style-scss-pretty.js', true);


