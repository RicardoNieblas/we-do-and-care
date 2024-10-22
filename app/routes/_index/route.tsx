import classNames from 'classnames';
import styles from './_index.module.scss';
import { LinksFunction, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import commonStyles from '~/styles/common-styles.module.scss';
import { getUrlOriginWithPath } from '~/utils';

export const loader = ({ request }: LoaderFunctionArgs) => {
    return { canonicalUrl: getUrlOriginWithPath(request.url) };
};

export default function HomePage() {
    return (
        <div className={styles.root}>
            <div className={styles.title}>WE Do and Care</div>
            <div className={styles.paragraph}>
                <div className={styles.text}>
                    “WE do &amp; care” es un programa de mentoría para inscribir a niñas de escuelas
                    primarias, secundarias y preparatorias en campos STEM. Al participar en un
                    programa de prácticas en la Universidad CETYS, aprenderás a aplicar la ciencia
                    en el mundo real.
                </div>
            </div>
            <button className={classNames(commonStyles.primaryButton, styles.button)}>
                Conocer mas...
            </button>
            <img
                src="https://scontent.ftij2-1.fna.fbcdn.net/v/t1.6435-9/56524972_2103822336399343_1900305144789073920_n.png?_nc_cat=108&ccb=1-7&_nc_sid=b895b5&_nc_ohc=4xiKsa9oAfAQ7kNvgGwCeY_&_nc_zt=23&_nc_ht=scontent.ftij2-1.fna&_nc_gid=AHxzRyeGLCjrmBp_Jpoh4cq&oh=00_AYBMqpjrLQWLwMjam9I69alS63Y9luMkiE-zHiVuAdp9Vg&oe=673F44CB"
                alt=""
                className={styles.image}
            />
        </div>
    );
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
    const title = 'Website Starter';
    const description = 'Welcome to the Website Starter';
    const imageUrl = 'https://website-starter.com/og-image.png';

    return [
        { title },
        {
            name: 'description',
            content: description,
        },
        {
            tagName: 'link',
            rel: 'canonical',
            href: data?.canonicalUrl,
        },
        {
            property: 'robots',
            content: 'index, follow',
        },
        {
            property: 'og:title',
            content: title,
        },
        {
            property: 'og:description',
            content: description,
        },
        {
            property: 'og:image',
            content: imageUrl,
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image',
        },
        {
            name: 'twitter:title',
            content: title,
        },
        {
            name: 'twitter:description',
            content: description,
        },
        {
            name: 'twitter:image',
            content: imageUrl,
        },
    ];
};

export const links: LinksFunction = () => {
    return [
        {
            rel: 'icon',
            href: '/favicon.ico',
            type: 'image/ico',
        },
    ];
};
