import { createBoard } from '@wixc3/react-board';
import styles from './seccion-hero.board.module.scss';
import ImGenesPng from '../../src/assets/imágenes.png';
import LogotipoPng from '../../src/assets/logotipo.png';
import commonStylesStyles from '../../src/styles/common-styles.module.scss';
import BotNDeRegistroPng from '../../src/assets/botón de registro.png';

export default createBoard({
    name: 'seccion hero',
    Board: () => (
        <div className={styles.div1}>
            <span className={styles.span1}>
                Un proyecto que busca cerrar la brecha de género e incentivar la participación de
                las mujeres en la Ciencia, Tecnología, Ingeniería y Matemáticas.
            </span>
            <button className={styles.button1}>
                <img src={BotNDeRegistroPng} alt="" className={styles.img3} />
            </button>
            <img src={LogotipoPng} alt="" className={styles.img2} />
            <img src={ImGenesPng} alt="" className={styles.img1} />
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        windowWidth: 1134,
        windowHeight: 640,
    },
});
