import { type ClientStructure, type ClientsStructure } from "./types";

const getClientsByDni = (clients: ClientsStructure): string[] => {
  const clientsWithPhoneNumber = clients.filter(
    (client: ClientStructure) => client.homePhone !== undefined
  );
  return clientsWithPhoneNumber.map((client) => client.dni);
};

export default getClientsByDni;
