import React from 'react';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Album from './pages/Album';
import './App.css';
import { Link } from "react-router-dom";
import Player from "./components/AudioPlayer";
import { Layout } from "antd";
import Spotify from "./images/Spotify.png";
import { SearchOutlined, DownCircleOutlined } from "@ant-design/icons";

const { Content, Sider, Footer } = Layout;

const App = () => {

  const [nftAlbum, setNftAlbum] = useState();
  return (
    <>
      <Layout>
        <Layout>
          <Sider width={120} className="sideBar">
            <img src={Spotify} alt="Logo" className="logo"></img>
            <div className="searchBar">
              <span> Search </span>
           
            </div>
            <Link to="/">
            <p style={{ color: "#77A3C7" }}> Home </p>
            </Link>
            <p> Your Music </p>
            <div className="recentPlayed">
              <p className="recentTitle">RECENTLY PLAYED</p>
              <div className="install">
                <span style={{ fontSize: "12px" }} > Install App Coming Soon! </span>
                
                <DownCircleOutlined style={{ fontSize: "20px" }} />
              </div>
            </div>
          </Sider>
          <Content className="contentWindow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/album" element={<Album setNftAlbum={setNftAlbum}/>} />
          </Routes>
          </Content>
        </Layout>
        <Footer className="footer">
          {nftAlbum &&
          <Player
            url={nftAlbum}
          />
          }
        </Footer>
      </Layout>
    </>
  );
}


export default App;
