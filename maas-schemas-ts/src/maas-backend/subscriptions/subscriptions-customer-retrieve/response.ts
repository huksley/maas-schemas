/*

undefined
Response schema for subscriptions-customer-retrieve

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Contact_ from 'maas-schemas-ts/maas-backend/subscriptions/contact';

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

export const schemaId =
  'http://maasglobal.com/maas-backend/subscriptions/subscriptions-customer-retrieve/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    customer?: Contact_.ContactResponse;
    debug?: {};
  } & {
    customer: Defined;
  },
  ResponseBrand
>;
export const Response = t.brand(
  t.intersection([
    t.partial({
      customer: Contact_.ContactResponse,
      debug: t.type({}),
    }),
    t.type({
      customer: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      customer?: Contact_.ContactResponse;
      debug?: {};
    } & {
      customer: Defined;
    },
    ResponseBrand
  > => true,
  'Response',
);
export interface ResponseBrand {
  readonly Response: unique symbol;
}

export default Response;

// Success
