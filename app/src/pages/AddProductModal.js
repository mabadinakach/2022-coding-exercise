import React, { Component } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Row,
  Col, 
  Label,
  Input,
  FormGroup,
  Button,
} from "reactstrap";
import axios from "axios";

class AddProductModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
          categories: [],
          selectedCategory: "smartphones",
          title: "",
          brand: "",
          description: "",
          price: "",
          stock: "",
          error: false,
          errorCode: "",
          modalOpen: false,
        };
      }

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
            
            error: false,
        });
    }

    componentDidMount() {
        console.log(this.props)
        this.getCategories();
    }

    handleChange = (e) => {
        this.setState({selectedCategory:e.target.value});
      }

    postProduct = () => {

        if (this.state.title != "" && this.state.brand != "" && this.state.selectedCategory != "" && this.state.price != "" && this.state.stock != "") {
            fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: this.state.title,
                brand: this.state.brand,
                category: this.state.selectedCategory,
                stock: this.state.stock,
                price: this.state.price,
                })
            })
            .then(res => res.json())
            .then(alert("Product added successfully"));
        } else {
            alert("Please check missing fields")
        }
    }
    

  render() {
    return (
      <Modal isOpen={this.props.modal} toggle={this.props.toggleModal} className="addModal">
        <ModalHeader toggle={this.props.toggleModal}>
            <Label>
                Add Product
            </Label>
        </ModalHeader>
        <ModalBody>
        <Form>
        <Row>
        <FormGroup>
            <Label for="title">
                Title
                </Label>
                <Input onChange={e => this.setState({title: e.target.value})}
                id="title"
                name="title"
                placeholder=""
                />
            </FormGroup>
            <Col md={6}>
            <FormGroup>
                <Label for="brand">
                Brand
                </Label>
                <Input onChange={e => this.setState({brand: e.target.value})}
                id="brand"
                name="brand"
                placeholder=""
                type="text"
                />
            </FormGroup>
            </Col>
            <Col md={6}>
            <FormGroup>
                <Label for="category">
                Category
                </Label>
                <Input type="select" id="category" name="category" onChange={this.handleChange} value={this.state.selectedCategory}>
                {this.state.categories.map((product, id) => (
                    <option>
                        {product}
                    </option>
                ))}
                </Input>
            </FormGroup>
            </Col>
        </Row>
        <FormGroup>
            <Label for="description">
            Description
            </Label>
            <Input onChange={e => this.setState({description: e.target.value})}
            id="description"
            name="description"
            placeholder=""
            />
        </FormGroup>
        <Row>
            <Col md={4}>
            <FormGroup>
                <Label for="price">
                Price
                </Label>
                <Input onChange={e => this.setState({price: e.target.value})}
                id="price"
                name="price"
                />
            </FormGroup>
            </Col>
            <Col md={4}>
            <FormGroup>
                <Label for="stock">
                Stock
                </Label>
                <Input onChange={e => this.setState({stock: e.target.value})}
                id="stock"
                name="stock"
                />
            </FormGroup>
            </Col>
        </Row>
        <Button onClick={this.postProduct} color="success">
            Publish
        </Button>
        </Form>
        </ModalBody>
      </Modal>
    );
  }
}

export default AddProductModal;
