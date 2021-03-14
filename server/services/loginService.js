import {clients} from '../mockData/mockData';

export const logIn = (clientCode) => {
    const clientsList = clients.map(c => c.clientCode);
    return clientsList.includes(clientCode);
}