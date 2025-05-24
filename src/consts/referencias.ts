import type { Referencia } from '../types/referencias';

import Vitapro from '../assets/referencias/vitapro.svg';
import Inbalnor from '../assets/referencias/inbalnor.svg';
import CerveceriaNacional from '../assets/referencias/cn.svg';
import Omarsa from '../assets/referencias/omarsa.svg';
import SantaPriscila from '../assets/referencias/santa-priscila.svg';
import Continental from '../assets/referencias/continental.svg';
import Cargill from '../assets/referencias/cargill.svg';
import Edesa from '../assets/referencias/edesa.svg';
import Tecnova from '../assets/referencias/tecnova.svg';
import Cridesa from '../assets/referencias/cridesa.svg';
import Sika from '../assets/referencias/sika.svg';
import PlasticoRival from '../assets/referencias/rival.svg';
import Graiman from '../assets/referencias/graiman.svg';
import FibroAcero from '../assets/referencias/fibroacero.svg';
import Adilisa from '../assets/referencias/adilisa.svg';
import Copacigulf from '../assets/referencias/copacigulf.svg';

export const REFERENCES: Referencia[] = [
    {
        id: 'vitapro',
        name: 'Vitapro',
        url: 'https://www.vitapro.com/',
        image: {
        logo: Vitapro,
        width: 200,
        height: 200,
        },
    },
    {
        id: 'inbalnor',
        name: 'Inbalnor',
        url: 'https://inbalnor.com/',
        image: {
        logo: Inbalnor,
        width: 200,
        height: 200,
        },
    },
    {
        id: 'cerveceria_nacional',
        name: 'Cervecería Nacional',
        url: 'https://www.cervecerianacional.com/',
        image: {
        logo: CerveceriaNacional,
        width: 200,
        height: 200,
        },
    },
    {
        id: 'omarsa',
        name: 'Omarsa',
        url: 'https://www.omarsa.com/',
        image: {
        logo: Omarsa,
        width: 200,
        height: 200,
        },
    },
    {
        id: 'industria_pesquera_santa_priscila',
        name: 'Industria Pesquera Santa Priscila',
        url: 'https://www.santaprisicla.com/',
        image: {
        logo: SantaPriscila,
        width: 200,
        height: 200,
        },
    },
    {
        id: 'continental',
        name: 'Continental',
        url: 'https://www.continental.com.ec/',
        image: {
        logo: Continental,
        width: 200,
        height: 200,
        },
    },
    {
        id: 'cargill',
        name: 'Cargill',
        url: 'https://www.cargill.com.ec/',
        image: {
        logo: Cargill,
        width: 200,
        height: 200,
        },
    },
    {
        id: 'edesa',
        name: 'Edesa',
        url: 'https://www.edesa.com.ec/',
        image: {
        logo: Edesa,
        width: 200,
        height: 200,
        },
    },
    {
        id: 'tecnova',
        name: 'Tecnova',
        url: 'https://www.tecnova.com.ec/',
        image: {
        logo: Tecnova,
        width: 200,
        height: 200,
        },
    },
    {
        id: 'cridesa',
        name: 'Cridesa',
        url: 'https://www.cridesa.com/',
        image: {
        logo: Cridesa,
        width: 200,
        height: 200,
        },
    },
    {
        id: 'sika',
        name: 'Sika',
        url: 'https://www.sika.com.ec/',
        image: {
        logo: Sika,
        width: 200,
        height: 200,
        },
    },
    {
        id: 'plasticos-rival',
        name: 'Plásticos Rival',
        url: 'https://plasticosrival.com/',
        image: {
        logo: PlasticoRival,
        width: 200,
        height: 200,
        },
    },
    {
        id: 'graiman',
        name: 'Graiman',
        url: 'https://www.graiman.com.ec/',
        image: {
        logo: Graiman,
        width: 200,
        height: 200,
        },
    },
    {
        id: 'fibro_acero',
        name: 'Fibro Acero',
        url: 'https://www.fibroacero.com/',
        image: {
        logo: FibroAcero,
        width: 200,
        height: 200,
        },
    },
    {
        id: 'adilisa',
        name: 'Adilisa',
        url: 'https://www.adilisa.com/',
        image: {
        logo: Adilisa,
        width: 200,
        height: 200,
        },
    },
    {
        id: 'copacigulf',
        name: 'Copacigulf',
        url: 'https://www.copacigulf.com/',
        image: {
        logo: Copacigulf,
        width: 200,
        height: 200,
        },
    },
] as const
    