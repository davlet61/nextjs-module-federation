import { useSelected, useVisibility } from 'lib/hooks/stores';
import { Form, Input, Select, Submit, Button, Modal as Popup, useZodForm } from 'ui';
import { z } from 'zod';

const newNoteSchema = z.object({
  text: z.string().min(1),
});

export const Modal = () => {
  const form = useZodForm({ schema: newNoteSchema });
  const { visibility, toggleVisibility } = useVisibility((state) => state);
  const { selectedOpt, setSelected } = useSelected((state) => state);
  const opts = [{ value: 'Personal' }, { value: 'Work' }];

  return (
    <div>
      <Popup show={visibility} toggleShow={toggleVisibility} title="Add a new note">
        <Form form={form} onSubmit={({ text }) => window.alert('create')}>
          <Input label="Name" placeholder="Name" {...form.register('text')} />
          <Select label="Genre" selectedOpt={selectedOpt} setSelected={setSelected} options={opts} />
          <Submit>Create Note</Submit>
          <Button
            intent="secondary"
            onClick={() => {
              form.reset();
              toggleVisibility();
            }}
          >
            Cancel
          </Button>
        </Form>
      </Popup>
    </div>
  );
};
