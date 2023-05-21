declare const inquirerMenu: () => Promise<number>;
declare const leerInput: (message: string) => Promise<string | boolean>;
declare const pausa: () => Promise<void>;
declare const confirmar: (message: string) => Promise<string>;
export { inquirerMenu, pausa, leerInput, confirmar, };
