import React from 'react';
import { FaBookOpen } from 'react-icons/fa';
import { Container } from 'reactstrap';

import { contactData } from '../../data/contact';
import magazineImageSrc from '../../assets/images/revista-45.webp';

const NewMagazine: React.FC = () => {
    if (!contactData || contactData.length === 0 || !contactData[0]) return null;

    return (
        <section className="magazine-release">
            <Container>
                <div className="grid">
                    <div className="content">
                        <h3>
                            Ya salió la nueva edición de la revista <br />
                            <span className="secondary-color">Entre mates y otras yerbas</span>
                        </h3>
                        <p>
                            Todos los temas que le interesan, notas y la buena información de siempre, ahora en papel. <br />
                            <br />
                            Para conseguirla, contáctenos a: <a href={contactData[0].link}>{contactData[0].title}</a>
                        </p>
                    </div>
                    <div className="img">
                        <img src={magazineImageSrc} alt="Portada de la Revista Entre mates y otras yerbas" />
                    </div>
                    <FaBookOpen className="bg-icon" />
                </div>
            </Container>
        </section>
    );
};

export default NewMagazine;
