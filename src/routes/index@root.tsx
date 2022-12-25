import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class='p-4 prose prose-lg text-2xl flex flex-col gap-2'>
      <h1
        class={
          'animate-fade-right animate-once animate-duration-1000 animate-delay-[400ms] animate-ease-in-out animate-fill-backwards m-0 p-0'
        }
      >
        All.
      </h1>
      <h1
        class={
          'animate-fade-right animate-once animate-duration-1000 animate-delay-[800ms] animate-ease-in-out animate-fill-backwards m-0 p-0'
        }
      >
        Things.
      </h1>
      <h1
        class={
          'animate-fade-right animate-once animate-duration-1000 animate-delay-[1200ms] animate-ease-in-out animate-fill-backwards m-0 p-0'
        }
      >
        Living.
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
