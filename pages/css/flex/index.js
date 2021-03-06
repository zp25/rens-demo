const { templaterAsync: templater } = require('zp-lib');
const {
  header,
  link,
  style,
  script,
} = require('../../../templates');

module.exports = templater`
  <div id="app" class="container">
    ${header}

    <main class="flex">
      ${link}

      <section class="col col--s12 section">
        <div class="dice dice--single">
          <div class="box top-left">
            <span class="item"></span>
          </div>
          <div class="box top-center">
            <span class="item"></span>
          </div>
          <div class="box top-right">
            <span class="item"></span>
          </div>
          <div class="box mid-left">
            <span class="item"></span>
          </div>
          <div class="box mid-center">
            <span class="item"></span>
          </div>
          <div class="box bottom-right">
            <span class="item"></span>
          </div>
        </div>
      </section>

      <section class="col col--s12 section">
        <div class="dice dice--double">
          <div class="box d-top">
            <span class="item"></span>
            <span class="item"></span>
          </div>
          <div class="box d-left">
            <span class="item"></span>
            <span class="item"></span>
          </div>
          <div class="box d-center">
            <span class="item"></span>
            <span class="item"></span>
          </div>
          <div class="box d-right">
            <span class="item"></span>
            <span class="item"></span>
          </div>
          <div class="box d-cross">
            <span class="item"></span>
            <span class="item"></span>
          </div>
          <div class="box d-cross-big">
            <span class="item"></span>
            <span class="item"></span>
          </div>
        </div>
      </section>

      <section class="col col--s12 section">
        <div class="dice dice--multi">
          <div class="box m-cross">
            <span class="item"></span>
            <span class="item"></span>
            <span class="item"></span>
          </div>
          <div class="box m-quarter">
            <span class="item"></span>
            <span class="item"></span>
            <span class="item"></span>
            <span class="item"></span>
          </div>
          <div class="box m-quarter-b">
            <div class="row">
              <span class="item"></span>
              <span class="item"></span>
            </div>
            <div class="row">
              <span class="item"></span>
              <span class="item"></span>
            </div>
          </div>
          <div class="box m-six-a">
            <span class="item"></span>
            <span class="item"></span>
            <span class="item"></span>
            <span class="item"></span>
            <span class="item"></span>
            <span class="item"></span>
          </div>
          <div class="box m-six-b">
            <span class="item"></span>
            <span class="item"></span>
            <span class="item"></span>
            <span class="item"></span>
            <span class="item"></span>
            <span class="item"></span>
          </div>
          <div class="box m-six-c">
            <div class="row">
              <span class="item"></span>
              <span class="item"></span>
              <span class="item"></span>
            </div>
            <div class="row">
              <span class="item"></span>
            </div>
            <div class="row">
              <span class="item"></span>
              <span class="item"></span>
            </div>
          </div>
        </div>
      </section>

      <section class="col col--s12 section">
        <h2>Holy Grail Layout</h2>
        <p>header, footer和left, right是两个不同主轴方向的flex布局的两端固定大小item，body和center通过flex: 1;实现剩余部分填充</p>
      </section>

      <section class="col col--s12 section">
        <div id="holy-grail-layout">
          <div class="header"></div>
          <div class="body">
            <div class="center"></div>
            <div class="left"></div>
            <div class="right"></div>
          </div>
          <div class="footer"></div>
        </div>
      </section>

      <section class="col col--s12 code">
        ${style}
        ${script('code')}
      </section>
    </main>
  </div>
`;
