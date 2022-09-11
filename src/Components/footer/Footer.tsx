import React from 'react';
import {InstagramOutlined,
        YoutubeOutlined,
        FacebookOutlined,
        TwitterOutlined
} from '@ant-design/icons';

export const Footer = () => {
    return(
        <footer className="footer">
            <div className="stats">
                <div>
                    <h2>$135 779 836</h2>
                    <p>Raised Funded</p>
                </div>
                <div>
                    <h2>12 312</h2>
                    <p>Campaings</p>
                </div>
                <div>
                    <h2>1256</h2>
                    <p>Temples</p>
                </div>
                <div>
                    <h2>13 468</h2>
                    <p>Users</p>
                </div>
            </div>
            <hr/>
            <div className="footer-social">
                <span>Follow us on social media</span>
                <div >
                    <FacebookOutlined style={{fontSize:"50px", margin:"15px"}}/>
                    <TwitterOutlined style={{fontSize:"50px", margin:"15px"}}/>
                    <InstagramOutlined style={{fontSize:"50px", margin:"15px"}}/>
                    <YoutubeOutlined style={{fontSize:"50px", margin:"15px"}}/>
                </div>
            </div>
            <hr className="bottom-line"/>
        </footer>
    )
}