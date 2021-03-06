import React from "react";
import Dice from "./Dice";
import { NewBeerForm } from "./NewBeerForm";
import { Button } from "@material-ui/core";
import { BeerDetail } from "./BeerDetail";
import { BeerList } from "./BeerList";
import { EditBeerForm } from "./EditBeerForm";
import { connect } from "react-redux";
import * as a from "../../actions";

class GameControl extends React.Component {
  
  handleNewBeerFormSubmission = (newBeer) => {
    const { dispatch } = this.props;
    dispatch(a.newBeer(newBeer));
    dispatch(a.toggleNewBeerFormVisibility());
  };

  handleNewBeerFormDisplay = () => {
    const { dispatch } = this.props;
    dispatch(a.toggleNewBeerFormVisibility());
  };

  handleEditBeerFormSubmission = (editBeer) => {
    const { dispatch } = this.props;
    dispatch(a.updateBeer(editBeer));
    dispatch(a.deselectBeer());
    dispatch(a.toggleEditBeerFormVisibility());
  };

  handleEditBeerFormDisplay = (id) => {
    const { dispatch } = this.props;
    if (this.props.selectBeer === null) {
      const editBeer = this.props.beerList[id];
      dispatch(a.selectBeer(editBeer));
    } else {
      dispatch(a.deselectBeer());
    }
    dispatch(a.toggleEditBeerFormVisibility());
  };

  handleSelectBeer = (id) => {
    const { dispatch } = this.props;
    if (id === undefined) {
      dispatch(a.deselectBeer());
    } else {
      const beer = this.props.beerList[id];
      dispatch(a.selectBeer(beer));
    }
  };

  handleDeleteBeer = (id) => {
    const { dispatch } = this.props;
    dispatch(a.deleteBeer(id));
  };

  handleIncrementingBeerPints = (id) => {
    const { dispatch } = this.props;
    dispatch(a.increaseBeerPintQuantity(id));
  };

  handleDecrementingBeerPints = (id) => {
    const { dispatch } = this.props;
    dispatch(a.decreaseBeerPintQuantity(id));
  };

  render() {
    let currentlyVisibleState = null;

    if (this.props.editBeerForm) {
      currentlyVisibleState = (
        <>
          <EditBeerForm
            onEditBeerFormSubmission={this.handleEditBeerFormSubmission}
            beer={this.props.selectBeer}
          ></EditBeerForm>
          <Button
            style={{ backgroundColor: "white" }}
            onClick={() => this.handleEditBeerFormDisplay()}
          >
            Return to beers
          </Button>
        </>
      );
    } else if (this.props.selectBeer != null) {
      currentlyVisibleState = (
        <>
          <BeerDetail beer={this.props.selectBeer}></BeerDetail>
          <Button
            style={{ backgroundColor: "white" }}
            onClick={() => this.handleSelectBeer()}
          >
            Return to beers
          </Button>
        </>
      );
    } else if (this.props.newBeerForm) {
      currentlyVisibleState = (
        <>
          <NewBeerForm
            onNewBeerFormSubmission={this.handleNewBeerFormSubmission}
          ></NewBeerForm>
          <Button
            style={{ backgroundColor: "white" }}
            onClick={() => this.handleNewBeerFormDisplay()}
          >
            Return to beers
          </Button>
        </>
      );
    } else {
      currentlyVisibleState = (
        <>
          <BeerList
            onBeerPintIncrement={this.handleIncrementingBeerPints}
            onBeerPintDecrement={this.handleDecrementingBeerPints}
            onDisplayBeerDetail={this.handleSelectBeer}
            onDeleteBeer={this.handleDeleteBeer}
            onDisplayEditBeerForm={this.handleEditBeerFormDisplay}
            onDisplayNewBeerForm={this.handleNewBeerFormDisplay}
            beerList={this.props.beerList}
          />
        </>
      );
    }
    return <>{currentlyVisibleState}</>;
  }
}

const mapStateToProps = (state) => {
  return {
    beerList: state.beerList,
    newBeerForm: state.newBeerForm,
    editBeerForm: state.editBeerForm,
    selectBeer: state.selectBeer,
  };
};

GameControl = connect(mapStateToProps)(GameControl);

export default GameControl;