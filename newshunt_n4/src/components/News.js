import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "Xataka.com",
      },
      author: "Eva R. de Luis",
      title:
        "Este es el mapa de la DGT para visualizar dónde hay balizas V16 activas en España. Hay otro mapa no oficial más útil",
      description:
        'Estamos en 2026 y eso significa el adiós (o no) de los triángulos de señalización en favor de las balizas v16 para señalizar accidentes o averías en carretera. ¿Que no la llevas? Pues multa de 80 euros, aunque estos primeros días Pere Navarro aseguró que "ser…',
      url: "https://www.xataka.com/movilidad/este-mapa-dgt-para-visualizar-donde-hay-balizas-v16-activas-espana-hay-otro-mapa-no-oficial-mucho-util",
      urlToImage: "https://i.blogs.es/c1d3c1/mapicaa/840_560.jpeg",
      publishedAt: "2026-01-03T10:30:59Z",
      content:
        "Estamos en 2026 y eso significa el adiós (o no) de los triángulos de señalización en favor de las balizas v16 para señalizar accidentes o averías en carretera. ¿Que no la llevas? Pues multa de 80 eur… [+4794 chars]",
    },
    {
      source: {
        id: null,
        name: "Daringfireball.net",
      },
      author: "John Gruber",
      title: "★ Clicks Communicator and Clicks Power Keyboard",
      description:
        "I just love the chutzpah of these guys. They started with a good minimal launch product and are back two years later with what looks like a *much* better idea for a phone keyboard accessory. But they’re also now making their own whole goddamn phone.",
      url: "https://daringfireball.net/2026/01/clicks_communicator_and_clicks_power_keyboard",
      urlToImage: "",
      publishedAt: "2026-01-03T00:03:33Z",
      content:
        "Two years ago, I linked to the then-new Clicks keyboard case — an iPhone case with a built-in BlackBerry-style hardware keyboard jutting out from the bottom. I wrote then:\n\n\n I don’t know how much I’… [+3162 chars]",
    },
    {
      source: {
        id: null,
        name: "Bluerenga.blog",
      },
      author: null,
      title: "Adventure 751 (1980)",
      description:
        "COME WITH ME TO COLOSSAL CAVE. WHERE MAGIC ABOUNDS AND TREASURES ARE FOUND. BID YOUR FINGERS FOLLOW YOUR COMMANDS AND I WILL BE YOUR EYES AND HANDS. YET BEWARE THE FIERY DRAGON, FOR HE KNOWS NOT WH…",
      url: "https://bluerenga.blog/2026/01/01/adventure-751-1980/",
      urlToImage:
        "https://bluerenga.blog/wp-content/uploads/2025/12/newadvshot.jpeg",
      publishedAt: "2026-01-03T02:38:06Z",
      content:
        "COME WITH ME TO COLOSSAL CAVE. WHERE MAGIC ABOUNDS AND TREASURES ARE FOUND. BID YOUR FINGERS FOLLOW YOUR COMMANDS AND I WILL BE YOUR EYES AND HANDS. YET BEWARE THE FIERY DRAGON, FOR HE KNOWS NOT WHET… [+23467 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Bradley C",
      title:
        "Apple @ Work: New survey shows why the Mac is becoming the most sustainable device in the enterprise",
      description:
        "Apple @ Work is exclusively brought to you by Mosyle, the only Apple Unified Platform. Mosyle is the only solution that integrates in a single professional-grade platform all the solutions necessary to seamlessly and automatically deploy, manage & protect App…",
      url: "https://9to5mac.com/2026/01/03/new-survey-shows-why-the-mac-is-becoming-the-most-sustainable-device-in-the-enterprise/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2025/12/Survey.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2026-01-03T11:00:00Z",
      content:
        "Apple @ Work is exclusively brought to you by Mosyle, the only Apple Unified Platform. Mosyle is the only solution that integrates in a single professional-grade platform all the solutions necessary … [+6480 chars]",
    },
    {
      source: {
        id: "die-zeit",
        name: "Die Zeit",
      },
      author: "DIE ZEIT: News ",
      title:
        "Fernsehen und Streaming: Worauf sich Streaming-Fans 2026 freuen können",
      description:
        "Hier finden Sie Informationen zu dem Thema „Fernsehen und Streaming“. Lesen Sie jetzt „Worauf sich Streaming-Fans 2026 freuen können“.",
      url: "https://www.zeit.de/news/2026-01/03/worauf-sich-streaming-fans-2026-freuen-koennen",
      urlToImage:
        "https://img.zeit.de/news/2026-01/03/worauf-sich-streaming-fans-2026-freuen-koennen-image-group/wide__1300x731",
      publishedAt: "2026-01-03T06:07:09Z",
      content:
        "In diesem Jahr stehen neue Episoden von einigen Serienhits an, darunter das viel gefeierte Teenage-Drama «Euphoria» (Wow/HBO Max) mit Zendaya und die Historien-Romanze «Bridgerton» (Netflix). Auch di… [+8076 chars]",
    },
    {
      source: {
        id: null,
        name: "BGR",
      },
      author: "staff@bgr.com (José Adorno)",
      title: "5 Popular Apps That Don't Work With Apple CarPlay (But Should)",
      description:
        "CarPlay has become a vital element of the modern vehicle ecosystem, but Apple's infotainment system is still missing a number of major apps.",
      url: "https://www.bgr.com/2063611/popular-apps-dont-work-apple-carplay/",
      urlToImage:
        "https://www.bgr.com/img/gallery/5-popular-apps-that-dont-work-with-apple-carplay-but-should/l-intro-1767066365.jpg",
      publishedAt: "2026-01-03T11:17:00Z",
      content:
        "No one should be driving while watching TV. That makes complete sense. Still, popular streaming platforms should be available on CarPlay when people aren't driving. For example, Tesla lets users watc… [+965 chars]",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
    };
  }

  // async componentDidMount() {
  //   let apiKey = "988bbb75c65049a6a61c1cb4a9808280";
  //   let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + apiKey;
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   this.setState({ articles: parsedData.articles });
  // }

  render() {
    let { mode, color } = this.props;

    let blue = "#0d6efd";
    let red = "#dc3545";
    let yellow = "#ffc107";
    let green = "#198754";

    let PaginationbuttonStyle;

    if (color === yellow) {
      PaginationbuttonStyle = {
        backgroundColor: yellow,
        color: "black",
        borderColor: color
      };
    } else {
      PaginationbuttonStyle = {
        backgroundColor: color,
        color: "white",
        borderColor: color
      };
    }

    return (
      <div className="container my-3 my-4">
        <h2
          className="mb-4"
          style={mode === "dark" ? { color: "white" } : { color: "black" }}
        >
          Top Headlines
        </h2>
        <div className="row g-4">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 d-flex" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  mode={mode}
                  color={color}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        
        <hr/>
        <nav aria-label="...">
          <ul class="pagination justify-content-center my-4">
            <li class="page-item disabled">
              <a class="page-link">
              <span aria-hidden="true">&laquo; Previous</span>
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" style={{ color: 'black' }} href="#">
                1
              </a>
            </li>
            <li class="page-item active">
              <a class="page-link" href="#" style={PaginationbuttonStyle} aria-current="page">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" style={{ color: 'black' }} href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" style={{ color: 'black' }} href="#">
                <span aria-hidden="true">Next &raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default News;
