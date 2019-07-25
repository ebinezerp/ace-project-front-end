import { Item } from './item';

export class ExporterOrImporter {
  id: number;
  companyName: string;
  email: string;
  mobile: string;
  location: string;
  contactAddress: string;
  territory: string;
  itemsTransfer: Item[];
}
