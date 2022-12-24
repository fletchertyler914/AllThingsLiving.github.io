import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class='p-4'>
      <h1 class={'prose prose-lg text-8xl'}>
        All. <br />
        Things. <br />
        Living. <br />
      </h1>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'All Things Living',
  meta: [
    {
      name: 'description',
      content: 'All Things Living',
    },
  ],
};
