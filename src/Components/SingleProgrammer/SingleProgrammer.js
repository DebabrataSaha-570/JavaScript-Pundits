import React from 'react';
import './SingleProgrammer.css'
const SingleProgrammer = (props) => {
    const { name, image, role, age, country, salary, github, twiiter } = props.programmer
    return (
        <div class="col-md-4">

            <div class="profile-card-4 text-center"><img src={image} class="img img-responsive" />
                <div class="profile-content">
                    <div class="profile-name">{name}

                    </div>
                    <div class="profile-description">{role}</div>
                    <div class="profile-description">Salary: ${salary}</div>
                    <div className="row">
                        <div className="col-md-4">
                            <div class="profile-overview">
                                <p>TWEETS</p>
                                <h4>1300</h4>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="profile-overview">
                                <p>FOLLOWERS</p>
                                <h4>250</h4>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="profile-overview">
                                <p>FOLLOWING</p>
                                <h4>168</h4>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div class="row">
                        <div class="col-xs-4">
                            <div class="profile-overview">
                                <p>TWEETS</p>
                                <h4>1300</h4></div>
                        </div>
                        <div class="col-xs-4">
                            <div class="profile-overview">
                                <p>FOLLOWERS</p>
                                <h4>250</h4></div>
                        </div>
                        <div class="col-xs-4">
                            <div class="profile-overview">
                                <p>FOLLOWING</p>
                                <h4>168</h4></div>
                        </div>
                    </div> */}
            </div>
        </div>


    );
};

export default SingleProgrammer;