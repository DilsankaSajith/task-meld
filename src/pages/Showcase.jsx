import AssignmentsGallery from '../features/showcase/AssignmentsGallery';
import Filter from '../ui/Filter';
import Heading from '../ui/Heading';
import Row from '../ui/Row';

function Showcase() {
  return (
    <>
      <Row responsive="true">
        <Heading as="h1">My assignments 🎓</Heading>
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
