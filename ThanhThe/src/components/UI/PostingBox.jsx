import React from "react";
import "../styles/PostingBox.css";

const PostingBox = ({ account }) => {
    return (
        <div className="ContainerBox">
            <section className="postingArea">
                <div>
                    <h1 className="userName">
                        <div className="profilePic"> </div>
                        <div className="Name">
                            {account?.firstName}
                        </div>
                    </h1>
                    <div>
                        <p className="inputText">
                            <span>
                                <input type="text" placeholder={`Write something here`} style={{ backgroundColor: '#222222', color: '#636363', borderRadius: '20px', width: '500px', height: '30px'  }} />
                            </span>
                        </p>
                    </div>
                </div>
            </section>

            <section className="InformationBox">
                <div>
                    <h1 className="Info">
                        <div className="aboutUS">ABOUT US</div>
                    </h1>
                    <div className="Intro">{account?.groups[2]?.introduction}</div>
                </div>
            </section>
        </div>
    );
};

export default PostingBox;