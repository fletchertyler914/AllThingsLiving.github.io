import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
      <h1>Lets get you logged in.</h1>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Services',
  meta: [
    {
      name: 'description',
      content: 'Services we provide',
    },
  ],
};
