import React from "react";

const Profile = () => {
    return (
        <section className="container">
            <div className="row row-20">
                <div className="col m3 s12 center-align">
                    <img src="https://materializecss.com/images/yuna.jpg" alt="" className="circle responsive-img"/>
                </div>
                <div className="col m9 s12">
                    <div className="row row-0">
                        <div className="col s12 center-align hide-on-med-and-up">
                            <h3>Daniel Cataño Restrepo</h3>
                        </div>
                        <div className="col s12 hide-on-small-and-down">
                            <h3>Daniel Cataño Restrepo</h3>
                        </div>
                        <div className="col s12">
                            <div className="row row-0">
                                <div className="col s4">
                                    <p><strong>3 </strong>Posts</p>
                                </div>
                                <div className="col s4">
                                    <p><strong>18 </strong>Followers</p>
                                </div>
                                <div className="col s4">
                                    <p><strong>139 </strong>Following</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="row">
                    <div className="col s4">
                        <img className="responsive-img" src="https://images.unsplash.com/photo-1559022383-9eb1a85a99b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"/>
                    </div>
                    <div className="col s4">
                        <img className="responsive-img" src="https://images.unsplash.com/photo-1559022383-9eb1a85a99b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"/>
                    </div>
                    <div className="col s4">
                        <img className="responsive-img" src="https://images.unsplash.com/photo-1559022383-9eb1a85a99b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col s4">
                        <img className="responsive-img" src="https://images.unsplash.com/photo-1559022383-9eb1a85a99b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"/>
                    </div>
                    <div className="col s4">
                        <img className="responsive-img" src="https://images.unsplash.com/photo-1559022383-9eb1a85a99b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"/>
                    </div>
                    <div className="col s4">
                        <img className="responsive-img" src="https://images.unsplash.com/photo-1559022383-9eb1a85a99b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Profile;
