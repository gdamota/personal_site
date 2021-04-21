import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

class MediaCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openCard: false
    };
  }

  openCard = event => {
    let cardOpen = !this.state.openCard;
    this.setState({
      openCard: cardOpen
    });
  };

  cardBody = () => {
    return (
      <div>
        <div>
          <ul className="card">
            {this.props.data.info.map(el => (
              <li className="content" key={this.props.data.name}>
                <p>{el}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  render() {
    const open = this.state.openCard;
    return (
      <div>
        <Card style={{maxWidth: 1800, padding: 50}}>
          <CardActionArea>
            <CardMedia
              style={{height: 200}}
              image={this.props.data.img}
              title={this.props.data.img}
              onClick={this.openCard}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {this.props.data.name}
              </Typography>
              <Typography variant="body2" component="h3">
                {this.props.data.body}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <div className="card">{open && this.cardBody()}</div>
      </div>
    );
  }
}

export default MediaCard;
