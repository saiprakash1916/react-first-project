import React, { Component, Fragment } from 'react'
import Faker from "faker/locale/en_IND"
class RandomPhotoComponent extends Component {
    state = {
        photo: Faker.random.image(),
    };
    Changephoto = () => {
        //set state
        this.setState({ photo: Faker.random.image() })
    };
    render() { 
        return (
            <Fragment>
                <section className="container">
                    <h1>Random Images</h1>
                    <img className="img" src={this.state.photo} alt="test" />
                    <button className="btn btn-success m-2" onClick={this.Changephoto}>Change photo</button>
                </section>
            </Fragment>
        );
    }
}
 
export default RandomPhotoComponent;