/*

undefined
Response schema for autocomplete

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';

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
  'http://maasglobal.com/maas-backend/autocomplete/autocomplete-query/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    suggestions?: Array<string>;
    debug?: {};
  } & {
    suggestions: Defined;
  },
  ResponseBrand
>;
export const Response = t.brand(
  t.intersection([
    t.partial({
      suggestions: t.array(t.string),
      debug: t.type({}),
    }),
    t.type({
      suggestions: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      suggestions?: Array<string>;
      debug?: {};
    } & {
      suggestions: Defined;
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
