import { createBoard } from '@wixc3/react-board';
import { PageWrapper } from '_codux/board-wrappers/page-wrapper';
import HomePage from 'app/routes/_index/route';

export default createBoard({
    name: 'Page - Home',
    Board: () => (
        <PageWrapper>
            <HomePage />
        </PageWrapper>
    ),
});
