import type { FileUploads } from './types';

// ref - images taken from http://pngimg.com/imgs/fantasy/pokemon/
export const MOCK_FILES: FileUploads = [
    {
        id: '-1',
        name: 'vaporeon.png',
        status: 'done',
        url: 'http://pngimg.com/uploads/pokemon/pokemon_PNG161.png',
        size: 10000,
    },
    {
        id: '-2',
        name: 'sandshrew.png',
        status: 'done',
        url: 'http://pngimg.com/uploads/pokemon/pokemon_PNG160.png',
        size: 5000,
    },
    {
        id: '-3',
        name: 'bulbasaur.png',
        status: 'done',
        url: 'http://pngimg.com/uploads/pokemon/pokemon_PNG149.png',
        size: 3000,
    },
    {
        id: '-4',
        name: 'charmander.png',
        status: 'done',
        url: 'http://pngimg.com/uploads/pokemon/pokemon_PNG154.png',
        size: 1000,
    },
    {
        id: '-5',
        name: 'squirtle.png',
        status: 'done',
        url: 'http://pngimg.com/uploads/pokemon/pokemon_PNG123.png',
        size: 1000,
    },
];
