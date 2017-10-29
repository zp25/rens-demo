const { templater } = require('zp-lib');
const loremIpsum = require('lorem-ipsum');

const { header, link, style, script } = require('../public');

const lorem = loremIpsum({
  count: 5,
});

module.exports = templater`
  <div id="app" class="container">
    ${header}

    <main class="flex">
      ${link}

      <section class="col col--s12 section">
        <div id="shape">
          <img class="mf" src="images/mf.jpg" alt="Lego Millennium Falcon">

          <p>${lorem}</p>
          <p>${lorem}</p>
          <p>${lorem}</p>
        </div>
      </section>

      <section class="col col--s12 code">
        ${style}
        ${script('code')}
      </section>
    </main>
  </div>
`;
