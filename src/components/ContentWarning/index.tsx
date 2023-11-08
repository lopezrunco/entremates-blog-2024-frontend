import { Container } from 'reactstrap';
import { FaMicrophoneAlt } from 'react-icons/fa';

function ContentWarning() {
    return (
        <section className="about light-img-bg">
            <Container>
                <div className="grid">
                    <div className="info">
                        <h2>
                            Escúchenos en Radio Carve 850 AM <br /> De lunes a viernes de 00 a 03 am
                        </h2>
                        <p>
                            Participe de nuestro programa a través del teléfono <a href="tel:+59829007643">2900 7643</a> o del Whatsapp <a href="https://wa.me/59895134303" target='_blank' rel='noreferrer'>095 134 303</a>.
                        </p>
                    </div>
                    <div className="info">
                        <h3>
                            <span className="danger">Aviso importante</span>
                        </h3>
                        <p>
                            Nosotros no aconsejamos, ni recetamos. <br />
                            Simplemente como periodistas, compartimos con la gente, el uso, dosis, fórmulas y virtudes curativas de las hierbas medicinales, que forman parte del conocimiento empírico
                            de los pueblos y la comprobación luego de la ciencia.
                        </p>
                    </div>
                    <FaMicrophoneAlt className="bg-icon" />
                </div>
            </Container>
        </section>
    );
}

export default ContentWarning;
