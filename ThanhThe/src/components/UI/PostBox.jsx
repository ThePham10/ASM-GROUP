import React from "react";
import "../styles/PostBox.css";
import myImage from '/Volumes/BrianPh/ThTh/Study/RMIT/Full Stack/Coding/ASM GROUP/asmgroup/images/rmit-sgs-b2-14.jpg';

const PostBox = ({ account }) => {
    return (
        <section className="postArea">
            <div>
                <h1 className="userName">
                    <div className="profilePic"> </div>
                    <div className="Name">{account?.firstName}</div>
                </h1>
                <div>
                    <p className="myImage">
                        <span>
                            <img
                                src={myImage}
                                alt="My Image"
                                style={{
                                    height: "100%",
                                    width: "100%",
                                    objectFit: "cover",
                                    margin: "0 auto"
                                }}
                            />
                            <img
                                src={myImage}
                                alt="My Image"
                                style={{
                                    height: "100%",
                                    width: "100%",
                                    objectFit: "cover",
                                    margin: "0 auto"
                                }}
                            />
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PostBox;