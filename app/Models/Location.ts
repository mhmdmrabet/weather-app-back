import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Location extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public country: string;

  @column()
  public name: string;

  @column()
  public state: string;

  @column()
  public cityName?: string;

  @column()
  public lat: string;

  @column()
  public lon: string;

  @column()
  public zipCode?: string;

  @column()
  public countryCode?: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
