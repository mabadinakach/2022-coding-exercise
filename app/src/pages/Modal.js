import React, { Component } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  UncontrolledCarousel,
  ListGroup,
  ListGroupItemText,
  ListGroupItem,
  ListGroupItemHeading,
} from "reactstrap";

class ModalBuilder extends Component {
  render() {
    const product = this.props.product;

    if (!product || !product.title || !product.description) {
      return;
    }

    const images = product.images.map((imageUrl) => ({
      src: imageUrl,
    }));

    return (
      <Modal isOpen={this.props.modal} toggle={this.props.toggleModal} className={this.props.className}>
        <ModalHeader toggle={this.props.toggleModal}></ModalHeader>
        <ModalBody>
          <UncontrolledCarousel items={images} />
          <br></br>
          <ListGroup flush>
            <ListGroupItem >
                <ListGroupItemHeading>
                <h2>{product.title}</h2>
                </ListGroupItemHeading>
            </ListGroupItem>
            <ListGroupItem>
                <ListGroupItemHeading>
                Category
                </ListGroupItemHeading>
                <ListGroupItemText>
                {product.category}
                </ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem>
                <ListGroupItemHeading>
                Brand
                </ListGroupItemHeading>
                <ListGroupItemText>
                {product.brand}
                </ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem>
                <ListGroupItemHeading>
                Description
                </ListGroupItemHeading>
                <ListGroupItemText>
                {product.description}
                </ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem>
                <ListGroupItemHeading>
                Price
                </ListGroupItemHeading>
                <ListGroupItemText>
                {product.price}
                </ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem>
                <ListGroupItemHeading>
                Rating
                </ListGroupItemHeading>
                <ListGroupItemText>
                {product.rating}
                </ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem>
                <ListGroupItemHeading>
                Stock
                </ListGroupItemHeading>
                <ListGroupItemText>
                {product.stock} left
                </ListGroupItemText>
            </ListGroupItem>
            </ListGroup>
        </ModalBody>
      </Modal>
    );
  }
}

export default ModalBuilder;
