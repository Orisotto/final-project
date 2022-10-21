var MODEL = (function () {
    var homeContent = `<div class="homePage">
    <div class="heroHome">
      <div class="callout">
        <div class="homeTitle">
          <h1 id="homeHeader">Header goes here</h1>
          <h2 class="subLine">
            <span>Less important text goes here</span>
          </h2>
        </div>
        <h2 id="subTitle" class="subLine">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
          aliquid minus nemo sed est.
        </h2>
        <button type="submit" class="readMore">Read More</button>
      </div>
    </div>
    <div class="mainBody">
      <div class="description">
        <p id="textBox">
          “Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium totam rem aperiam eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Iste natus error sit voluptatem accusantium
          doloremque laudantium totam rem aperiam eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo”
        </p>
        <p id="ceoName">John Smith</p>
        <p id="jobRole">Corporation CEO, books author.</p>
      </div>
    </div>
    <div class="upcomingEvents">
      <div class="eventContainer">
        <h1>UPCOMING EVENTS:</h1>
        <div class="schedule">
          <div class="calendarContainer">
            <div class="eventDate">
              <span>06</span> <br />
              JUN
            </div>
            <div class="detailContainer">
              <div class="eventName">
                Sed et persipiatis unde omnis iste natus
              </div>
              <div class="eventDetails">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid temporibus quos aspernatur
              </div>
            </div>
          </div>
          <div class="calendarContainer">
            <div class="eventDate">
              <span>30</span> <br />
              JUL
            </div>
            <div class="detailContainer">
              <div class="eventName">
                Sed et persipiatis unde omnis iste natus
              </div>
              <div class="eventDetails">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid temporibus quos aspernatur
              </div>
            </div>
          </div>
          <div class="calendarContainer">
            <div class="eventDate">
              <span>23</span> <br />
              AUG
            </div>
            <div class="detailContainer">
              <div class="eventName">
                Sed et persipiatis unde omnis iste natus
              </div>
              <div class="eventDetails">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid temporibus quos aspernatur
              </div>
            </div>
          </div>
          <div class="calendarContainer">
            <div class="eventDate">
              <span>23</span> <br />
              NOV
            </div>
            <div class="detailContainer">
              <div class="eventName">
                Sed et persipiatis unde omnis iste natus
              </div>
              <div class="eventDetails">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid temporibus quos aspernatur
              </div>
            </div>
          </div>
          <div class="calendarContainer">
            <div class="eventDate">
              <span>23</span> <br />
              DEC
            </div>
            <div class="detailContainer">
              <div class="eventName">
                Sed et persipiatis unde omnis iste natus
              </div>
              <div class="eventDetails">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid temporibus quos aspernatur
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
    var aboutContent = `<div class="aboutContainer">
    <div class="aboutHero"></div>
    <div class="ourStory">
      <h1><span>OUR HISTORY</span>:</h1>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora incidunt ut labore et dolore
        magnam aliquam quaerat voluptatem.
      </p>
    </div>
  </div>`;
    var galleryContent = `<div class="galleryContainer">
    <div class="bumper"></div>
    <div class="galleryContent">
      <div class="galleryHeader">
        <h1>GALLERY:</h1>
      </div>
      <div class="galleryImages">
        <a id="foodFestival" class="galleryLinks" href="#">
          <div id="foodFestHero"
          class="galleryHero"></div>
        </a>
        <a id="deeJay" class="galleryLinks"
        href="#">
          <div id="deeJayHero"
          class="galleryHero"></div>
        </a>
        <a id="speech" class="galleryLinks"
        href="#">
          <div id="speechHero"
          class="galleryHero"></div>
        </a>
        <a id="openFoodFest" class="galleryLinks" href="#">
          <div id="openFestHero"
          class="galleryHero"></div>
        </a>
        <a id="international" class="galleryLinks" href="#">
          <div id="interHero"
          class="galleryHero"></div>
        </a>
      </div>
    </div>
  </div>
`;
    var foodFestivalContent = `<div class="eventsContainer">
    <div class="bumper"></div>
    <div class="eventsContent">
      <div id="foodFestEvent" class="eventsHero">
        <div id="yellow" class="eventsHeader">
          <h1><span>1.</span>food festival</h1>
        </div>
      </div>
      <div class="eventsTextBox">
        <div class="leftText">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </div>
        <div class="rightText">
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </div>
      </div>
    </div>
  </div>`;
    var deeJayContent = `<div class="eventsContainer">
    <div class="bumper"></div>
    <div class="eventsContent">
      <div id="deeJayEvent" class="eventsHero">
        <div id="pink" class="eventsHeader">
          <h1><span>2.</span>dee-jay</h1>
        </div>
      </div>
      <div class="eventsTextBox">
        <div class="leftText">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </div>
        <div class="rightText">
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </div>
      </div>
    </div>
  </div>`;
    var speechContent = `<div class="eventsContainer">
    <div class="bumper"></div>
    <div class="eventsContent">
      <div id="speechEvent" class="eventsHero">
        <div id="green" class="eventsHeader">
          <h1><span>3.</span>speech</h1>
        </div>
      </div>
      <div class="eventsTextBox">
        <div class="leftText">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </div>
        <div class="rightText">
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </div>
      </div>
    </div>
  </div>`;
    var openFoodFestContent = `<div class="eventsContainer">
    <div class="bumper"></div>
    <div class="eventsContent">
      <div id="openFoodEvent" class="eventsHero">
        <div id="purple" class="eventsHeader">
          <h1><span>4.</span>open foodfest</h1>
        </div>
      </div>
      <div class="eventsTextBox">
        <div class="leftText">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </div>
        <div class="rightText">
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </div>
      </div>
    </div>
  </div>`;
    var internationalContent = `<div class="eventsContainer">
    <div class="bumper"></div>
    <div class="eventsContent">
      <div id="internationalEvent" class="eventsHero">
        <div id="teal" class="eventsHeader">
          <h1><span>5.</span>international</h1>
        </div>
      </div>
      <div class="eventsTextBox">
        <div class="leftText">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </div>
        <div class="rightText">
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </div>
      </div>
    </div>
  </div>`;
    var blogContent = `<div class="blogContainer">
    <div class="bumper"></div>
    <div class="blogContent">
      <div class="blogHeader">
        <h1>BLOG:</h1>
      </div>
      <div class="blogEntries">
        <div class="blogPost">
          <div class="blogDate">
            <p><span>06</span> <br />
              JUN</p>
          </div>
          <div class="blogThumb">
            <a id="jun06" href="#">
              <div class="blogImage"></div>
            </a>
            <div class="blogText">
              <p id="blogTitle">Sed et persipiatis unde omnis iste natus</p>
              <p id="blogBody">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
            </div>
          </div>
        </div>
        <div class="blogPost">
          <div class="blogDate">
            <p><span>30</span> <br />
              JUL</p>
          </div>
          <div class="blogThumb">
            <a id="jul30" href="#">
              <div class="blogImage"></div>
            </a>
            <div class="blogText">
              <p id="blogTitle">Sed et persipiatis unde omnis iste natus</p>
              <p id="blogBody">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
            </div>
          </div>
        </div>
        <div class="blogPost">
          <div class="blogDate">
            <p><span>30</span> <br />
              AUG</p>
          </div>
          <div class="blogThumb">
            <a id="aug30" href="#">
              <div class="blogImage"></div>
            </a>
            <div class="blogText">
              <p id="blogTitle">Sed et persipiatis unde omnis iste natus</p>
              <p id="blogBody">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
            </div>
          </div>
        </div>
        <div class="blogPost">
          <div class="blogDate">
            <p><span>23</span> <br />
              NOV</p>
          </div>
          <div class="blogThumb">
            <a id="nov23" href="#">
              <div class="blogImage"></div>
            </a>
            <div class="blogText">
              <p id="blogTitle">Sed et persipiatis unde omnis iste natus</p>
              <p id="blogBody">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
            </div>
          </div>
        </div>
        <div class="blogPost">
          <div class="blogDate">
            <p><span>23</span> <br />
              DEC</p>
          </div>
          <div class="blogThumb">
            <a id="dec23" href="#">
              <div class="blogImage"></div>
            </a>
            <div class="blogText">
              <p id="blogTitle">Sed et persipiatis unde omnis iste natus</p>
              <p id="blogBody">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
    var jun06Content = `<div class="blogPageContainer">
    <div class="bumper"></div>
    <div class="blogHero">
      <div class="datePosted">
        <p><span>06</span> <br />
          JUN
        </p>
      </div>
    </div>
    <div class="blogWriteUp">
      <h2 class="blogHeader"">Header #1:</h2>
      <div class="textBoxTall">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</div>
      <div class="textBoxShort"><p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p></div>
      <h2 class="blogHeader">Header #2:</h2>
      <div id="endBox" class="textBoxShort"><p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p></div>
    </div>
  </div>`;
    var jul30Content = `<div class="blogPageContainer">
    <div class="bumper"></div>
    <div class="blogHero">
      <div class="datePosted">
        <p><span>30</span> <br />
          JUL
        </p>
      </div>
    </div>
    <div class="blogWriteUp">
      <h2 class="blogHeader"">Header #1:</h2>
      <div class="textBoxTall">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</div>
      <div class="textBoxShort"><p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p></div>
      <h2 class="blogHeader">Header #2:</h2>
      <div id="endBox" class="textBoxShort"><p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p></div>
    </div>
  </div>`;
    var aug30Content = `<div class="blogPageContainer">
    <div class="bumper"></div>
    <div class="blogHero">
      <div class="datePosted">
        <p><span>30</span> <br />
          AUG
        </p>
      </div>
    </div>
    <div class="blogWriteUp">
      <h2 class="blogHeader"">Header #1:</h2>
      <div class="textBoxTall">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</div>
      <div class="textBoxShort"><p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p></div>
      <h2 class="blogHeader">Header #2:</h2>
      <div id="endBox" class="textBoxShort"><p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p></div>
    </div>
  </div>`;
    var nov23Content = `<div class="blogPageContainer">
    <div class="bumper"></div>
    <div class="blogHero">
      <div class="datePosted">
        <p><span>23</span> <br />
          NOV
        </p>
      </div>
    </div>
    <div class="blogWriteUp">
      <h2 class="blogHeader"">Header #1:</h2>
      <div class="textBoxTall">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</div>
      <div class="textBoxShort"><p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p></div>
      <h2 class="blogHeader">Header #2:</h2>
      <div id="endBox" class="textBoxShort"><p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p></div>
    </div>
  </div>`;
    var dec23Content = `<div class="blogPageContainer">
    <div class="bumper"></div>
    <div class="blogHero">
      <div class="datePosted">
        <p><span>23</span> <br />
          DEC
        </p>
      </div>
    </div>
    <div class="blogWriteUp">
      <h2 class="blogHeader"">Header #1:</h2>
      <div class="textBoxTall">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</div>
      <div class="textBoxShort"><p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p></div>
      <h2 class="blogHeader">Header #2:</h2>
      <div id="endBox" class="textBoxShort"><p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p></div>
    </div>
  </div>`;
    var contactContent = `<div class="contactContainer">
    <div class="bumper"></div>
    <div class="contactHeader">
      <h1>CONTACT US:</h1>
    </div>
    <div class="contactInfo">
      <div class="inputFields">
        <input type="text"
        name="name"
        id="name"
        placeholder="Your name..." />
        <input type="text"
        name="email"
        id="email"
        placeholder="Email Address..." />
        <input type="text"
        name="company"
        id="company"
        placeholder="Company..." />
        <input type="text"
        name="message"
        id="message"
        placeholder="Message..." />
        <button type="submit">Send Message</button>
      </div>
      <div class="mapContain">
        <div class="mapImage"></div>
      </div>
    </div>
  </div>`;
  
    function initListeners() {
      $("a").click(function (e) {
        let btnId = e.currentTarget.id;
        MODEL.changePageContent(btnId);
      });
    }
  
    var _changePageContent = function (pageName) {
      let contentName = pageName + "Content";
      $("#app").html(eval(contentName));
  
      if (pageName == "home") {
        $("#navHolder").removeClass("navHolderBlack");
        $("#links").removeClass("linksBlack");
        $("#logo").removeClass("logoBlack");
      } else {
        $("#navHolder").addClass("navHolderBlack");
        $("#links").addClass("linksBlack");
        $("#logo").addClass("logoBlack");
      }
  
      $(document).ready(function () {
        initListeners();
      });
    };
  
    return {
      changePageContent: _changePageContent,
    };
  })();
  