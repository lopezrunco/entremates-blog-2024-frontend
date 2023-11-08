import { FaChevronRight } from 'react-icons/fa';
import { Container, Modal, ModalHeader, ModalBody, ModalFooter, Button, Row, Col } from 'reactstrap';
import React, { useState } from 'react';

import IPageProps from '../interfaces/page';

import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Bottom from '../components/Bottom';
import Footer from '../components/Footer';
import NewMagazine from '../components/NewMagazine';

const magazineList = [
    {
        id: 40,
        imageTitle: 'Revista 40',
        resume: ['Se le conoce como Tulsi, lo cual significa la incomparable', 'Naturalmente sana, eficazmente buena: Stevia', 'Mata más gérmenes que los mejores limpiadores comerciales'],
        imageSource: 'https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/v1/revista/jwbidbcfqlobbqgj8pve'
    },
    {
        id: 39,
        imageTitle: 'Revista 39',
        resume: ['Mucho más que una planta bonita...', 'Qué le sucede a su cuerpo si no consume suficiente sal', 'Para aumentar las defensas', 'No es solamente un alimento para pájaros'],
        imageSource: 'https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/v1/revista/lduwsdpoxozwzkuc6tgo'
    },
    {
        id: 30,
        imageTitle: 'Revista 30',
        resume: ['Tiene la capacidad de reforzar todo el sistema inmunológico y más...', 'Vitamina B17 y el cáncer. ¿Dónde se encuentra?', 'Antiinflamatorio ideal para los ojos'],
        imageSource: 'https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/v1/revista/cslqijnbuc4o8amper2k'
    },
    {
        id: 29,
        imageTitle: 'Revista 29',
        resume: [
            'Actúa como analgésico, antiasmático, contra el cáncer, bactericida y más...',
            'Alpiste: Mejora los riñones y el hígado, controla la diabetes',
            'Cebolla: Para dejar lejos de su casa a los virus',
            'Erisipela: Reduzca los síntomas con hierbas medicinales'
        ],
        imageSource: 'https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/v1/revista/riw2qghg1ubonkeolahz'
    },
    {
        id: 25,
        imageTitle: 'Revista 25',
        resume: [
            'Conocida como "Semilla de Horus" aún nos sigue regalando su mágico poder',
            'Contra piedras renales, sinusitis, alergias...',
            'Especia popular rivaliza con estimulante para trastorno por déficit de atención con hiperactividad',
            'Las tres grandes mentiras que debe dejar de creer'
        ],
        imageSource: 'https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/v1/revista/uxgbrx6vctct96kvyvy1'
    },
    {
        id: 24,
        imageTitle: 'Revista 24',
        resume: [
            'Para la menopausia, mala circulación, gastritis o problemas respiratorios',
            'Los increíbles beneficios de un simple caldo',
            'Alimentos vinculados a una mejor capacidad intelectual',
            'Los hongos podrían reducir a la mitad el riesgo de sufrir el deterioro cognitivo que conduce al alzhéimer'
        ],
        imageSource: 'https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/v1/revista/uigcuvenkvolitjobd9g'
    },
    {
        id: 23,
        imageTitle: 'Revista 23',
        resume: [
            'De sus virtudes se podría escribir un libro entero: Romero',
            'Asombrosa en sí misma y combinada con otras hierbas, aún más benéfica: Pimienta de Cayena',
            'La principal causa de ceguera irreversible en el mundo: Retinopatía diabética',
            'Extraño tipo de cáncer vinculado a los implantes de mama'
        ],
        imageSource: 'https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/v1/revista/ypekzpx0yoil0ludp6v6'
    },
    {
        id: 22,
        imageTitle: 'Revista 22',
        resume: ['Los "Pitufos" la encontraban deliciosa', 'Uno al día ayuda a reducir la presión arterial', 'La compramos como una, la consumimos como tal, pero...'],
        imageSource: 'https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/v1/revista/rcn9jqepocquibuzgk9u'
    },
    {
        id: 21,
        imageTitle: 'Revista 21',
        resume: ['Le llaman hierba bendita, cúralo todo, amantilla, hierba de San Jorge...', 'Cómo hacer vinagre de manzana casero', '¡Parecido no es lo mismo!'],
        imageSource: 'https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/v1/revista/gtordh3z4wtxwecfyi0q'
    },
    {
        id: 20,
        imageTitle: 'Revista 20',
        resume: ['Su consumo diario podría traerle muchos beneficios', '¡Alarma! quienes lo toman sufren un 50% más de infartos', 'Usos medicinales y curativos de la Ruda', 'Licor de la Pasión'],
        imageSource: 'https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/v1/revista/ycutywgdqumy2hzhai5p'
    },
    {
        id: 19,
        imageTitle: 'Revista 19',
        resume: [
            'Poder para curar resfríos y contra los malos espíritus',
            'Vegetal que le dejará los huesos como acero, duros que no le dolerán',
            'La sustancia de la que debemos huír como de la peste',
            'Embarazo y depresión'
        ],
        imageSource: 'https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/v1/revista/z5l70hylmwdn53qduf91'
    },
    {
        id: 18,
        imageTitle: 'Revista 18',
        resume: ['Flor del Espíritu Santo', 'Poeres terapéuticos del chocolate', 'Vínculo entre uso de anteojos y grado de inteligencia'],
        imageSource: 'https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/v1/revista/qsusm14dscpqjegjimwh'
    },
    {
        id: 17,
        imageTitle: 'Revista 17',
        resume: ['Rosa de la Pasión', 'Una planta eficaz contra las bacterias asesinas', 'La diabetes y ls mujeres'],
        imageSource: 'https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/v1/revista/fqdbrv6gbrqicgk42ffe'
    },
    {
        id: 16,
        imageTitle: 'Revista 16',
        resume: [
            '"Pide un deseo" es lo que mucha gente piensa cuando lo ve',
            'Cuando nuestras abuelas tenían razón',
            'El azúcar blanco, la droga silenciosa',
            'Su jugo retarda crecimiento de cáncer de próstata'
        ],
        imageSource: 'https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/v1/revista/wf838ff505ntgdgoro5d'
    },
    {
        id: 15,
        imageTitle: 'Revista 15',
        resume: [
            'Se nos terminan los limones y las naranjas',
            'El remineralizante natural',
            'Uso intensivo del celular puede adelantar la presbisia',
            'Radón, el gas radioactivo',
            '"La niña del amanecer"'
        ],
        imageSource: 'https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/v1/revista/fi8yiqfvizzrd54ki7i7'
    },
    {
        id: 14,
        imageTitle: 'Revista 14',
        resume: [
            'De ella se dice que es "el médico de las plantas"',
            '7 inventos egipcios que hoy utilizamos',
            '¿Cómo afectaría al ser humano la desaparición de la escritura',
            '¿Podremos regenerar el cerebro aunque pasen los años?'
        ],
        imageSource: 'https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/v1/revista/x3skmk0fekqitntxd0bh'
    },
    {
        id: 12,
        imageTitle: 'Revista 12',
        resume: [
            'Una hierba medicinal con muchas propiedades',
            'Algunas hierbas que ayudan a aliviar el dolor articular',
            'Julio Mora: Lanzamiento del trabajo discográfico "Canción del Buscador"',
            '"Caldo depurativo" Se toma 21 días antes del comienzo de la primavera'
        ],
        imageSource: 'https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/v1/revista/qfa8ebtikuc2w41jhl91'
    },
    {
        id: 11,
        imageTitle: 'Revista 11',
        resume: ['Estimulante potenciador sexual', 'El malo y el bueno', 'Jugo milagroso', 'Medicamentos disfunción eréctil vs Anestesia'],
        imageSource: 'https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/v1/revista/cuxsiq5biwjysssczkv7'
    },
    {
        id: 10,
        imageTitle: 'Revista 10',
        resume: ['¡Primer fitomedicamento es uruguayo!', 'Ignacio Suárez', 'Jugo milagroso', 'Como vencer a esa bacteria resistente'],
        imageSource: 'https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/v1/revista/wkcahpeeyjvd6dqbbxtl'
    },
    {
        id: 9,
        imageTitle: 'Revista 09',
        resume: ['Ha sido reverenciado como una especia culinaria y medicinal', '"El Zucará" Julio Victor González', 'La hora de comer y la salud cardíaca'],
        imageSource: 'https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/v1/revista/mqpakivndoxyyjdakh4k'
    },
    {
        id: 8,
        imageTitle: 'Revista 08',
        resume: [
            'Conocida como ornamental, sin embargo, es una "maravillosa" medicina natural',
            'Mileva Maric Einstein: Ella también era física y nadie sabe con certeza cuánto contribuyó a la innovadora ciencia de su esposo',
            'Grupo sanguíneo AB'
        ],
        imageSource: 'https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/v1/revista/ijkuoyzx0az80rvjsagl'
    },
    {
        id: 7,
        imageTitle: 'Revista 07',
        resume: ['No nos dejan reconocerlo como "medicina", pero funciona de maravilla', 'La razón por la que los perros se llevan tan bien con nosotros', 'Grupo sanguíneo B'],
        imageSource: 'https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/v1/revista/la7c7fahg3emk7febush'
    },
    {
        id: 6,
        imageTitle: 'Revista 06',
        resume: ['Té para aumentar la capacidad intelectual', 'Las plantas tienen nuestros cinco sentidos y quince más'],
        imageSource: 'https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/v1/revista/hgyqnjofdnoqekk5rdf7'
    },
    {
        id: 5,
        imageTitle: 'Revista 05',
        resume: ['Fruto que nos regala la Madre Naturaleza: curativo en todos sus usos', '¿No querés sopa? ¡Tomá dos platos! Caldo depurativo de ortiga'],
        imageSource: 'https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/v1/revista/xm9bdvxenb18gjpfibhv'
    },
    {
        id: 4,
        imageTitle: 'Revista 04',
        resume: ['Único ejemplar de una familia que existión hace más de 200 millones de años', 'Razones para tomar una copa de vino al día', 'Cítricos y sus efectos con algunos medicamentos'],
        imageSource: 'https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/v1/revista/cetkvzpbnzifvhmifeic'
    },
    {
        id: 3,
        imageTitle: 'Revista 03',
        resume: ['Prodigiosa planta para el control del cáncer y otras dolencias', '¿Lámparas de sal como purificadoras del aire?', 'Leche de oro contra la artritis y otras dolencias'],
        imageSource: 'https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/v1/revista/fsmhf6djinh2qbru3mnk'
    },
    {
        id: 2,
        imageTitle: 'Revista 02',
        resume: [
            'Marcela: Se usaba como relleno de almohadas, ahora la investigan como medicamento para curar el SIDA',
            'Fumigaciones, mosquitos, ¿qué hay detrás?',
            'Los poderes terapéuticos de la miel, unidos a la canela'
        ],
        imageSource: 'https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/v1/revista/k03tj8q3vha7wynwcsrt'
    },
    {
        id: 1,
        imageTitle: 'Revista 01',
        resume: [
            'Epilobio o medicina para próstata que provocan impotencia',
            'Peligros de la exposición solar',
            'El agua, los calambres nocturnos y el ataque al corazón',
            'OMS declara al Zika como emergencia sanitaria mundial',
            '¿Qué es la Moringa y para que sirve?',
            'Plantas como insecticidad naturales',
            'Ministro explica por qué la fumigación no es efectiva'
        ],
        imageSource: 'https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/v1/revista/cxyh0fob42fxmxqn7rj2'
    }
];

