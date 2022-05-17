export const saveInLocalStorage = (key, element) => {
    // Conseguir los elementos del localStorage
    let items = JSON.parse(localStorage.getItem(key));
    // Comprobrar si es un array
    if (Array.isArray(items)) {
        // Añadir el nuevo elemento
        items.push(element);
    } else {
        // Crear un array con el nuevo elemento
        items = [element];
    }
    // Guardar en el localStorage
    localStorage.setItem(key, JSON.stringify(items));
    // Devolver el objeto
    return element;
};