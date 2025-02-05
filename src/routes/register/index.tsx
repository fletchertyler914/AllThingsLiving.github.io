import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
      <h1>Lets get you registered.</h1>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Register',
  meta: [
    {
      name: 'description',
      content: 'Register with All Things Living',
    },
  ],
};