interface MagazineItemProps {
    imageSource: string;
    imageTitle: string;
    resume: string[];
}

const MagazineItem: React.FC<MagazineItemProps> = (props) => {
    const [openImage, setOpenImage] = useState(false);

    const toggleImageModal = () => {
        setOpenImage(!openImage);
    };

    return (
        <>
            <Col sm="6" md="4" lg="3" style={{ cursor: 'pointer' }}>
                <div className="magazine-item" onClick={toggleImageModal}>
                    <img width="100%" src={props.imageSource} alt={`Entre mates y otras yerbas ${props.imageTitle}`} />
                    <h6>{props.imageTitle}</h6>
                </div>
            </Col>
            <Modal isOpen={openImage} toggle={toggleImageModal} size="md">
                <ModalHeader toggle={toggleImageModal}>
                    <img width="100%" src={props.imageSource} alt={`Entre mates y otras yerbas ${props.imageTitle}`} />
                    {props.imageTitle}
                </ModalHeader>
                <ModalBody>
                    {props.resume.map((item, itemIndex) => (
                        <p key={itemIndex}>
                            <FaChevronRight /> {item}
                        </p>
                    ))}
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggleImageModal}>
                        Cerrar
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

const MagazinePage: React.FunctionComponent<IPageProps> = () => {
    return (
        <Container fluid className="p-0">
            <Navigation />
            <Header
                image="https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/lpj6jxfn2evnxmi22bsx"
                headline="Todas las ediciones de la revista de Entre mates y otras yerbas"
                title="Revista"
                height="300px"
            />
            <section className="magazine-grid light-img-bg">
                <Container>
                    <Row>
                        {magazineList.map(({ imageSource, imageTitle, resume, id }) => {
                            return <MagazineItem key={id} imageSource={imageSource} imageTitle={imageTitle} resume={resume} />;
                        })}
                    </Row>
                </Container>
            </section>
            <NewMagazine />
            <Bottom />
            <Footer />
        </Container>
    );
};

export default MagazinePage;
