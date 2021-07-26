import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import GraphDrawing from '../Components/GraphDrawing/GraphDrawing';
const Home = () => {
    return (
        <div>
       <Header></Header>
       <GraphDrawing className="graphs"></GraphDrawing>
       <Footer></Footer>
       </div>
    );
}

export default Home;
