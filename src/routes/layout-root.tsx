import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <main class='h-full w-full flex'>
        <Slot />
      </main>
    </>
  );
});
