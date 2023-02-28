import clients from "./clients";
import getClientsByDni from "./getClientsByDni";
import getClientsWithAveragePayrollBalance from "./getClientsWithAveragePayrollBalance";

const minimWage = 20000;
console.log(getClientsByDni(clients));
console.log(getClientsWithAveragePayrollBalance(clients, minimWage));
