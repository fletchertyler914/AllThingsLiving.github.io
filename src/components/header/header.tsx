import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { useContent, useLocation } from '@builder.io/qwik-city';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const { menu } = useContent();
  const { pathname } = useLocation();

  return (
    <section class='menu'>
      {menu
        ? menu.items?.map((item) => (
            <>
              <h5>{item.text}</h5>
              <ul>
                {item.items?.map((item) => (
                  <li>
                    <a
                      href={item.href}
                      class={{
                        'is-active': pathname === item.href,
                      }}
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          ))
        : null}
    </section>
  );
});
