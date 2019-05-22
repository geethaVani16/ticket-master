import React from 'react';

const Home = (props) => {
  setTimeout( () => { //pro
    props.history.push("/about")
  },3000)

    return(
      <div>
        <h2>Home Page</h2>
        <p>welcome to our website</p>
      </div>
    )
}

export default Home