import React, { Component, lazy } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
export class News extends Component {
  static defaultProps={
    country:'in',
    pageSize:8,
    category:'science'
  }
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number
  }
  articles = [
    {
      source: { id: null, name: "CBS Sports" },
      author: "",
      title:
        "Patriots set wrong kind of record under Bill Belichick during first half of wild card game vs. Bills - CBS Sports",
      description: "Belichick's defense had no answer for Buffalo's offense",
      url: "https://www.cbssports.com/nfl/news/patriots-set-wrong-kind-of-record-under-bill-belichick-during-first-half-of-wild-card-game-vs-bills/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2021/02/04/645a6dda-5377-4bdd-bfde-8547d55ec023/thumbnail/1200x675/d805c7f3479da2d51d82cf2be8306e7d/new-team.jpg",
      publishedAt: "2022-01-16T13:41:00Z",
      content:
        "Bill Belichick's Patriots did something Saturday night that had not happened during Belichick's previous 43 playoff games as a head coach. The Patriots' defense allowed touchdowns on their first four… [+1768 chars]",
    },
    {
      source: { id: "the-hill", name: "The Hill" },
      author: "Amie Parnes",
      title: "New year brings more liberated Joe Biden | TheHill - The Hill",
      description:
        "When President Biden pounded his hand on a podium this week and declared “I'm tired of being&nbsp...",
      url: "https://thehill.com/homenews/administration/589834-new-year-brings-more-liberated-joe-biden",
      urlToImage:
        "https://thehill.com/sites/default/files/bidenjoe_011222gn5_lead.jpg",
      publishedAt: "2022-01-16T12:00:19Z",
      content:
        "When President BidenJoe BidenSunday shows preview: Democrats' struggle for voting rights bill comes to a headDavid Weil: Wrong man, wrong place, wrong time Biden's voting rights gamble prompts second… [+5500 chars]",
    },
    {
      source: { id: "nfl-news", name: "NFL News" },
      author: null,
      title:
        "Seahawks QB Russell Wilson wants to explore options this offseason - NFL.com",
      description:
        "Seattle Seahawks quarterback Russell Wilson is under contract for two more years, but NFL Network Insider Ian Rapoport reports Wilson wants to explore other options this offseason.",
      url: "https://www.nfl.com/news/seahawks-qb-russell-wilson-wants-to-explore-options-this-offseason",
      urlToImage:
        "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/fyzci0qpgbgxhqsyvacs",
      publishedAt: "2022-01-16T11:56:00Z",
      content:
        "Just like last year, the Seahawks' season crashed to a disappointing halt. Just like last year, the questions surrounding their star quarterback overshadow everything this offseason.\r\nAnd just like l… [+3034 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Alanne Orjoux, CNN",
      title:
        "Dangerous ice storm, heavy snowfall and potential travel woes and power outages expected in the Southeast - CNN",
      description:
        "A vicious winter storm will slice through parts of the Southeast Sunday, dropping freezing rain, ice and snow on cities and states that don't normally see much of the white stuff.",
      url: "https://www.cnn.com/2022/01/16/weather/winter-storm-ice-snow-sunday/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220116062854-weather-winter-storm-sunday-card-super-tease.jpg",
      publishedAt: "2022-01-16T11:42:00Z",
      content:
        "(CNN)A vicious winter storm will slice through parts of the Southeast Sunday, dropping freezing rain, ice and snow on cities and states that don't normally see much of the white stuff.\r\nAs many as 80… [+5214 chars]",
    },
    {
      source: { id: null, name: "DW (English)" },
      author: "Deutsche Welle (www.dw.com)",
      title: "Tsunami hits Tonga after volcanic eruption - DW (English)",
      description:
        "A tsunami has flooded Tonga's capital after a large eruption from an undersea volcano. Other Pacific islands and the US have issued advisories and have cautioned residents to seek higher ground.",
      url: "https://www.dw.com/en/tsunami-hits-tonga-after-volcanic-eruption/a-60433025",
      urlToImage: "https://static.dw.com/image/60433880_6.jpg",
      publishedAt: "2022-01-16T11:14:51Z",
      content:
        "The Pacific island of Tonga experienced a large volcanic eruption Saturday followed by a tsunami that flooded parts of the capital, Nuku'alofa. \r\nThe surge wave reached a height of 2.7 feet (83 centi… [+2814 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Matt Villano, CNN",
      title:
        "As the Omicron surge continues, parents of young kids hunker down...again - CNN",
      description:
        "While vaccines are available for kids ages 5 and up, parents with younger kids are still finding themselves living in fear of their kids getting Covid-19. As many of their families struggle through two years of isolation, here's what their parents told CNN.",
      url: "https://www.cnn.com/2022/01/16/health/under-five-children-covid-safety-wellness/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220112003312-02-yound-children-covid-pandemic-super-tease.jpg",
      publishedAt: "2022-01-16T11:01:00Z",
      content:
        "(CNN)Birthdays are usually joyous occasions for Bonnie Wiener-Bambara, with daylong parties that involve pampering, dinner and friends.\r\nWhen she turned 47 on January 10, however, the festivities wer… [+9491 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Djokovic boards plane bound for Dubai after court upholds visa cancellation - Reuters",
      description:
        "Tennis star Novak Djokovic boarded a plane bound for Dubai on Sunday evening, a Reuters journalist said, after the Australian Federal Court upheld the government's cancellation of his visa in a drama over his decision not to be vaccinated against coronavirus.",
      url: "https://www.reuters.com/lifestyle/sports/djokovic-boards-plane-bound-dubai-after-court-upholds-visa-cancellation-2022-01-16/",
      urlToImage:
        "https://www.reuters.com/resizer/zxtyl-h7VVxpiGWDcPtTVr0TO5g=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/QF2Y77JE7ZNRZHLUQCXHXUKB74.jpg",
      publishedAt: "2022-01-16T10:57:00Z",
      content:
        "Serbian tennis player Novak Djokovic walks in Melbourne Airport before boarding a flight, after the Federal Court upheld a government decision to cancel his visa to play in the Australian Open, in Me… [+649 chars]",
    },
    {
      source: { id: null, name: "SciTechDaily" },
      author: null,
      title:
        "Citizen Scientists Discover Giant Jupiter-Like Planet in NASA TESS Data - SciTechDaily",
      description:
        "Tom Jacobs of Bellevue, Washington, loves treasure hunts. Since 2010, the former U.S. naval officer has participated in online volunteer projects that allow anyone who is interested — “citizen scientists” — to look through NASA telescope data for signs of exo…",
      url: "https://scitechdaily.com/citizen-scientists-discover-giant-jupiter-like-planet-in-nasa-tess-data/",
      urlToImage:
        "https://scitechdaily.com/images/Exoplanet-TOI-2180-b-scaled.jpg",
      publishedAt: "2022-01-16T10:22:05Z",
      content:
        "ByNASAJanuary 16, 2022\r\nThis illustration depicts a Jupiter-like exoplanet called TOI-2180 b. It was discovered in data from NASA’s Transiting Exoplanet Survey Satellite. Credit: NASA/JPL-Caltech/R. … [+14100 chars]",
    },
    {
      source: { id: null, name: "Honolulu Star-Advertiser" },
      author: "Sophie Cocke",
      title:
        "Rush for COVID-19 tests bogs down Hawaii’s case-reporting system - Honolulu Star-Advertiser",
      description:
        "The state’s electronic data collection system for COVID-19 cases has become overwhelmed by the number of test results that it is trying to process. As a result, state health officials say they will stop processing negative test results beginning today.",
      url: "https://www.staradvertiser.com/2022/01/15/breaking-news/hawaii-health-department-to-change-covid-19-data-reporting-contact-tracing-amid-surge/",
      urlToImage:
        "https://www.staradvertiser.com/wp-content/uploads/2022/01/web1_20220115-web-covid-test.jpg",
      publishedAt: "2022-01-16T09:56:15Z",
      content:
        "The state’s electronic data collection system for COVID-19 cases has become overwhelmed by the number of test results that it is trying to process. As a result, state health officials say they will s… [+4311 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Rob Picheta, CNN",
      title:
        "Europe's loud, rule-breaking unvaccinated minority are falling out of society - CNN",
      description:
        'The increasingly vast divide between Europe\'s two populations means that "underground communities" of unvaccinated people have taken root.',
      url: "https://www.cnn.com/2022/01/16/europe/europe-covid-unvaccinated-society-cmd-intl/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/211217130237-europe-anti-vaccine-movements-file-100921-super-tease.jpg",
      publishedAt: "2022-01-16T08:16:00Z",
      content: null,
    },
    {
      source: { id: null, name: "New York Times" },
      author: "Anton Troianovski, David E. Sanger",
      title:
        "Russia Issues Subtle Threats More Far-Reaching Than a Ukraine Invasion - The New York Times",
      description:
        "If the West fails to meet its security demands, Moscow could take measures like placing nuclear missiles close to the U.S. coastline, Russian officials have hinted.",
      url: "https://www.nytimes.com/2022/01/16/world/europe/russia-ukraine-invasion.html",
      urlToImage:
        "https://static01.nyt.com/images/2022/01/15/world/15russia-options1/15russia-options1-facebookJumbo.jpg",
      publishedAt: "2022-01-16T08:00:12Z",
      content:
        "Russias response will be asymmetrical, fast and tough, Mr. Putin said last April, referring to the kinds of unconventional military action that Russia could take if adversaries threatened our fundame… [+1752 chars]",
    },
    {
      source: { id: "associated-press", name: "Associated Press" },
      author: "Raf Casert",
      title:
        "Typhoons, wildfires, missiles: Teen flies solo round world - Associated Press",
      description:
        "BRUSSELS (AP) — Avoid typhoon in the Philippines. Check. Steer clear of massive California wildfires. Check. Keep away from test missiles in North Korea. What? Wait.",
      url: "https://apnews.com/3766eb3ee4318c3db5f88d945a5c8d68",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/d7357af8fa8848f49aee9bac3d7775de/3000.jpeg",
      publishedAt: "2022-01-16T07:57:43Z",
      content:
        "BRUSSELS (AP) Avoid typhoon in the Philippines. Check.\r\nSteer clear of massive California wildfires. Check.\r\nKeep away from test missiles in North Korea. What? Wait.\r\nAs teenage pilot Zara Rutherford… [+5146 chars]",
    },
    {
      source: { id: "usa-today", name: "USA Today" },
      author: "Charles Trepany, USA TODAY",
      title:
        "'SNL': Joe Biden blames omicron, inflation and everything else on ‘Spider-Man: No Way Home’ - USA TODAY",
      description:
        'Joe Biden, played by James Austin Johnson on "SNL," knows who\'s really to blame for the COVID surge, inflation and more issues facing Americans.',
      url: "https://www.usatoday.com/story/entertainment/tv/2022/01/16/snl-joe-biden-blames-everything-wrong-america-spider-man/6546983001/",
      urlToImage:
        "https://www.gannett-cdn.com/presto/2021/10/03/USAT/502ffbc7-ed0d-479d-89d3-796aaad166e1-b572843c-1336-4bf2-9319-da6cd0663435_thumbnail.png?auto=webp&crop=849,478,x2,y0&format=pjpg&width=1200",
      publishedAt: "2022-01-16T07:02:06Z",
      content:
        'Joe Biden, played by "Saturday Night Live" cast member James Austin Johnson, knows who\'s really to blame for surging COVID cases, record-setting inflation and more issues facing Americans: Spider-Man… [+1815 chars]',
    },
    {
      source: { id: null, name: "New York Times" },
      author: "Linda Qiu",
      title:
        "Trump’s Covid and Election Falsehoods at Arizona Rally - The New York Times",
      description:
        "The former president falsely claimed that white Americans were being denied the Covid-19 vaccine, among other inaccuracies.",
      url: "https://www.nytimes.com/2022/01/16/us/politics/trump-rally-fact-check.html",
      urlToImage:
        "https://static01.nyt.com/images/2022/01/16/multimedia/16dc-fact-check-sub/merlin_200403720_f872171a-41c0-4a27-8de0-6c2d828c76ce-facebookJumbo.jpg",
      publishedAt: "2022-01-16T06:58:14Z",
      content:
        "WASHINGTON During a rally in Arizona on Saturday, former President Donald J. Trump repeated his lie that the 2020 election was stolen and made other false claims about the pandemic and the attack on … [+1386 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Microsoft says it observed destructive malware in systems belonging to several Ukraine govt agencies - Reuters",
      description:
        'Microsoft Corp <a href="https://www.reuters.com/companies/MSFT.O" target="_blank">(MSFT.O)</a> said in a blog post on Saturday it observed destructive malware in systems belonging to several Ukrainian government agencies and organisations that work closely wi…',
      url: "https://www.reuters.com/world/europe/microsoft-says-it-observed-destructive-malware-systems-belonging-several-ukraine-2022-01-16/",
      urlToImage:
        "https://www.reuters.com/resizer/vbFr-Ml5RRemKTarwVY3G9Ovy3U=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/QV7AHZSTKJO47HTDIIYXAZOHOI.jpg",
      publishedAt: "2022-01-16T06:05:00Z",
      content:
        "Jan 16 (Reuters) - Microsoft Corp (MSFT.O) said in a blog post on Saturday it observed destructive malware in systems belonging to several Ukrainian government agencies and organisations that work cl… [+1593 chars]",
    },
    {
      source: { id: null, name: "ESPN" },
      author: "Ben Baby",
      title:
        "Cincinnati Bengals QB Joe Burrow draws attention with his fashionable frames - ESPN",
      description:
        "After delivering the Bengals first playoff win in 31 years, Burrow wore some fashionable eyewear in his postgame news conference, and the internet took notice.",
      url: "https://www.espn.com/nfl/story/_/id/33075672/cincinnati-bengals-qb-joe-burrow-draws-attention-fashionable-frames",
      urlToImage:
        "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0116%2Fr962210_1023x575_16%2D9.jpg",
      publishedAt: "2022-01-16T05:29:00Z",
      content:
        "CINCINNATI - Many watching Joe Burrow's postgame news conference couldn't take their eyes off the Cincinnati Bengals' quarterback.\r\nWell, they couldn't stop looking at what was in front of his eyes, … [+661 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title: "DirecTV loss could cripple rightwing One America News - Reuters",
      description:
        "The largest satellite provider in the United States said late Friday it will drop One America News, a move that could financially cripple the rightwing TV network known for fueling conspiracy theories about the 2020 election.",
      url: "https://www.reuters.com/business/media-telecom/directv-loss-could-cripple-rightwing-one-america-news-2022-01-15/",
      urlToImage:
        "https://www.reuters.com/resizer/9Y8xdsRXHe8lISmtlHo9r2LpVoQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/OA6ECIGHDFIJLLUCTGUMU4VZHQ.jpg",
      publishedAt: "2022-01-16T04:38:00Z",
      content:
        "WASHINGTON, Jan 15 (Reuters) - The largest satellite provider in the United States said late Friday it will drop One America News, a move that could financially cripple the rightwing TV network known… [+4241 chars]",
    },
    {
      source: { id: null, name: "MMA Fighting" },
      author: "MMA Fighting Newswire",
      title:
        "UFC Vegas 46 post-fight show: Is Calvin Kattar a title contender after battering Giga Chikadze? - MMA Fighting",
      description:
        "Calvin Kattar dominated Giga Chikadze in the main event of Saturday night’s UFC Vegas 46 fight card.",
      url: "https://www.mmafighting.com/2022/1/15/22886114/ufc-vegas-46-post-fight-show-is-calvin-kattar-a-title-contender-after-battering-giga-chikadze",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/FKZLa069y4rRMZtQExOqczwVp-E=/0x369:5140x3060/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23172319/1364876862.jpg",
      publishedAt: "2022-01-16T04:35:43Z",
      content:
        "Calvin Kattar silenced all of the critics with a dominant performance in the UFCs first main event of 2022.\r\nKattar returned to the octagon after a year layoff to batter Giga Chikadze and hand the Ge… [+557 chars]",
    },
    {
      source: { id: null, name: "PINKVILLA" },
      author: "Pinkvilla Desk",
      title:
        "Britney Spears' sister Jamie Lynn requests the singer to call her and sort things out 'privately' - PINKVILLA",
      description:
        "Britney Spears and Jamie Lynn Spears share new statements on social media. Check out what the sisters have said about each other.",
      url: "https://www.pinkvilla.com/entertainment/hollywood/britney-spears-sister-jamie-lynn-requests-singer-call-her-and-sort-things-out-privately-995983",
      urlToImage:
        "https://www.pinkvilla.com/files/styles/fbimagesection/public/britney_spears_jamie_lynn_social_1.jpeg?itok=vYIb_Aep",
      publishedAt: "2022-01-16T03:49:33Z",
      content:
        "Britney Spears and her sister Jamie Lynn Spears have been having a back and forth over social media ever since the latter appeared in a television interview to speak about her new memoir.  While Brit… [+1562 chars]",
    },
    {
      source: { id: null, name: "The-sun.com" },
      author: "Nicole Chenoweth",
      title:
        "Kim Kardashian & ex Kanye West ‘avoided each other by staying at opposite sides’ of daughter Chicago’s birt... - The US Sun",
      description: "",
      url: "https://www.the-sun.com/entertainment/4472219/kim-kardashian-kanye-west-avoided-chicago-birthday-party/",
      urlToImage:
        "https://www.the-sun.com/wp-content/uploads/sites/6/2022/01/SC-Awkward-Exes-Excl-Off-Plat-copy.jpg?strip=all&quality=100&w=1200&h=800&crop=1",
      publishedAt: "2022-01-16T03:22:00Z",
      content:
        "KIM Kardashian and ex Kanye West avoided each other by staying at opposite sides of daughter Chicagos fourth birthday party, a source exclusively told The Sun. \r\nThe rapper went on a scathing Instagr… [+4378 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: [this.articles],
      loading: false,
      page: 1
    };
  }
  async componentDidMount() {
    this.setState({loading:true});
    let data;
    await fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fc95da7aab794658ab0947bb1efb7aa9&page=1&pageSize=${this.props.pageSize}`
    ).then((res) => {
      
      res.json().then((result) => {
        data = result;
        console.log(data.articles);
        this.setState({
          articles: result.articles,
          totalResults:result.totalResults,
          loading:false
        });
      });
    });
  }
  handlePreviousClick = async () => {
    this.setState({loading:true});
    await fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fc95da7aab794658ab0947bb1efb7aa9&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    ).then((res) => {
      
      res.json().then((result) => {
        //   data = result;
        console.log(result.articles);
        this.setState({
          articles: result.articles,
          page: this.state.page - 1,
          loading:false
        });
      });
    });
  }
  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

    }
    else {
      this.setState({loading:true});
      await fetch(
        `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fc95da7aab794658ab0947bb1efb7aa9&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
      ).then((res) => {
        this.setState({loading:true});
        res.json().then((result) => {
          // data = result;
          console.log(result.articles);
          this.setState({
            articles: result.articles,
            page: this.state.page + 1,
            loading:false
          });
        });
      });
    }



  }

  render() {
    console.log("Runned");
    return (
      <div className="container my-3">
        <h2>{this.props.category} --ManglaNews</h2>
        {this.state.loading && <Spinner></Spinner>}
        <div className="row">
          {!this.state.loading &&  this.state.articles.map((element) => {
            return (
              <div key={element.url} className="col-md-4">
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" disabled={this.state.page <= 1} className="btn btn-primary" onClick={this.handlePreviousClick}>
            Previous
          </button>
          <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResuluts / this.props.pageSize)} className="btn btn-primary" onClick={this.handleNextClick}>
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default News;
