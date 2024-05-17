import React from 'react';

const JoinShow: React.FC = () => {
    return (
        <div className="join-program">
            <div className="flex">
                <div className="join-img"></div>
                <div>
                    <h3>Participe de nuestro programa</h3>
                    <hr />
                    <p>De lunes a viernes de 00 a 03 am en Radio Carve.</p>
                    <p className="bold-700">
                        Conducción: <span className="primary-color">Miguel Cabrera</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default JoinShow;
