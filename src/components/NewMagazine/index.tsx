import { FaBookOpen } from 'react-icons/fa';
import { Container } from 'reactstrap';

function NewMagazine() {
    return (
        <section className="magazine-release">
            <Container>
                <div className="grid">
                    <div className="content">
                        <h3>
                            Ya salió la nueva edición de la revista <span className="secondary-color">Entre mates y otras yerbas</span>
                        </h3>
                        <p>
                            Todos los temas que le interesan, notas y la buena información de siempre, ahora en papel. <br />
                            <br />
                            Para conseguirla, contáctenos a: <a href="mailto:entrematesyotrasyerbas@gmail.com">entrematesyotrasyerbas@gmail.com</a>
                        </p>
                    </div>
                    <div className="img">
                        <img src="https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/v1/revista/fa80nglkryek1cwf6e5y" alt="Entre mates y otras yerbas Revista" />
                    </div>
                    <FaBookOpen className="bg-icon" />
                </div>
            </Container>
        </section>
    );
}

export default NewMagazine;
