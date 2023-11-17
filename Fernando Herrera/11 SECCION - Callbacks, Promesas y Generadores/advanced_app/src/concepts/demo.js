/**
 * 
 * @param {HTMLDivElement} element 
 */
export const demoComponent = (element) => {
  console.log(import.meta.env);
  const html = `
    Developer: ${import.meta.env.DEV} <br>
    Production: ${import.meta.env.PROD} <br>
    API_KEY: ${import.meta.env.VITE_API_KEY} <br>
    BASE_URL: ${import.meta.env.VITE_BASE_URL} <br>
  `;
  element.innerHTML = html;
}