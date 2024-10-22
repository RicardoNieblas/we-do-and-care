import classNames from 'classnames';
import { Link, NavLink } from '@remix-run/react';
import { ROUTES } from '~/router/config';
import styles from './header.module.scss';
import MyImage from 'src/assets/img/noImage/image.png';
import ImagePng from '../../assets/img/noImage/image.png'; // Import your image here

export interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Link to="/" className={styles.logo}>
                <img
                    src={ImagePng}
                    alt="Logo"
                    className={classNames(styles.logoImage, styles.img1)}
                />{' '}
                {/* Replace LOGO with the image */}
            </Link>
            <div className={styles.menu}>
                <NavLink
                    to="/"
                    className={({ isActive }) => classNames({ [styles.active]: isActive })}
                >
                    Home
                </NavLink>
                <NavLink
                    to={ROUTES.about.to()}
                    className={({ isActive }) => classNames({ [styles.active]: isActive })}
                >
                    About
                </NavLink>
            </div>
        </div>
    );
};
