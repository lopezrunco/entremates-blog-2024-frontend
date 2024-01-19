import { Container } from 'reactstrap';

interface IAdProps {
    altText: string;
    logo: string;
    link: string;
    show: boolean;
}

const ads: IAdProps[] = [
    {
        altText: 'Mercado Natural',
        logo: 'https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/dr3ej5smttrbpjuix5dx',
        link: 'https://www.mercadonaturaluy.com/',
        show: true
    },
    {
        altText: 'Vitanna',
        logo: 'https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/gnogqj4avmucxvvadz8m',
        link: 'https://vitanna.com.uy/',
        show: true
    },
    {
        altText: 'Super Tico',
        logo: 'https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/d2cat9buicqsof1w2g50',
        link: 'https://tico.com.uy/',
        show: true
    },
    {
        altText: 'Fix1',
        logo: 'https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/rnsjl18hghreylteamso',
        link: 'https://www.fix1.uy/',
        show: true
    },
    {
        altText: 'La Trinidad',
        logo: 'https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/nqya3z4zzp6mcjesqfww',
        link: 'https://latrinidad.com.uy/',
        show: true
    },
    {
        altText: 'Radio Carve',
        logo: 'https://res.cloudinary.com/dcqvlh8mo/image/upload/f_auto,q_auto/bmskxqi5ohvyrqfkyull',
        link: 'https://carve850.com.uy/radio/',
        show: true
    }
];

function Ads() {
    return (
        <section className="ads light-img-bg">
            <Container>
                <div className="flex">
                    {ads.map((el, index) => {
                        return (
                            <a key={index} href={el.link} target="_blank" rel="noreferrer">
                                <img src={el.logo} alt={el.altText} />
                            </a>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}

export default Ads;
