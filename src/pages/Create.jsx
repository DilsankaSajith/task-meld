import CreateAssignmentForm from '../features/create/CreateAssignmentForm';
import Emoji from '../ui/Emoji';
import FlexX from '../ui/FlexX';
import Heading from '../ui/Heading';

function Create() {
  return (
    <>
      <FlexX>
        <Heading as="h1">Create your task</Heading>
        <Emoji src="/emojis/check-mark-button.png"></Emoji>
      </FlexX>
      <CreateAssignmentForm />
    </>
  );
}

export default Create;
