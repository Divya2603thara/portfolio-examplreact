import React from "react";  
import divya from "../images/download.jpeg"

const About = ()=>{
    return(
        <div className="about">
            <h1>About Me</h1>
            <img src={divya} alt="picture" />
            {/* <img src= {require["../images/download.jpeg"]} alt="img" /> */}
            <p>
            The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/The href attribute requires a valid value to be accessible. <br />Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-validanchor-is-valid.md  jsx-a11y/anchor-is-valid
            </p>
        </div>
    )
}

export default About;