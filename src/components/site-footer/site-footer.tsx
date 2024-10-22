import classNames from 'classnames';
import styles from './site-footer.module.scss';
import facebookIcon from '~/assets/svg/facebook.svg';
import MyImage from 'src/assets/img/noImage/image.png';
import ImagePng from '../../assets/img/noImage/image.png';

export interface FooterProps {
    className?: string;
}

export const Footer = ({ className }: FooterProps) => {
    // Function to scroll back to the top of the page
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className={classNames(styles.root, className)}>
            <div className={styles.content}>
                {/* Company Details Section */}
                <div className={styles.details}>
                    <h4 className={styles.title}>We Do and Care</h4>
                    <p className={styles.small}>
                        Email: <a href="mailto:wedoandcare@gmail.com">wedoandcare@gmail.com</a> 
                        <br />
                        Tel: <a href="tel:+526641200476">664-120-0476</a>
                        <br />
                        Baja California, Mexico
                    </p>
                </div>

                {/* Social Media, Copyright, and Back to Top Button Section */}
                <div className={styles.footerRight}>
                    <div className={styles.social}>
                        <h5 className={styles.socialTitle}>Follow Us</h5>
                        <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                            <img className={styles.icon} src={facebookIcon} alt="Facebook" />
                        </a>
                    </div>

                    {/* Copyright Section */}
                    <p className={styles.copyright}>
                        &copy; {new Date().getFullYear()} We Do and Care. All Rights Reserved.
                    </p>

                    {/* Back to Top Button */}
                    <button className={styles.backToTop} onClick={scrollToTop}>
                        Back to Top
                    </button>
                </div>
            </div>
        </footer>
    );
};
