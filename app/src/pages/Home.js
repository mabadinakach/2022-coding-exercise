import React, { Component } from "react";
import "../css/home.css";
import axios from "axios";
import ModalProduct from "./Modal";
import AddProductModal from "./AddProductModal";
import {
  FormGroup,
  Input,
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Spinner,
} from "reactstrap";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      categories: [],
      searchedValue: "",
      dropdownOpen: false,
      modal: false,
      selectedProduct: null,
      error: false,
      errorCode: "",
      addModal: false,
    };
  }

  componentDidMount() {
    this.getProducts();
    this.getCategories();
  }

  toggleModalProduct = (product) => {
    this.setState({
      modal: !this.state.modal,
      selectedProduct: product,
    });
  };

  toggleAddProductModal = () => {
      this.setState({
        addModal: !this.state.addModal
      });
  }

   getProducts = async () => {
    const url = "https://dummyjson.com/products";
    const response = await axios.get(url).catch((err) => {
        if (err.response) {
            this.setState({
                error: true,
                errorCode: err.response.status + " " + err.response.data,
            })
          }
    });
    this.setState({
        products: response.data.products,
        error: false,
    });
  };

  getCategories = async () => {
    const url = "https://dummyjson.com/products/categories";
    const response = await axios.get(url).catch((err) => {
    if (err.response) {
        this.setState({
            error: true,
            errorCode: err.response.status + " " + err.response.data,
        })
        }
    });
    this.setState({
        categories: response.data,
    })
  }

  searchProducts = async (event) => {
    const target = event.target;
    const query = target.value;
    const url = `https://dummyjson.com/products/search?q=${query}`;
    const response = await axios.get(url).catch((err) => {
        if (err.response) {
            this.setState({
                error: true,
                errorCode: err.response.status + " " + err.response.data,
            })
            }
    });
    this.setState({
        products: response.data.products,
        error: false,
    });
    console.log(response, url);
    
  }

  render() {
    if (!this.state.products && !this.state.error) {
        return (
            <Spinner>
            Loading...
            </Spinner>
        )
    }

    if (this.state.error) {
        return (
            <Container>
                <h1 style={{color: "white"}}>{this.state.errorCode}</h1>
            </Container>
        )
    }

    return (
      <div className="home">
          <Container>
              <Button style={{margin: 10}} color="success" className="float-end sticky-top" onClick={() => this.toggleAddProductModal()}>
                  Add Product
              </Button>
            <FormGroup className="searchBar">
              <Input
                id="searchBar"
                name="search"
                placeholder="Search product..."
                type="search"
                onChange={this.searchProducts}
              />
            </FormGroup>
            {this.state.products.length <= 0 &&
                <h2 style={{color: "white"}}>
                No results found.
                </h2>
            }
            <Row>
              {this.state.products.map((product, id) => (
                <Col
                  sm="4"
                  xs="6"
                  key={id}
                  className="product"
                >
                  <Card>
                    <CardImg
                        alt={product.description}
                        src={product.thumbnail}
                        top
                        width="100%"
                    />
                    <CardBody>
                    <CardTitle tag="h5">
                        {product.title}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        {product.category}
                    </CardSubtitle>
                    <CardText>
                        {product.description}
                    </CardText>
                    <Button onClick={() => this.toggleModalProduct(product)}>
                        Details
                    </Button>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
          <ModalProduct
            key={this.state.selectedProduct?.id}
            modal={this.state.modal}
            toggleModal={this.toggleModalProduct}
            product={this.state.selectedProduct}
          />
          <AddProductModal 
            modal={this.state.addModal}
            toggleModal={this.toggleAddProductModal}
          />
            
      </div>
    );
  }
}

export default Home;
