import React from 'react';
import {
    Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, CardImg, CardText,
    CardTitle, CardSubtitle
} from 'reactstrap';
import { Link } from 'react-router-dom';



function About(props) {

    const RenderLeader = props.leaders.map((leader) => {
        return (
            <div className='d-flex m-5'>
                <div>
                    <img src={leader.image}></img>
                </div>
                <div className='ms-5'>
                    <h3>{leader.name}</h3>
                    <p>{leader.designation}</p>
                    <p>{leader.description}</p>
                </div>
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Me</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Me</h3>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <Card>
                    <CardHeader className="bg-warning text-white">That Me!!!!</CardHeader>
                        <CardImg width="300" src="/assets/images/279076992_509225290890849_3651049992518678235_n.jpg" alt="Dough boy" />
                        <CardBody>
                            <CardTitle>Not gonna lie, We DIE BY 9.</CardTitle>
                            <CardSubtitle>Warinthon Phiokhaw.</CardSubtitle>
                            <CardText>King Mongkut’s University of Technology Thonburi, Examination day,2002 - Present</CardText>
                        </CardBody>
                    </Card>

                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-info text-white">Warinthon Phiokhaw</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-12 font-weight-bold text-lg">Education</dt>
                                <dd className="col-6">Studying Master degree of -</dd>
                                <dd className="col-12">King Mongkut’s University of Technology Thonburi 2022 - Present</dd>
                                <dd className="col-6">Study HighSchool at -</dd>
                                <dd className="col-12">Mary Vitthaya Kabinburi 2016 - 2021</dd>
                                <dd className="col-6">Study ElementarySchool at -</dd>
                                <dd className="col-12">Mary Vitthaya Kabinburi 2009 - 2015</dd>
                            </dl>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardHeader className="bg-success text-white">Favorite Movies</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-sm-4">No.1</dt>
                                <dt className="col-8">Color Out Of Space</dt>
                                <dd className="col-12">After a meteorite lands in the front yard of their farm, Nathan Gardner and his family find
                                    themselves battling a mutant extraterrestrial organism that infects their minds and bodies.</dd>
                                <dt className="col-sm-4">No.2</dt>
                                <dt className="col-8">The Thing</dt>
                                <dd className="col-12">A research team finds an alien being that has fallen from the sky and is starting to hunt them down.</dd>
                                <dt className="col-sm-4">No.3</dt>
                                <dt className="col-8">The Lighthouse</dt>
                                <dd className="col-12">In a remote island, Ephraim Winslow arrives as a lighthouse keeper and assists his elderly supervisor,
                                    Thomas Wake. As days pass, Winslow is haunted by strange and mysterious visions.</dd>
                            </dl>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardHeader className="bg-danger text-white">Favorite Subjects</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-sm-4">No.1</dt>
                                <dt className="col-8">CSC105 Web Application Development</dt>
                                <dd className="col-12">I really love this subject because at this time at this moment i take the Examination of this subject and maybe MAYBE the prof.wll have some sympathy for me and for this massage and pray to god(but actully this class is fun make us creat something that cool and never done before Good). love Warinthon</dd>
                                <dt className="col-sm-4">No.2</dt>
                                <dt className="col-8">LNG222 ACADEMIC LISTENING AND SPEAKING IN INTERNATIONAL</dt>
                                <dd className="col-12">Easy to collect some mark and very enjoyanble class it just fun time</dd>
                                <dt className="col-sm-4">No.3</dt>
                                <dt className="col-8">CSC209 DATA STRUCTURES</dt>
                                <dd className="col-12">another fun class with a lot of theory and some coding very entertrain Prof. and he buy us pizza to that + for him</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                   
                </div>
            </div>
        </div>
    );
}

export default About;    