import { SimplePageContent } from '../components/molecules/SimplePageContent';
import { PAGE_CONTENT } from '../modules/common/constants';

export function MainPage() {
  return (
    <SimplePageContent
      title={PAGE_CONTENT.MAIN.TITLE}
      subtitle={PAGE_CONTENT.MAIN.SUBTITLE}
      description={PAGE_CONTENT.MAIN.DESCRIPTION}
    />
  );
}