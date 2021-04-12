import React from "react"

import "./index.scss"

const IndexPage = () => {
    return (
        <div className="container">
            <div className="columns">
                <div className="column">
                    <h2 className="title is-2">Level 2 heading</h2>
                    <p className="content">Cool content. Using Bulma!</p>
                </div>
                <div className="column is-four-fifths">
                    <h2 className="title is-2">Level 2 heading</h2>
                    <p className="content">This column is cool too!</p>
                </div>
            </div>
        </div>
    )
}
export default IndexPage

/**
 * 3. Write all mark up (No styling / logic) in index page
 * 4. Break down Markup
 * 5. Add styling
 * 6. Add logic
 */
