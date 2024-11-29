import { createBoard } from '@wixc3/react-board';
import { PageWrapper } from '_codux/board-wrappers/page-wrapper';
import HomePage from 'app/routes/_index/route';
import { SeccionHero } from '_codux/boards/seccion-hero.board'; // Path actualizado

export default createBoard({
    name: 'Page - Home',
    Board: () => (
        <PageWrapper>
            <HomePage />
            
        </PageWrapper>
    ),
});
