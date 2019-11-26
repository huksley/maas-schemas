# request Schema

```
http://maasglobal.com/tsp/bookings-create/request.json
```

Request schema for creating a booking through a TSP adapter

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                      |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ----------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Permitted             | [tsp/booking-create/request.json](request.json) |

## Schema Hierarchy

- request `http://maasglobal.com/tsp/bookings-create/request.json`
  - [booking-option](../../core/booking-option.md) `http://maasglobal.com/core/booking-option.json`
  - [booking-meta](../../core/booking-meta.md) `http://maasglobal.com/core/booking-meta.json`
  - [booking](../../core/booking.md) `http://maasglobal.com/core/booking.json`
  - [customer](../../core/customer.md) `http://maasglobal.com/core/customer.json`
  - [configurator](../../core/components/configurator.md) `http://maasglobal.com/core/components/configurator.json`
  - [customerSelection](../../core/components/customerSelection.md)
    `http://maasglobal.com/core/components/customerSelection.json`

# request Properties

| Property                                | Type              | Required     | Nullable | Defined by                                 |
| --------------------------------------- | ----------------- | ------------ | -------- | ------------------------------------------ |
| [configurator](#configurator)           | configurator      | Optional     | No       | request (this schema)                      |
| [customer](#customer)                   | customer          | **Required** | No       | request (this schema)                      |
| [customerSelection](#customerselection) | customerSelection | Optional     | No       | request (this schema)                      |
| [leg](#leg)                             | `object`          | **Required** | No       | request (this schema)                      |
| [meta](#meta)                           | booking-meta      | **Required** | No       | request (this schema)                      |
| [terms](#terms)                         | terms             | **Required** | No       | request (this schema)                      |
| [tspProduct](#tspproduct)               | `object`          | **Required** | No       | request (this schema)                      |
| `*`                                     | any               | Additional   | Yes      | this schema _allows_ additional properties |

## configurator

`configurator`

- is optional
- type: configurator
- defined in this schema

### configurator Type

- [configurator](../../core/components/configurator.md) – `http://maasglobal.com/core/components/configurator.json`

## customer

`customer`

- is **required**
- type: customer
- defined in this schema

### customer Type

- [customer](../../core/customer.md) – `http://maasglobal.com/core/customer.json`

## customerSelection

`customerSelection`

- is optional
- type: customerSelection
- defined in this schema

### customerSelection Type

- [customerSelection](../../core/components/customerSelection.md) –
  `http://maasglobal.com/core/components/customerSelection.json`

## leg

A subset of the standard leg (../core/leg.json)

`leg`

- is **required**
- type: `object`
- defined in this schema

### leg Type

`object` with following properties:

| Property         | Type | Required     |
| ---------------- | ---- | ------------ |
| `agencyId`       |      | Optional     |
| `departureDelay` |      | Optional     |
| `endTime`        |      | **Required** |
| `from`           |      | **Required** |
| `mode`           |      | **Required** |
| `startTime`      |      | **Required** |
| `to`             |      | **Required** |

#### agencyId

`agencyId`

- is optional
- type: agencyId

##### agencyId Type

- [agencyId](common.md) – `http://maasglobal.com/core/components/common.json#/definitions/agencyId`

#### departureDelay

`departureDelay`

- is optional
- type: duration

##### departureDelay Type

- [duration](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/duration`

#### endTime

`endTime`

- is **required**
- type: time

##### endTime Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

#### from

Starting location's lat and lon pair of this request

`from`

- is **required**
- type: place

##### from Type

- [place](place.md) – `http://maasglobal.com/core/components/place.json`

#### mode

`mode`

- is **required**
- type: travel-mode

##### mode Type

- [travel-mode](travel-mode.md) – `http://maasglobal.com/core/components/travel-mode.json`

#### startTime

`startTime`

- is **required**
- type: time

##### startTime Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

#### to

`to`

- is **required**
- type: place

##### to Type

- [place](place.md) – `http://maasglobal.com/core/components/place.json`

## meta

`meta`

- is **required**
- type: booking-meta
- defined in this schema

### meta Type

- [booking-meta](../../core/booking-meta.md) – `http://maasglobal.com/core/booking-meta.json`

## terms

`terms`

- is **required**
- type: terms
- defined in this schema

### terms Type

- [terms](booking.md) – `http://maasglobal.com/core/components/terms.json`

## tspProduct

Defines what kind of TSP product the booking option represents.

`tspProduct`

- is **required**
- type: `object`
- defined in this schema

### tspProduct Type

`object` with following properties:

| Property | Type   | Required     |
| -------- | ------ | ------------ |
| `id`     | string | **Required** |

#### id

Unique identifier for the product

`id`

- is **required**
- type: `string`

##### id Type

`string`

- minimum length: 1 characters
- maximum length: 255 characters
