import { createBoard } from '@wixc3/react-board';
import { useState } from 'react';
import styles from './seccion-hero.board.module.scss';
import ImGenesPng from '../../src/assets/imágenes.png';
import LogotipoPng from '../../src/assets/logotipo.png';
import BotNDeRegistroPng from '../../src/assets/botón de registro.png';
import classNames from 'classnames';
import BotNDeNewsletter2Png from '../../src/assets/botón de newsletter (2).png';

export const SeccionHero = () => {
    const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
    const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

    // Funciones para manejar la apertura y cierre de modales
    const handleOpenFirstModal = () => setIsFirstModalOpen(true);
    const handleCloseFirstModal = () => setIsFirstModalOpen(false);

    const handleOpenSecondModal = () => setIsSecondModalOpen(true);
    const handleCloseSecondModal = () => setIsSecondModalOpen(false);

    // Función para manejar el registro
    const handleRegister = () => {
        console.log('Registro registrado.');
    };

    return (
        <div className={styles.div1}>
            <div className={styles.div2}>
                {/* Primer botón */}
                <button
                    className={classNames(styles.firstButton, styles.button3)}
                    onClick={handleOpenFirstModal}
                >
                    <img
                        src={BotNDeRegistroPng}
                        alt="Registro Completo"
                        className={classNames(styles.firstButtonImage, styles.img6)}
                    />
                </button>

                {/* Segundo botón */}
                <button
                    className={classNames(styles.secondButton, styles.button4)}
                    onClick={handleOpenSecondModal}
                >
                    <img
                        src={BotNDeNewsletter2Png}
                        alt="Registro Simplificado"
                        className={classNames(styles.secondButtonImage, styles.img5)}
                    />
                </button>

                <img src={LogotipoPng} alt="Logotipo" className={styles.img2} />
                <img src={ImGenesPng} alt="Imágenes" className={styles.img1} />
                <span className={styles.span1}>
                    Un proyecto que busca cerrar la brecha de género e incentivar la participación
                    de las mujeres en la Ciencia, Tecnología, Ingeniería y Matemáticas.
                </span>
            </div>

            {/* Primer Modal */}
            {isFirstModalOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <h2>Registro</h2>
                        <form className={styles.form}>
                            <label>
                                Nombre:
                                <input type="text" className={styles.input} />
                            </label>
                            <label>
                                Correo (Opcional si menor de 14):
                                <input type="email" className={styles.input} />
                            </label>
                            <label>
                                Fecha de Nacimiento:
                                <input type="date" className={styles.input} />
                            </label>
                            <label>
                                Contraseña:
                                <input type="password" className={styles.input} />
                            </label>
                            <label>
                                Escuela de precedencia:
                                <input type="text" className={styles.input} />
                            </label>
                            <label>
                                Nombre de tutor (Solo si menor de 14):
                                <input type="text" className={styles.input} />
                            </label>
                            <label>
                                Correo de tutor (Solo si menor de 14):
                                <input type="email" className={styles.input} />
                            </label>
                            <div className={styles.buttons}>
                                <button
                                    type="button"
                                    className={styles.registerButton}
                                    onClick={handleRegister}
                                >
                                    Registrarse
                                </button>
                                <button
                                    type="button"
                                    className={styles.closeButton}
                                    onClick={handleCloseFirstModal}
                                >
                                    Cerrar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Segundo Modal */}
            {isSecondModalOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <h2>Únete a nuestra Newsletter!</h2>
                        <form className={styles.form}>
                            <label>
                                Nombre:
                                <input type="text" className={styles.input} />
                            </label>
                            <label>
                                Rol:
                                <select className={styles.select}>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Femenino">Femenino</option>
                                    <option value="Otro">Otro</option>
                                </select>
                            </label>
                            <label>
                                Correo Electrónico:
                                <input type="email" className={styles.input} />
                            </label>
                            <div className={styles.buttons}>
                                <button
                                    type="button"
                                    className={styles.registerButton}
                                    onClick={handleRegister}
                                >
                                    Registrarse
                                </button>
                                <button
                                    type="button"
                                    className={styles.closeButton}
                                    onClick={handleCloseSecondModal}
                                >
                                    Cerrar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default createBoard({
    name: 'seccion hero',
    Board: () => <SeccionHero />,
});
