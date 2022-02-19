const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/aws-cognito-auth-webcomponent/polyfills.js',
    './dist/aws-cognito-auth-webcomponent/runtime.js',
    './dist/aws-cognito-auth-webcomponent/main.js',
  ]
  await fs.ensureDir('elements')
  await concat(files, 'elements/aws-register-form.js');
  await fs.copyFile('./dist/aws-cognito-auth-webcomponent/styles.css', 'elements/styles.css')
  await fs.copy('./dist/aws-cognito-auth-webcomponent/favicon.ico', 'elements/favicon.ico' )
  // await fs.copy('./dist/aws-cognito-auth-webcomponent/assets/', 'elements/assets/' )
  await fs.copy('./index.html', 'elements/index.html' )

})();
