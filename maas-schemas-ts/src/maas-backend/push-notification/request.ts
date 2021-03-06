/*

undefined
MaaS push notification request schema.

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from 'maas-schemas-ts/core/components/units';

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
  'http://maasglobal.com/maas-backend/push-notification/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    identityId?: Units_.IdentityId;
    title?: string;
    message?: string;
    badge?: number;
    sound?: string;
    severity?: 'Alert' | 'Warning' | 'Information';
    type?:
      | 'ObjectChange'
      | 'TripActivate'
      | 'InfoMessage'
      | 'ZendeskReply'
      | 'VerificationUpdate';
    data?:
      | ({
          objectType?: 'Itinerary' | 'Booking';
          ids?: Array<Units_.Uuid>;
        } & {
          objectType: Defined;
          ids: Defined;
        })
      | null
      | ({
          objectType?: 'Profile' | 'Subscription';
          ids?: Array<Units_.IdentityId>;
        } & {
          objectType: Defined;
          ids: Defined;
        });
  } & {
    identityId: Defined;
    severity: Defined;
    badge: Defined;
    type: Defined;
  },
  RequestBrand
>;
export const Request = t.brand(
  t.intersection([
    t.partial({
      identityId: Units_.IdentityId,
      title: t.string,
      message: t.string,
      badge: t.number,
      sound: t.string,
      severity: t.union([
        t.literal('Alert'),
        t.literal('Warning'),
        t.literal('Information'),
      ]),
      type: t.union([
        t.literal('ObjectChange'),
        t.literal('TripActivate'),
        t.literal('InfoMessage'),
        t.literal('ZendeskReply'),
        t.literal('VerificationUpdate'),
      ]),
      data: t.union([
        t.intersection([
          t.partial({
            objectType: t.union([t.literal('Itinerary'), t.literal('Booking')]),
            ids: t.array(Units_.Uuid),
          }),
          t.type({
            objectType: Defined,
            ids: Defined,
          }),
        ]),
        t.null,
        t.intersection([
          t.partial({
            objectType: t.union([t.literal('Profile'), t.literal('Subscription')]),
            ids: t.array(Units_.IdentityId),
          }),
          t.type({
            objectType: Defined,
            ids: Defined,
          }),
        ]),
      ]),
    }),
    t.type({
      identityId: Defined,
      severity: Defined,
      badge: Defined,
      type: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      title?: string;
      message?: string;
      badge?: number;
      sound?: string;
      severity?: 'Alert' | 'Warning' | 'Information';
      type?:
        | 'ObjectChange'
        | 'TripActivate'
        | 'InfoMessage'
        | 'ZendeskReply'
        | 'VerificationUpdate';
      data?:
        | ({
            objectType?: 'Itinerary' | 'Booking';
            ids?: Array<Units_.Uuid>;
          } & {
            objectType: Defined;
            ids: Defined;
          })
        | null
        | ({
            objectType?: 'Profile' | 'Subscription';
            ids?: Array<Units_.IdentityId>;
          } & {
            objectType: Defined;
            ids: Defined;
          });
    } & {
      identityId: Defined;
      severity: Defined;
      badge: Defined;
      type: Defined;
    },
    RequestBrand
  > => true,
  'Request',
);
export interface RequestBrand {
  readonly Request: unique symbol;
}

export default Request;

// Success
