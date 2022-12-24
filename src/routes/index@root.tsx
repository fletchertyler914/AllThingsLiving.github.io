import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  const headings = ['All.', 'Things.', 'Living.'];

  return (
    <div class='p-4 prose prose-lg text-2xl flex flex-col gap-2'>
      {headings.map((title, index) => (
        <h1
          class={`animate-fade-right animate-once animate-duration-1000 animate-delay-[${
            index * 400
          }ms] animate-ease-in-out animate-fill-backwards m-0 p-0`}
        >
          {title}
        </h1>
      ))}
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
