import { Place } from './place';

export class Visit {
  public id: number;
  public badgeNo: string;
  public hostName: string;
  public guestName: string;
  public guestDocumentType: string;
  public guestDocumentNo: string;
  public entranceDate: string;
  public leavingDate: string;
  public entranceTime: string;
  public leavingTime: string;
  public socialReason: string;
  public place: Place;
};
