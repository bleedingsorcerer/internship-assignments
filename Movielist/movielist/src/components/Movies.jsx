import React from 'react';
import logo from './images/logo.png';
import allOfUsAreDead from './images/allOfUsAreDead.jpg';
import bridgerton from './images/bridgerton.jpg';
import crazyRichAsians from './images/crazyRichAsians.jpg';
import damsel from './images/damsel.jpg';
import gossipGirl from './images/gossipGirl.jpg';
import haunting from './images/haunting.jpg';
import enola from './images/enola.jpg';
import squidGame from './images/squidGame.jpg';
import sweetHome from './images/sweetHome.jpg';
import anne from './images/anne.jpg';
import pride from './images/pride.jpg';
import silentSea from './images/silentSea.jpg';

const Movies = () => {
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="logo-box">
            <img src={logo} alt={logo} className='img-fluid logo'></img>
        </div>    
        <span class="navbar-text mx-auto" style={{color:"white"}}>All Netflix Series Are Available Here</span>
        </nav>


        <div className="movie-list">
            <div className='container-fluid mt-5'>
            <div className='row'>
            <div className="col-lg-3 col-md-6 col-sm-12">

                        <div className="card">
                            <img src={allOfUsAreDead} alt={allOfUsAreDead} className="img-fluid movie-img"></img>
                            <h6 className="text-center" style={{marginTop:'10px',color:'white'}}>All Of Us Are Dead</h6>
                            <span style={{textAlign:'center', display:'block', color:'white', marginTop:'-5px'}}>This is a Netflix Series</span>
                            <div><button className="custom-button" style={{marginTop: "5px", color:'white', backgroundColor:"red"}}>Watch Now</button></div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card">
                            <img src={bridgerton} alt={bridgerton} className="img-fluid movie-img"></img>
                            <h6 className="text-center" style={{marginTop:'10px',color:'white'}}>Bridgerton</h6>
                            <span style={{textAlign:'center', display:'block', color:'white', marginTop:'-5px'}}>This is a Netflix Series</span>
                            <div><button className="custom-button" style={{marginTop: "5px", color:'white', backgroundColor:"red"}}>Watch Now</button></div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card">
                            <img src={crazyRichAsians} alt={crazyRichAsians} className="img-fluid movie-img crazy"></img>
                            <h6 className="text-center" style={{marginTop:'10px',color:'white'}}>Crazy Rich Asians</h6>
                            <span style={{textAlign:'center', display:'block', color:'white', marginTop:'-5px'}}>This is a Netflix Series</span>
                            <div><button className="custom-button" style={{marginTop: "5px", color:'white', backgroundColor:"red"}}>Watch Now</button></div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card">
                            <img src={damsel} alt={damsel} className="img-fluid movie-img movie-img damsel"></img>
                            <h6 className="text-center" style={{marginTop:'10px',color:'white'}}>Damsel</h6>
                            <span style={{textAlign:'center', display:'block', color:'white', marginTop:'-5px'}}>This is a Netflix Series</span>
                            <div><button className="custom-button" style={{marginTop: "5px", color:'white', backgroundColor:"red"}}>Watch Now</button></div>
                        </div>
                    </div>
            </div>


            <div className="row mt-5">

                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card">
                            <img src={gossipGirl} alt={gossipGirl} className="img-fluid movie-img"></img>
                            <h6 className="text-center" style={{marginTop:'10px',color:'white'}}>Gossip Girl</h6>
                            <span style={{textAlign:'center', display:'block', color:'white', marginTop:'-5px'}}>This is a Netflix Series</span>
                            <div><button className="custom-button" style={{marginTop: "5px", color:'white', backgroundColor:"red"}}>Watch Now</button></div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card">
                            <img src={haunting} alt={haunting} className="img-fluid movie-img haunting"></img>
                            <h6 className="text-center" style={{marginTop:'10px',color:'white'}}>The Haunting of Hill House</h6>
                            <span style={{textAlign:'center', display:'block', color:'white', marginTop:'-5px'}}>This is a Netflix Series</span>
                            <div><button className="custom-button" style={{marginTop: "5px", color:'white', backgroundColor:"red"}}>Watch Now</button></div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card">
                            <img src={enola} alt={enola} className="img-fluid movie-img"></img>
                            <h6 className="text-center" style={{marginTop:'10px',color:'white'}}>Enola Holmes 2</h6>
                            <span style={{textAlign:'center', display:'block', color:'white', marginTop:'-5px'}}>This is a Netflix Series</span>
                            <div><button className="custom-button" style={{marginTop: "5px", color:'white', backgroundColor:"red"}}>Watch Now</button></div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card">
                            <img src={squidGame} alt={squidGame} className="img-fluid movie-img"></img>
                            <h6 className="text-center" style={{marginTop:'10px',color:'white'}}>Squid Game</h6>
                            <span style={{textAlign:'center', display:'block', color:'white', marginTop:'-5px'}}>This is a Netflix Series</span>
                            <div><button className="custom-button" style={{marginTop: "5px", color:'white', backgroundColor:"red"}}>Watch Now</button></div>
                        </div>
                    </div>
            </div>

            <div className="row mt-5">
            <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card">
                            <img src={anne} alt={anne} className="img-fluid movie-img"></img>
                            <h6 className="text-center" style={{marginTop:'10px',color:'white'}}>Anne With An 'E'</h6>
                            <span style={{textAlign:'center', display:'block', color:'white', marginTop:'-5px'}}>This is a Netflix Series</span>
                            <div><button className="custom-button" style={{marginTop: "5px", color:'white', backgroundColor:"red"}}>Watch Now</button></div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card">
                            <img src={sweetHome} alt={sweetHome} className="img-fluid movie-img"></img>
                            <h6 className="text-center" style={{marginTop:'10px',color:'white'}}>Sweet Home</h6>
                            <span style={{textAlign:'center', display:'block', color:'white', marginTop:'-5px'}}>This is a Netflix Series</span>
                            <div><button className="custom-button" style={{marginTop: "5px", color:'white', backgroundColor:"red"}}>Watch Now</button></div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card">
                            <img src={pride} alt={pride} className="img-fluid movie-img pride"></img>
                            <h6 className="text-center" style={{marginTop:'10px',color:'white'}}>Pride & Prejudice</h6>
                            <span style={{textAlign:'center', display:'block', color:'white', marginTop:'-5px'}}>This is a Netflix Series</span>
                            <div><button className="custom-button" style={{marginTop: "5px", color:'white', backgroundColor:"red"}}>Watch Now</button></div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card">
                            <img src={silentSea} alt={silentSea} className="img-fluid movie-img"></img>
                            <h6 className="text-center" style={{marginTop:'10px',color:'white'}}>The Silent Sea</h6>
                            <span style={{textAlign:'center', display:'block', color:'white', marginTop:'-5px'}}>This is a Netflix Series</span>
                            <div><button className="custom-button" style={{marginTop: "5px", color:'white', backgroundColor:"red"}}>Watch Now</button></div>
                        </div>
                    </div>
            </div>

            </div>
        </div>
        </>
    )
}

export default Movies;