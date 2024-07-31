import AssignmentsGallery from '../features/showcase/AssignmentsGallery';
import Emoji from '../ui/Emoji';
import Filter from '../ui/Filter';
import FlexX from '../ui/FlexX';
import Heading from '../ui/Heading';
import Row from '../ui/Row';

function Showcase() {
  return (
    <>
      <Row responsive="true">
        <FlexX>
          <Heading as="h1">My assignments</Heading>
          <Emoji src="/emojis/graduation-cap.png" />
        </FlexX>
        <Filter
          filterField={'status'}
          options={[
            { value: 'all', label: 'all' },
            { value: 'done', label: 'done' },
            { value: 'working', label: 'working' },
            { value: 'not-done', label: 'not-done' },
            { value: 'urgent', label: 'urgent' },
          ]}
        />
      </Row>
      <AssignmentsGallery />
    </>
  );
}

export default Showcase;
