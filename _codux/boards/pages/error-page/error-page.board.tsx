import { createBoard } from '@wixc3/react-board';
import { PageWrapper } from '_codux/board-wrappers/page-wrapper';
import ErrorPage from 'app/routes/error/route';

export default createBoard({
    name: 'Page - Error',
    Board: () => (
        <PageWrapper initialPath="/error?title=Page Not Found&message=Looks like the page you requested doesn't exist">
            <ErrorPage />
        </PageWrapper>
    ),
});
