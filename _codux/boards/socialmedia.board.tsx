import { createBoard } from '@wixc3/react-board';
import styles from './socialmedia.module.scss';
import styles0 from './socialmedia.board.module.scss';
import AppInstagramLogoMediaPopularIconPng from '../../src/assets/3225191_app_instagram_logo_media_popular_icon.png';
import AppFacebookLogoMediaPopularIconPng from '../../src/assets/3225194_app_facebook_logo_media_popular_icon.png'; 

export default createBoard({
    name: 'socialmedia',
    Board: () => (
        <div className={styles.footer}>
            {/* Instagram Link */}
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={AppInstagramLogoMediaPopularIconPng} alt="Instagram" className={styles0.img2} />
            </a>

            <p className={styles.p1}>© 2024 STACK. Todos los derechos reservados.</p>

            {/* Facebook Link */}
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={AppFacebookLogoMediaPopularIconPng} alt="Facebook" className={styles0.img3} />
            </a>
        </div>
    ),
    isSnippet: true,
});
