import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';

export default component$(() => {
  return (
    <>
      <main class='h-full w-full flex flex-col gap-6'>
        <Header />
        <section class='flex justify-center items-center'>
          <Slot />
        </section>
      </main>
      <footer></footer>
    </>
  );
});
