import { SimplePageContent } from '../components/molecules/SimplePageContent';
import { PAGE_CONTENT } from '../modules/common/constants';

export function LeaderboardPage() {
  return (
    <SimplePageContent
      title={PAGE_CONTENT.LEADERBOARD.TITLE}
      subtitle={PAGE_CONTENT.LEADERBOARD.SUBTITLE}
      description={PAGE_CONTENT.LEADERBOARD.DESCRIPTION}
    />
  );
}
