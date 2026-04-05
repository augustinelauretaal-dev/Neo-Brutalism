export interface Client {
  id: number;
  name: string;
  logo: string;
  image?: string;
}

export const clients: Client[] = [
  {
    id: 1,
    name: "TechCorp",
    logo: "/clients/techcorp.svg"
  },
  {
    id: 2,
    name: "InnovateLabs",
    logo: "/clients/innovatelabs.svg"
  },
  {
    id: 3,
    name: "Digital Solutions",
    logo: "/clients/digitalsolutions.svg"
  },
  {
    id: 4,
    name: "CloudBase",
    logo: "/clients/cloudbase.svg"
  },
  {
    id: 5,
    name: "DataFlow",
    logo: "/clients/dataflow.svg"
  },
  {
    id: 6,
    name: "SmartTech",
    logo: "/clients/smarttech.svg"
  }
];

