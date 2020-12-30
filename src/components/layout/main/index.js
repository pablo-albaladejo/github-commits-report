import React from 'react';
import './styles.css';

const MainLayout = ({ children }) =>
    (<div className="container">

        <div className="content">
            <div className="body">
                {children}
            </div>
        </div>


        <div className="footer">
            <div className="footerItems">
                <span>Pablo Albaladejo Mestre</span>
            </div>
        </div>

    </div>
    )
export default MainLayout;