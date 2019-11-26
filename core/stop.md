# stop Schema

```
http://maasglobal.com/core/stop.json
```

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                  |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | --------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Permitted             | [core/stop.json](stop.json) |

## Schema Hierarchy

- stop `http://maasglobal.com/core/stop.json`
  - [place](components/place.md) `http://maasglobal.com/core/components/place.json`

# stop Properties

| Property                        | Type       | Required   | Nullable | Defined by                                 |
| ------------------------------- | ---------- | ---------- | -------- | ------------------------------------------ |
| [address](#address)             | `string`   | Optional   | No       | [place](components/place.md#address)       |
| [facilities](#facilities)       | `string[]` | Optional   | No       | [place](components/place.md#facilities)    |
| [lat](#lat)                     | `number`   | Optional   | No       | [place](components/place.md#lat)           |
| [localeAddress](#localeaddress) | `string`   | Optional   | No       | [place](components/place.md#localeaddress) |
| [lon](#lon)                     | `number`   | Optional   | No       | [place](components/place.md#lon)           |
| [name](#name)                   | `string`   | Optional   | No       | [place](components/place.md#name)          |
| [openingHours](#openinghours)   | `object`   | Optional   | No       | [place](components/place.md#openinghours)  |
| [startTime](#starttime)         | time       | Optional   | No       | stop (this schema)                         |
| [stationId](#stationid)         | `string`   | Optional   | No       | [place](components/place.md#stationid)     |
| [stopCode](#stopcode)           | `string`   | Optional   | No       | [place](components/place.md#stopcode)      |
| [stopId](#stopid)               | `string`   | Optional   | No       | [place](components/place.md#stopid)        |
| [zone](#zone)                   | complex    | Optional   | No       | [place](components/place.md#zone)          |
| `*`                             | any        | Additional | Yes      | this schema _allows_ additional properties |

## address

Encoded address components in form
country:Finland|state:Uusimaa|city:Helsinki|zipCode:00100|streetName:Ludviginkatu|streetNumber:6

`address`

- is optional
- type: `string`
- defined in [place](components/place.md#address)

### address Type

`string`

All instances must conform to this regular expression (test examples
[here](<https://regexr.com/?expression=%5E(%3F%3A(%3F%3A(%3F%3Acountry%3A(%3F%3A%5Cp%7BL%7D%7C%5Cs%7C&#39;)%2B)%7C(%3F%3Astate%3A(%3F%3A%5Cp%7BL%7D%7C%5B%2C%5C.%3A%5C-%60&#39;%C2%B4%5Cs%5D)%2B)%7C(%3F%3Acity%3A(%3F%3A%5Cp%7BL%7D%7C%5B%2C%5C.%3A%5C-%60&#39;%C2%B4%5Cs%5D)%2B)%7C(%3F%3AzipCode%3A(%3F%3A%5Ba-zA-Z0-9%20%5D%7B3%2C10%7D%7C(%3F%3A%5Cp%7BL%7D%7C%5Cd)%7B2%2C4%7D(%5Cs(%3F%3A%5Cp%7BL%7D%7C%5Cd)%7B2%2C4%7D)%3F))%7C(%3F%3AstreetName%3A%5B%5E%7C%5D%2B)%7C(%3F%3AstreetNumber%3A%5Cd%2B))%5C%7C%3F)%7B4%2C6%7D%24>)):

```regex
^(?:(?:(?:country:(?:\p{L}|\s|')+)|(?:state:(?:\p{L}|[,\.:\-`'´\s])+)|(?:city:(?:\p{L}|[,\.:\-`'´\s])+)|(?:zipCode:(?:[a-zA-Z0-9 ]{3,10}|(?:\p{L}|\d){2,4}(\s(?:\p{L}|\d){2,4})?))|(?:streetName:[^|]+)|(?:streetNumber:\d+))\|?){4,6}$
```

## facilities

`facilities`

- is optional
- type: `string[]`
- defined in [place](components/place.md#facilities)

### facilities Type

Array type: `string[]`

All items must be of the type: `string`

- minimum length: 1 characters
- maximum length: 80 characters

## lat

No-numeric precision version of MaaS core latitude

`lat`

- is optional
- type: `number`
- defined in [place](components/place.md#lat)

### lat Type

`number`

- minimum value: `-90`
- maximum value: `90`

## localeAddress

Country specific formatted address

`localeAddress`

- is optional
- type: `string`
- defined in [place](components/place.md#localeaddress)

### localeAddress Type

`string`

## lon

No-numeric precision version of MaaS core longitude

`lon`

- is optional
- type: `number`
- defined in [place](components/place.md#lon)

### lon Type

`number`

- minimum value: `-180`
- maximum value: `180`

## name

Place name (given in autocomplete)

`name`

- is optional
- type: `string`
- defined in [place](components/place.md#name)

### name Type

`string`

- minimum length: 1 characters

## openingHours

Opening hour of the station, object format is left for TSP to decide

`openingHours`

- is optional
- type: `object`
- defined in [place](components/place.md#openinghours)

### openingHours Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


## startTime

`startTime`

- is optional
- type: time
- defined in this schema

### startTime Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

## stationId

`stationId`

- is optional
- type: `string`
- defined in [place](components/place.md#stationid)

### stationId Type

`string`

- minimum length: 1 characters
- maximum length: 64 characters

## stopCode

`stopCode`

- is optional
- type: `string`
- defined in [place](components/place.md#stopcode)

### stopCode Type

`string`

- minimum length: 1 characters
- maximum length: 64 characters

## stopId

`stopId`

- is optional
- type: `string`
- defined in [place](components/place.md#stopid)

### stopId Type

`string`

- minimum length: 1 characters
- maximum length: 64 characters

## zone

Geofencing zone defined by provider that the station is within

`zone`

- is optional
- type: complex
- defined in [place](components/place.md#zone)

### zone Type

**Any** following _options_ needs to be fulfilled.

#### Option 1

`number`

#### Option 2

`string`

**All** of the following _requirements_ need to be fulfilled.

#### Requirement 1

- [place](place.md) – `http://maasglobal.com/core/components/place.json`

#### Requirement 2

`object` with following properties:

| Property        | Type   | Required |
| --------------- | ------ | -------- |
| `address`       | string | Optional |
| `facilities`    | array  | Optional |
| `lat`           | number | Optional |
| `localeAddress` | string | Optional |
| `lon`           | number | Optional |
| `name`          | string | Optional |
| `openingHours`  | object | Optional |
| `startTime`     |        | Optional |
| `stationId`     | string | Optional |
| `stopCode`      | string | Optional |
| `stopId`        | string | Optional |
| `zone`          | anyOf  | Optional |

#### address

Encoded address components in form
country:Finland|state:Uusimaa|city:Helsinki|zipCode:00100|streetName:Ludviginkatu|streetNumber:6

`address`

- is optional
- type: `string`

##### address Type

`string`

All instances must conform to this regular expression (test examples
[here](<https://regexr.com/?expression=%5E(%3F%3A(%3F%3A(%3F%3Acountry%3A(%3F%3A%5Cp%7BL%7D%7C%5Cs%7C&#39;)%2B)%7C(%3F%3Astate%3A(%3F%3A%5Cp%7BL%7D%7C%5B%2C%5C.%3A%5C-%60&#39;%C2%B4%5Cs%5D)%2B)%7C(%3F%3Acity%3A(%3F%3A%5Cp%7BL%7D%7C%5B%2C%5C.%3A%5C-%60&#39;%C2%B4%5Cs%5D)%2B)%7C(%3F%3AzipCode%3A(%3F%3A%5Ba-zA-Z0-9%20%5D%7B3%2C10%7D%7C(%3F%3A%5Cp%7BL%7D%7C%5Cd)%7B2%2C4%7D(%5Cs(%3F%3A%5Cp%7BL%7D%7C%5Cd)%7B2%2C4%7D)%3F))%7C(%3F%3AstreetName%3A%5B%5E%7C%5D%2B)%7C(%3F%3AstreetNumber%3A%5Cd%2B))%5C%7C%3F)%7B4%2C6%7D%24>)):

```regex
^(?:(?:(?:country:(?:\p{L}|\s|')+)|(?:state:(?:\p{L}|[,\.:\-`'´\s])+)|(?:city:(?:\p{L}|[,\.:\-`'´\s])+)|(?:zipCode:(?:[a-zA-Z0-9 ]{3,10}|(?:\p{L}|\d){2,4}(\s(?:\p{L}|\d){2,4})?))|(?:streetName:[^|]+)|(?:streetNumber:\d+))\|?){4,6}$
```

#### facilities

`facilities`

- is optional
- type: `string[]`

##### facilities Type

Array type: `string[]`

All items must be of the type: `string`

- minimum length: 1 characters
- maximum length: 80 characters

#### lat

No-numeric precision version of MaaS core latitude

`lat`

- is optional
- type: `number`

##### lat Type

`number`

- minimum value: `-90`
- maximum value: `90`

#### localeAddress

Country specific formatted address

`localeAddress`

- is optional
- type: `string`

##### localeAddress Type

`string`

#### lon

No-numeric precision version of MaaS core longitude

`lon`

- is optional
- type: `number`

##### lon Type

`number`

- minimum value: `-180`
- maximum value: `180`

#### name

Place name (given in autocomplete)

`name`

- is optional
- type: `string`

##### name Type

`string`

- minimum length: 1 characters

#### openingHours

Opening hour of the station, object format is left for TSP to decide

`openingHours`

- is optional
- type: `object`

##### openingHours Type

`object` with following properties:

| Property | Type | Required |
| -------- | ---- | -------- |


#### startTime

`startTime`

- is optional
- type: time

##### startTime Type

- [time](units.md) – `http://maasglobal.com/core/components/units.json#/definitions/time`

#### stationId

`stationId`

- is optional
- type: `string`

##### stationId Type

`string`

- minimum length: 1 characters
- maximum length: 64 characters

#### stopCode

`stopCode`

- is optional
- type: `string`

##### stopCode Type

`string`

- minimum length: 1 characters
- maximum length: 64 characters

#### stopId

`stopId`

- is optional
- type: `string`

##### stopId Type

`string`

- minimum length: 1 characters
- maximum length: 64 characters

#### zone

Geofencing zone defined by provider that the station is within

`zone`

- is optional
- type: complex

##### zone Type

**Any** following _options_ needs to be fulfilled.

#### Option 1

`number`

#### Option 2

`string`
