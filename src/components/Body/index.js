import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-navbar">
              <h1 className="heading2">Left Navbar Menu</h1>
              <ul className="order-list">
                <li className="list-item">Item 1</li>
                <li className="list-item">Item 2</li>
                <li className="list-item">Item 3</li>
                <li className="list-item">Item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div>
              <h1 className="content-heading">Content</h1>
              <p className="para">
                Lorem ipsum My name Nandha.I am from AndhraPradesh in
                india.India is well developed country in world.There so many
                religious in india.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="right-navbar">
              <h1 className="heading2">Right Navbar</h1>
              <div>
                <p className="ad-box ad-name">Ad 1</p>
                <p className="ad-box2 ad-name">Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
