import React from 'react';
import allOfUsAreDead from './images/allOfUsAreDead.jpg';
import bridgerton from './images/bridgerton.jpg';
import crazyRichAsians from './images/crazyRichAsians.jpg';
import damsel from './images/damsel.jpg';
import gossipGirl from './images/gossipGirl.jpg';
import haunting from './images/haunting.jpg';
import kotaFactory from './images/kotaFactory.jpg';
import squidGame from './images/squidGame.jpg';
import sweetHome from './images/sweetHome.jpg';
import theRailwayMen from './images/theRailwayMen.jpg';
import pride from './images/pride.jpg';
import gilmore from './images/gilmore.jpg';


const Movies = () => {
    return(
        <>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <span class="navbar-text mx-auto" style={{color:"black"}}>All Netflix Series Available Here</span>
</nav>
            <div>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-lg-2 col-md-4 col-sm-12">
                        <div className="card">
                            <img src={allOfUsAreDead} alt={allOfUsAreDead} className="img-fluid movie-img"></img>
                            <h6 className="text-center" style={{marginTop:'10px'}}>All Of Us Are Dead</h6>
                            <span style={{textAlign:'center', display:'block', color:'black', marginTop:'-5px'}}>This is a Netflix Series</span>
                            <button style={{color:'red', border: "1px solid #EEE", margin: "5px 20px"}}>Watch Now</button>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-4 col-sm-12">
                        <div className="card">
                            <img src={bridgerton} alt={bridgerton} className="img-fluid movie-img"></img>
                            <h6 className="text-center" style={{marginTop:'10px'}}>Bridgerton</h6>
                            <span style={{textAlign:'center', display:'block', color:'black', marginTop:'-5px'}}>This is a Netflix Series</span>
                            <button style={{color:'red', border: "1px solid #EEE", margin: "5px 20px"}}>Watch Now</button>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-4 col-sm-12">
                        <div className="card">
                            <img src={crazyRichAsians} alt={crazyRichAsians} className="img-fluid movie-img"></img>
                            <h6 className="text-center" style={{marginTop:'10px'}}>Crazy Rich Asians</h6>
                            <span style={{textAlign:'center', display:'block', color:'black', marginTop:'-5px'}}>This is a Netflix Series</span>
                            <button style={{color:'red', border: "1px solid #EEE", margin: "5px 20px"}}>Watch Now</button>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-4 col-sm-12">
                        <div className="card">
                            <img src={damsel} alt={damsel} className="img-fluid movie-img movie-img"></img>
                            <h6 className="text-center" style={{marginTop:'10px'}}>Damsel</h6>
                            <span style={{textAlign:'center', display:'block', color:'black', marginTop:'-5px'}}>This is a Netflix Series</span>
                            <button style={{color:'red', border: "1px solid #EEE", margin: "5px 20px"}}>Watch Now</button>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-4 col-sm-12">
                        <div className="card">
                            <img src={gossipGirl} alt={gossipGirl} className="img-fluid movie-img"></img>
                            <h6 className="text-center" style={{marginTop:'10px'}}>Gossip Girl</h6>
                            <span style={{textAlign:'center', display:'block', color:'black', marginTop:'-5px'}}>This is a Netflix Series</span>
                            <button style={{color:'red', border: "1px solid #EEE", margin: "5px 20px"}}>Watch Now</button>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-4 col-sm-12">
                        <div className="card">
                            <img src={haunting} alt={haunting} className="img-fluid movie-img"></img>
                            <h6 className="text-center" style={{marginTop:'10px'}}>The Haunting of Hill House</h6>
                            <span style={{textAlign:'center', display:'block', color:'black', marginTop:'-5px'}}>This is a Netflix Series</span>
                            <button style={{color:'red', border: "1px solid #EEE", margin: "5px 20px"}}>Watch Now</button>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                <div className="col-lg-2 col-md-4 col-sm-12">
                        <div className="card">
                            <img src={kotaFactory} alt={kotaFactory} className="img-fluid movie-img"></img>
                            <h6 className="text-center" style={{marginTop:'10px'}}>Kota Factory</h6>
                            <span style={{textAlign:'center', display:'block', color:'black', marginTop:'-5px'}}>This is a Netflix Series</span>
                            <button style={{color:'red', border: "1px solid #EEE", margin: "5px 20px"}}>Watch Now</button>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-4 col-sm-12">
                        <div className="card">
                            <img src={squidGame} alt={squidGame} className="img-fluid movie-img"></img>
                            <h6 className="text-center" style={{marginTop:'10px'}}>Squid Game</h6>
                            <span style={{textAlign:'center', display:'block', color:'black', marginTop:'-5px'}}>This is a Netflix Series</span>
                            <button style={{color:'red', border: "1px solid #EEE", margin: "5px 20px"}}>Watch Now</button>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-4 col-sm-12">
                        <div className="card">
                            <img src={theRailwayMen} alt={theRailwayMen} className="img-fluid movie-img"></img>
                            <h6 className="text-center" style={{marginTop:'10px'}}>The Railway Men</h6>
                            <span style={{textAlign:'center', display:'block', color:'black', marginTop:'-5px'}}>This is a Netflix Series</span>
                            <button style={{color:'red', border: "1px solid #EEE", margin: "5px 20px"}}>Watch Now</button>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-4 col-sm-12">
                        <div className="card">
                            <img src={sweetHome} alt={sweetHome} className="img-fluid movie-img"></img>
                            <h6 className="text-center" style={{marginTop:'10px'}}>Sweet Home</h6>
                            <span style={{textAlign:'center', display:'block', color:'black', marginTop:'-5px'}}>This is a Netflix Series</span>
                            <button style={{color:'red', border: "1px solid #EEE", margin: "5px 20px"}}>Watch Now</button>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-4 col-sm-12">
                        <div className="card">
                            <img src={pride} alt={pride} className="img-fluid movie-img"></img>
                            <h6 className="text-center" style={{marginTop:'10px'}}>Pride & Prejudice</h6>
                            <span style={{textAlign:'center', display:'block', color:'black', marginTop:'-5px'}}>This is a Netflix Series</span>
                            <button style={{color:'red', border: "1px solid #EEE", margin: "5px 20px"}}>Watch Now</button>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-4 col-sm-12">
                        <div className="card">
                            <img src={gilmore} alt={gilmore} className="img-fluid movie-img"></img>
                            <h6 className="text-center" style={{marginTop:'10px'}}>Gilmore Girls</h6>
                            <span style={{textAlign:'center', display:'block', color:'black', marginTop:'-5px'}}>This is a Netflix Series</span>
                            <button style={{color:'red', border: "1px solid #EEE", margin: "5px 20px"}}>Watch Now</button>
                        </div>
                    </div>
                </div>
            </div>        
            </div>
        </>
    )
}

export default Movies;