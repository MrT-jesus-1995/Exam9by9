import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

function RenderCard({item}) {
    return(
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
            <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );

}

function Home(props) {
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-6 ">
                <Card>
                        <CardImg width="300" src="/assets/images/SC347661.jpg" alt="Children on the Seashore, Guernsey" />
                        <CardBody>
                            <CardTitle>Featured Art</CardTitle>
                            <CardText>On a bay ringed by cliffs, fashionable young Parisians enjoy the sun and sea. This scene was inspired by the beaches of Guernsey</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-6 ">
                    <RenderCard item={props.promotion} />
                </div>
            </div>
        </div>
    );
}

export default Home;
