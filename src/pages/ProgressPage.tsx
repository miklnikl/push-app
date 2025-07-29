import { SimplePageContent } from '../components/molecules/SimplePageContent';
import { PAGE_CONTENT } from '../modules/common/constants';

export function ProgressPage() {
  return (
    <SimplePageContent
      title={PAGE_CONTENT.PROGRESS.TITLE}
      subtitle={PAGE_CONTENT.PROGRESS.SUBTITLE}
      description={PAGE_CONTENT.PROGRESS.DESCRIPTION}
    />
  );
}
