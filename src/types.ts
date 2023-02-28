export interface ClientStructure {
  dni: string;
  name: string;
  surname: string;
  averageBalance: number;
  maximumBalance: number;
  payrollDomiciled: boolean;
  mobilePhone: string;
  homePhone: undefined | string;
}

export type ClientsStructure = ClientStructure[];
