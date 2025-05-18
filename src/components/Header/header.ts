import { onMounted } from 'vue';

onMounted(() => {
  const burger = document.querySelector('[data-js-burger-menu]') as HTMLElement | null;
  const menu = document.querySelector('[data-js-ul-list]') as HTMLElement | null;

  if (burger && menu) {
    const handler = () => showMenu(menu);
    burger.addEventListener('click', handler);
    burger.addEventListener('touchstart', handler);
  } else {
    console.warn('Burger или menu элемент не найден');
  }
});

//const burgerButton = document.querySelector('[data-js-burger-menu]') as HTMLElement | null
//const listElement = document.querySelector('[data-js-ul-list]') as HTMLElement | null

export function showMenu(listElement: HTMLElement) {
  listElement.classList.toggle('active');
  console.log('Меню переключено');
}