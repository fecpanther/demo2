const React = require("react");
const RelatedCardList = require("./RelatedCardList.jsx");
const data = require("./sampleData.js");
const OutfitList = require("./OutfitList.jsx");
const { Typography } = require("@material-ui/core");
const { Link } = require("react-router-dom");

// module.exports = props => <div>Hello, related world.</div>;
class Related extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.changeRelatedProducts(this.props.currentProduct.id);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.currentProduct.id !== this.props.currentProduct.id)
      this.props.changeRelatedProducts(this.props.currentProduct.id);
  }

  render() {
    return (
      <div>
        <Typography style={{ fontSize: "10pt", textTransform: "uppercase" }}>
          Related Products
        </Typography>
        <RelatedCardList
          indexProps={this.props}
          related={this.props.relatedProducts}
          changeCurrentProduct={this.props.changeCurrentProduct}
          history={this.props.history}
        />
        <Typography style={{ fontSize: "10pt", textTransform: "uppercase" }}>
          Your Outfit
        </Typography>
        <OutfitList
          productId={this.props.currentProduct.id}
          data={data}
          changeCurrentProduct={this.props.changeCurrentProduct}
        />
      </div>
    );
  }
}

module.exports = Related;
