import { useSelected, useShow } from 'lib';
import { Button, Form, Input, Modal as Popup, Select, Submit, useZodForm } from 'ui';
import { z } from 'zod';

const newNoteSchema = z.object({
  text: z.string().min(1),
});

const NewNoteModal = () => {
  const form = useZodForm({ schema: newNoteSchema });
  const { show, toggleShow } = useShow((state) => state);
  const { selectedOpt, setSelected } = useSelected((state) => state);
  const opts = [{ value: 'Personal' }, { value: 'Work' }];

  return (
    <div>
      <Popup show={show} toggleShow={toggleShow} title="Add a new note">
        <Form form={form} onSubmit={({ text }) => window.alert('create')}>
          <Input label="Name" placeholder="Name" {...form.register('text')} />
          {/* <Select label="Genre" selectedOpt={selectedOpt} setSelected={setSelected} options={opts} /> */}
          <Submit>Create Note</Submit>
          <Button
            intent="secondary"
            onClick={() => {
              form.reset();
              toggleShow();
            }}
          >
            Cancel
          </Button>
        </Form>
      </Popup>
    </div>
  );
};

export default NewNoteModal;
