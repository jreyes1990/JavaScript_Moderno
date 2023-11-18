import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const CallbacksComponent = (element) => {
  const id = '5d86371fd55e2e2a30fe1cc3';
  findHero(id, (elementName) => {
    element.innerHTML = elementName.name;
  });
}

/**
 * 
 * @param {String} id 
 * @param {(hero: Object) => void} callback 
 */
const findHero = (id, callback) => {
  const hero = heroes.find(hero => hero.id === id);
  callback(hero);
}