/*

undefined
MaaS bike station schema

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as UnitsGeo_ from 'maas-schemas-ts/core/components/units-geo';

type Defined =
  | Record<string, unknown>
  | Array<unknown>
  | string
  | boolean
  | number
  | null;
const Defined = t.union([
  t.UnknownRecord,
  t.UnknownArray,
  t.string,
  t.boolean,
  t.number,
  t.null,
]);

export const schemaId = 'http://maasglobal.com/core/components/bike-station.json';

// BikeStation
// The default export. More information at the top.
export type BikeStation = t.Branded<
  {
    id?: string;
    name?: string;
    location?: UnitsGeo_.Location;
    slots?: {
      total?: number;
      empty?: number;
      bikes?: number;
    } & {
      total: Defined;
      empty: Defined;
      bikes: Defined;
    };
  } & {
    id: Defined;
    name: Defined;
    location: Defined;
  },
  BikeStationBrand
>;
export const BikeStation = t.brand(
  t.intersection([
    t.partial({
      id: t.string,
      name: t.string,
      location: UnitsGeo_.Location,
      slots: t.intersection([
        t.partial({
          total: t.number,
          empty: t.number,
          bikes: t.number,
        }),
        t.type({
          total: Defined,
          empty: Defined,
          bikes: Defined,
        }),
      ]),
    }),
    t.type({
      id: Defined,
      name: Defined,
      location: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id?: string;
      name?: string;
      location?: UnitsGeo_.Location;
      slots?: {
        total?: number;
        empty?: number;
        bikes?: number;
      } & {
        total: Defined;
        empty: Defined;
        bikes: Defined;
      };
    } & {
      id: Defined;
      name: Defined;
      location: Defined;
    },
    BikeStationBrand
  > => true,
  'BikeStation',
);
export interface BikeStationBrand {
  readonly BikeStation: unique symbol;
}

export default BikeStation;

// Success
