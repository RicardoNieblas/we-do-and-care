import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    isRouteErrorResponse,
    useRouteError,
} from '@remix-run/react';
import { useEffect } from 'react';
import { SiteWrapper } from '~/components/site-wrapper/site-wrapper';
import { ROUTES } from '~/router/config';
import '~/styles/index.scss';

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return (
        <SiteWrapper>
            <Outlet />
        </SiteWrapper>
    );
}

export function ErrorBoundary() {
    const error = useRouteError();

    const isRouteError = isRouteErrorResponse(error);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const { title, message } = getErrorDetails(error);

        // hack to handle https://github.com/remix-run/remix/issues/1136
        window.location.href = ROUTES.error.to(title, message);
    }, [isRouteError, error]);

    // we are navigating to the error page in the effect above
    return null;
}

function getErrorDetails(error: unknown) {
    let title: string;
    let message: string | undefined;

    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            title = 'Page Not Found';
            message = "Looks like the page you're trying to visit doesn't exist";
        } else {
            title = `${error.status} - ${error.statusText}`;
            message = error.data?.message ?? '';
        }
    } else {
        title = 'Unknown error ocurred';
    }

    return { title, message };
}
