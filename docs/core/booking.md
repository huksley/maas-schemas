# booking Schema

```
http://maasglobal.com/core/booking.json#
```

The base booking object with all fields, to be inherited

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                        |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | --------------------------------- |
| Can be instantiated | Yes        | Develop | No           | Forbidden         | Permitted             | [core/booking.json](booking.json) |

## Schema Hierarchy

- booking `http://maasglobal.com/core/booking.json#`
  - [state](components/state.md) `http://maasglobal.com/core/components/state.json`
  - [state-log](components/state-log.md) `http://maasglobal.com/core/components/state-log.json`
  - [booking-meta](booking-meta.md) `http://maasglobal.com/core/booking-meta.json`
  - [product](product.md) `http://maasglobal.com/core/product.json`
  - [common](components/common.md) `http://maasglobal.com/core/components/common.json`
  - [customerSelection](components/customerSelection.md) `http://maasglobal.com/core/components/customerSelection.json`

# booking Definitions

| Property                              | Type           | Group                                                         |
| ------------------------------------- | -------------- | ------------------------------------------------------------- |
| [agencyId](#agencyid)                 | agencyId       | `http://maasglobal.com/core/booking.json##/definitions/leg`   |
| [arrivalDelay](#arrivaldelay)         | arrivalDelay   | `http://maasglobal.com/core/booking.json##/definitions/leg`   |
| [data](#data)                         | `object`       | `http://maasglobal.com/core/booking.json##/definitions/token` |
| [departureDelay](#departuredelay)     | departureDelay | `http://maasglobal.com/core/booking.json##/definitions/leg`   |
| [distance](#distance)                 | distance       | `http://maasglobal.com/core/booking.json##/definitions/leg`   |
| [endTime](#endtime)                   | endTime        | `http://maasglobal.com/core/booking.json##/definitions/leg`   |
| [from](#from)                         | from           | `http://maasglobal.com/core/booking.json##/definitions/leg`   |
| [legGeometry](#leggeometry)           | legGeometry    | `http://maasglobal.com/core/booking.json##/definitions/leg`   |
| [mode](#mode)                         | mode           | `http://maasglobal.com/core/booking.json##/definitions/leg`   |
| [productOption](#productoption)       | productOption  | `http://maasglobal.com/core/booking.json##/definitions/leg`   |
| [route](#route)                       | route          | `http://maasglobal.com/core/booking.json##/definitions/leg`   |
| [routeLongName](#routelongname)       | routeLongName  | `http://maasglobal.com/core/booking.json##/definitions/leg`   |
| [routeShortName](#routeshortname)     | routeShortName | `http://maasglobal.com/core/booking.json##/definitions/leg`   |
| [startTime](#starttime)               | startTime      | `http://maasglobal.com/core/booking.json##/definitions/leg`   |
| [stops](#stops)                       | stops          | `http://maasglobal.com/core/booking.json##/definitions/leg`   |
| [to](#to)                             | to             | `http://maasglobal.com/core/booking.json##/definitions/leg`   |
| [tspProduct](#tspproduct)             | tspProduct     | `http://maasglobal.com/core/booking.json##/definitions/leg`   |
| [validityDuration](#validityduration) | `object`       | `http://maasglobal.com/core/booking.json##/definitions/token` |

## agencyId

`agencyId`

- is optional
- type: agencyId
- defined in this schema

### agencyId Type

- [agencyId](leg.md) – `http://maasglobal.com/core/leg.json#/definitions/agencyId`

## arrivalDelay

`arrivalDelay`

- is optional
- type: arrivalDelay
- defined in this schema

### arrivalDelay Type

- [arrivalDelay](leg.md) – `http://maasglobal.com/core/leg.json#/definitions/arrivalDelay`

## data

Arbitrary ticket data for the client

`data`

- is optional
- type: `object`
- defined in this schema

### data Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## departureDelay

`departureDelay`

- is optional
- type: departureDelay
- defined in this schema

### departureDelay Type

- [departureDelay](leg.md) – `http://maasglobal.com/core/leg.json#/definitions/departureDelay`

## distance

`distance`

- is optional
- type: distance
- defined in this schema

### distance Type

- [distance](leg.md) – `http://maasglobal.com/core/leg.json#/definitions/distance`

## endTime

`endTime`

- is optional
- type: endTime
- defined in this schema

### endTime Type

- [endTime](leg.md) – `http://maasglobal.com/core/leg.json#/definitions/endTime`

## from

`from`

- is optional
- type: from
- defined in this schema

### from Type

- [from](leg.md) – `http://maasglobal.com/core/leg.json#/definitions/from`

## legGeometry

`legGeometry`

- is optional
- type: legGeometry
- defined in this schema

### legGeometry Type

- [legGeometry](leg.md) – `http://maasglobal.com/core/leg.json#/definitions/legGeometry`

## mode

`mode`

- is optional
- type: mode
- defined in this schema

### mode Type

- [mode](leg.md) – `http://maasglobal.com/core/leg.json#/definitions/mode`

## productOption

`productOption`

- is optional
- type: productOption
- defined in this schema

### productOption Type

- [productOption](leg.md) – `http://maasglobal.com/core/leg.json#/definitions/productOption`

## route

`route`

- is optional
- type: route
- defined in this schema

### route Type

- [route](leg.md) – `http://maasglobal.com/core/leg.json#/definitions/route`

## routeLongName

`routeLongName`

- is optional
- type: routeLongName
- defined in this schema

### routeLongName Type

- [routeLongName](leg.md) – `http://maasglobal.com/core/leg.json#/definitions/routeLongName`

## routeShortName

`routeShortName`

- is optional
- type: routeShortName
- defined in this schema

### routeShortName Type

- [routeShortName](leg.md) – `http://maasglobal.com/core/leg.json#/definitions/routeShortName`

## startTime

`startTime`

- is optional
- type: startTime
- defined in this schema

### startTime Type

- [startTime](leg.md) – `http://maasglobal.com/core/leg.json#/definitions/startTime`

## stops

`stops`

- is optional
- type: stops
- defined in this schema

### stops Type

- [stops](leg.md) – `http://maasglobal.com/core/leg.json#/definitions/stops`

## to

`to`

- is optional
- type: to
- defined in this schema

### to Type

- [to](leg.md) – `http://maasglobal.com/core/leg.json#/definitions/to`

## tspProduct

`tspProduct`

- is optional
- type: tspProduct
- defined in this schema

### tspProduct Type

- [tspProduct](leg.md) – `http://maasglobal.com/core/leg.json#/definitions/tspProduct`

## validityDuration

The rules that MaaS will interpret to schedule, re-validate or cancel the booking.

`validityDuration`

- is optional
- type: `object`
- defined in this schema

### validityDuration Type

`object` with following properties:

| Property    | Type | Required |
| ----------- | ---- | -------- |
| `endTime`   |      | Optional |
| `startTime` |      | Optional |

#### endTime

The finishing time the ticket is valid for

`endTime`

- is optional
- type: time

##### endTime Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

#### startTime

The starting time from which the ticket is valid

`startTime`

- is optional
- type: time

##### startTime Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

# booking Properties

| Property                                | Type              | Required     | Nullable | Defined by                                 |
| --------------------------------------- | ----------------- | ------------ | -------- | ------------------------------------------ |
| [configurator](#configurator)           | configurator      | Optional     | No       | booking (this schema)                      |
| [cost](#cost)                           | cost              | Optional     | No       | booking (this schema)                      |
| [customer](#customer)                   | complex           | **Required** | No       | booking (this schema)                      |
| [customerSelection](#customerselection) | customerSelection | Optional     | No       | booking (this schema)                      |
| [fares](#fares)                         | fares             | Optional     | No       | booking (this schema)                      |
| [id](#id)                               | id                | **Required** | No       | booking (this schema)                      |
| [leg](#leg)                             | leg               | **Required** | No       | booking (this schema)                      |
| [meta](#meta)                           | booking-meta      | **Required** | No       | booking (this schema)                      |
| [product](#product)                     | product           | Optional     | No       | booking (this schema)                      |
| [signature](#signature)                 | `string`          | Optional     | No       | booking (this schema)                      |
| [state](#state)                         | `enum`            | **Required** | No       | booking (this schema)                      |
| [stateLog](#statelog)                   | state-log         | Optional     | No       | booking (this schema)                      |
| [terms](#terms)                         | terms             | **Required** | No       | booking (this schema)                      |
| [token](#token)                         | token             | **Required** | No       | booking (this schema)                      |
| [tspId](#tspid)                         | tspId             | Optional     | No       | booking (this schema)                      |
| `*`                                     | any               | Additional   | Yes      | this schema _allows_ additional properties |

## configurator

`configurator`

- is optional
- type: configurator
- defined in this schema

### configurator Type

- [configurator](booking.md) – `#/definitions/configurator`

## cost

`cost`

- is optional
- type: cost
- defined in this schema

### cost Type

- [cost](booking.md) – `#/definitions/cost`

## customer

MaaS booking customer

`customer`

- is **required**
- type: complex
- defined in this schema

### customer Type

**All** of the following _requirements_ need to be fulfilled.

#### Requirement 1

- [customer](customer.md) – `http://maasglobal.com/core/customer.json`

#### Requirement 2

## customerSelection

`customerSelection`

- is optional
- type: customerSelection
- defined in this schema

### customerSelection Type

- [customerSelection](components/customerSelection.md) – `http://maasglobal.com/core/components/customerSelection.json`

## fares

`fares`

- is optional
- type: fares
- defined in this schema

### fares Type

- [fares](booking.md) – `#/definitions/fares`

## id

`id`

- is **required**
- type: id
- defined in this schema

### id Type

- [id](booking.md) – `#/definitions/id`

## leg

`leg`

- is **required**
- type: leg
- defined in this schema

### leg Type

- [leg](booking.md) – `#/definitions/leg`

## meta

`meta`

- is **required**
- type: booking-meta
- defined in this schema

### meta Type

- [booking-meta](booking-meta.md) – `http://maasglobal.com/core/booking-meta.json`

## product

`product`

- is optional
- type: product
- defined in this schema

### product Type

- [product](product.md) – `http://maasglobal.com/core/product.json`

## signature

Signature of a signed object

`signature`

- is optional
- type: `string`
- defined in this schema

### signature Type

`string`

- minimum length: 1 characters
- maximum length: 1024 characters

## state

The life-cycle state of a booking

`state`

- is **required**
- type: `enum`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#state-known-values).

### state Known Values

| Value       | Description |
| ----------- | ----------- |
| `START`     |             |
| `PENDING`   |             |
| `PAID`      |             |
| `RESERVED`  |             |
| `CONFIRMED` |             |
| `ARRIVED`   |             |
| `ACTIVATED` |             |
| `ON_HOLD`   |             |
| `CANCELLED` |             |
| `EXPIRED`   |             |
| `REJECTED`  |             |
| `FINISHED`  |             |
| `UNKNOWN`   |             |

## stateLog

`stateLog`

- is optional
- type: state-log
- defined in this schema

### stateLog Type

- [state-log](components/state-log.md) – `http://maasglobal.com/core/components/state-log.json`

## terms

`terms`

- is **required**
- type: terms
- defined in this schema

### terms Type

- [terms](booking.md) – `#/definitions/terms`

## token

`token`

- is **required**
- type: token
- defined in this schema

### token Type

- [token](booking.md) – `#/definitions/token`

## tspId

`tspId`

- is optional
- type: tspId
- defined in this schema

### tspId Type

- [tspId](booking.md) – `#/definitions/tspId`
