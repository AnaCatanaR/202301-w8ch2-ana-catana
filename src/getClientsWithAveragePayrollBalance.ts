import type { ClientsStructure } from "./types";

const getClientsWithAveragePayrollBalance = (
  clients: ClientsStructure,
  minimWage: number
) => {
  const cliensWithLessPayrollBalance = clients
    .filter(
      (client) => client.averageBalance < minimWage && client.payrollDomiciled
    )
    .map((client) => ({
      dni: client.dni,
      nameSurnames: `${client.name} ${client.surname}`,
      averageBalance: client.averageBalance,
    }));

  return cliensWithLessPayrollBalance;
};

export default getClientsWithAveragePayrollBalance;
