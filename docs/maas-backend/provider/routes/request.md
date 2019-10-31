# request Schema

```
http://maasglobal.com/maas-backend/provider/routes/request.json
```

Request schema for routes providers

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | --------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/provider/routes/request.json](request.json) |

## Schema Hierarchy

- request `http://maasglobal.com/maas-backend/provider/routes/request.json`
  - [units](../../../core/components/units.md) `http://maasglobal.com/core/components/units.json`
  - [units-geo](../../../core/components/units-geo.md) `http://maasglobal.com/core/components/units-geo.json`
  - [address](../../../core/components/address.md) `http://maasglobal.com/core/components/address.json`
  - [station](../../../core/components/station.md) `http://maasglobal.com/core/components/station.json`
  - [travel-mode](../../../core/components/travel-mode.md) `http://maasglobal.com/core/components/travel-mode.json`

# request Properties

| Property                        | Type        | Required     | Nullable | Defined by            |
| ------------------------------- | ----------- | ------------ | -------- | --------------------- |
| [arriveBy](#arriveby)           | `integer`   | Optional     | No       | request (this schema) |
| [from](#from)                   | `array`     | **Required** | No       | request (this schema) |
| [fromAddress](#fromaddress)     | `string`    | Optional     | No       | request (this schema) |
| [fromName](#fromname)           | `string`    | Optional     | No       | request (this schema) |
| [fromStationId](#fromstationid) | `string`    | Optional     | No       | request (this schema) |
| [identityId](#identityid)       | complex     | Optional     | No       | request (this schema) |
| [leaveAt](#leaveat)             | `integer`   | Optional     | No       | request (this schema) |
| [modes](#modes)                 | travel-mode | Optional     | No       | request (this schema) |
| [to](#to)                       | `array`     | **Required** | No       | request (this schema) |
| [toAddress](#toaddress)         | `string`    | Optional     | No       | request (this schema) |
| [toName](#toname)               | `string`    | Optional     | No       | request (this schema) |
| [toStationId](#tostationid)     | `string`    | Optional     | No       | request (this schema) |
| `^(optionalParameters).+`       | multiple    | Pattern      | No       | request (this schema) |

## arriveBy

POSIX time in milliseconds, https://en.wikipedia.org/wiki/Unix_time

`arriveBy`

- is optional
- type: `integer`
- defined in this schema

### arriveBy Type

`integer`

- minimum value: `1451606400`
- maximum value: `9007199254740991`

## from

Geographic latitude-longitude number-pair array in WGS-84 system, see
https://en.wikipedia.org/wiki/World_Geodetic_System

`from`

- is **required**
- type: `array`
- defined in this schema

### from Type

Array type: `array`

All items must be of the type: Unknown type ``.

```json
{
  "description": "Geographic latitude-longitude number-pair array in WGS-84 system, see https://en.wikipedia.org/wiki/World_Geodetic_System",
  "type": "array",
  "items": [
    {
      "$ref": "#/definitions/latitude"
    },
    {
      "$ref": "#/definitions/longitude"
    }
  ],
  "additionalItems": false,
  "$linkVal": "shortLocation",
  "$linkPath": "units-geo.md",
  "isrequired": true,
  "simpletype": "`array`"
}
```

## fromAddress

Encoded address components in form
country:Finland|state:Uusimaa|city:Helsinki|zipCode:00100|streetName:Ludviginkatu|streetNumber:6

`fromAddress`

- is optional
- type: `string`
- defined in this schema

### fromAddress Type

`string`

All instances must conform to this regular expression (test examples
[here](<https://regexr.com/?expression=%5E(%3F%3A(%3F%3A(%3F%3Acountry%3A(%3F%3A%5Cp%7BL%7D%7C%5Cs%7C&#39;)%2B)%7C(%3F%3Astate%3A(%3F%3A%5Cp%7BL%7D%7C%5B%2C%5C.%3A%5C-%60&#39;%C2%B4%5Cs%5D)%2B)%7C(%3F%3Acity%3A(%3F%3A%5Cp%7BL%7D%7C%5B%2C%5C.%3A%5C-%60&#39;%C2%B4%5Cs%5D)%2B)%7C(%3F%3AzipCode%3A(%3F%3A%5Ba-zA-Z0-9%20%5D%7B3%2C10%7D%7C(%3F%3A%5Cp%7BL%7D%7C%5Cd)%7B2%2C4%7D(%5Cs(%3F%3A%5Cp%7BL%7D%7C%5Cd)%7B2%2C4%7D)%3F))%7C(%3F%3AstreetName%3A%5B%5E%7C%5D%2B)%7C(%3F%3AstreetNumber%3A%5Cd%2B))%5C%7C%3F)%7B4%2C6%7D%24>)):

```regex
^(?:(?:(?:country:(?:\p{L}|\s|')+)|(?:state:(?:\p{L}|[,\.:\-`'´\s])+)|(?:city:(?:\p{L}|[,\.:\-`'´\s])+)|(?:zipCode:(?:[a-zA-Z0-9 ]{3,10}|(?:\p{L}|\d){2,4}(\s(?:\p{L}|\d){2,4})?))|(?:streetName:[^|]+)|(?:streetNumber:\d+))\|?){4,6}$
```

## fromName

Place name (given in autocomplete)

`fromName`

- is optional
- type: `string`
- defined in this schema

### fromName Type

`string`

- minimum length: 1 characters

## fromStationId

`fromStationId`

- is optional
- type: `string`
- defined in this schema

### fromStationId Type

`string`

- minimum length: 1 characters
- maximum length: 64 characters

## identityId

`identityId`

- is optional
- type: complex
- defined in this schema

### identityId Type

**Any** following _options_ needs to be fulfilled.

#### Option 1

`string`

All instances must conform to this regular expression (test examples
[here](<https://regexr.com/?expression=%5E%5Baepus%5D%7B2%7D-%5B%5Cw%5D%7B4%7D-%5Cd%3A%5Ba-f%5Cd%5D%7B8%7D(-%5Ba-f%5Cd%5D%7B4%7D)%7B3%7D-%5Ba-f%5Cd%5D%7B12%7D%24>)):

```regex
^[aepus]{2}-[\w]{4}-\d:[a-f\d]{8}(-[a-f\d]{4}){3}-[a-f\d]{12}$
```

#### Option 2

`string`

All instances must conform to this regular expression (test examples
[here](<https://regexr.com/?expression=%5E%5BA-Fa-f0-9%5D%7B8%7D(-%5BA-Fa-f0-9%5D%7B4%7D)%7B3%7D-%5BA-Fa-f0-9%5D%7B12%7D%24>)):

```regex
^[A-Fa-f0-9]{8}(-[A-Fa-f0-9]{4}){3}-[A-Fa-f0-9]{12}$
```

## leaveAt

POSIX time in milliseconds, https://en.wikipedia.org/wiki/Unix_time

`leaveAt`

- is optional
- type: `integer`
- defined in this schema

### leaveAt Type

`integer`

- minimum value: `1451606400`
- maximum value: `9007199254740991`

## modes

`modes`

- is optional
- type: travel-mode
- defined in this schema

### modes Type

- [travel-mode](../../../core/components/travel-mode.md) – `http://maasglobal.com/core/components/travel-mode.json`

## to

Geographic latitude-longitude number-pair array in WGS-84 system, see
https://en.wikipedia.org/wiki/World_Geodetic_System

`to`

- is **required**
- type: `array`
- defined in this schema

### to Type

Array type: `array`

All items must be of the type: Unknown type ``.

```json
{
  "description": "Geographic latitude-longitude number-pair array in WGS-84 system, see https://en.wikipedia.org/wiki/World_Geodetic_System",
  "type": "array",
  "items": [
    {
      "$ref": "#/definitions/latitude"
    },
    {
      "$ref": "#/definitions/longitude"
    }
  ],
  "additionalItems": false,
  "$linkVal": "shortLocation",
  "$linkPath": "units-geo.md",
  "isrequired": true,
  "simpletype": "`array`"
}
```

## toAddress

Encoded address components in form
country:Finland|state:Uusimaa|city:Helsinki|zipCode:00100|streetName:Ludviginkatu|streetNumber:6

`toAddress`

- is optional
- type: `string`
- defined in this schema

### toAddress Type

`string`

All instances must conform to this regular expression (test examples
[here](<https://regexr.com/?expression=%5E(%3F%3A(%3F%3A(%3F%3Acountry%3A(%3F%3A%5Cp%7BL%7D%7C%5Cs%7C&#39;)%2B)%7C(%3F%3Astate%3A(%3F%3A%5Cp%7BL%7D%7C%5B%2C%5C.%3A%5C-%60&#39;%C2%B4%5Cs%5D)%2B)%7C(%3F%3Acity%3A(%3F%3A%5Cp%7BL%7D%7C%5B%2C%5C.%3A%5C-%60&#39;%C2%B4%5Cs%5D)%2B)%7C(%3F%3AzipCode%3A(%3F%3A%5Ba-zA-Z0-9%20%5D%7B3%2C10%7D%7C(%3F%3A%5Cp%7BL%7D%7C%5Cd)%7B2%2C4%7D(%5Cs(%3F%3A%5Cp%7BL%7D%7C%5Cd)%7B2%2C4%7D)%3F))%7C(%3F%3AstreetName%3A%5B%5E%7C%5D%2B)%7C(%3F%3AstreetNumber%3A%5Cd%2B))%5C%7C%3F)%7B4%2C6%7D%24>)):

```regex
^(?:(?:(?:country:(?:\p{L}|\s|')+)|(?:state:(?:\p{L}|[,\.:\-`'´\s])+)|(?:city:(?:\p{L}|[,\.:\-`'´\s])+)|(?:zipCode:(?:[a-zA-Z0-9 ]{3,10}|(?:\p{L}|\d){2,4}(\s(?:\p{L}|\d){2,4})?))|(?:streetName:[^|]+)|(?:streetNumber:\d+))\|?){4,6}$
```

## toName

Place name (given in autocomplete)

`toName`

- is optional
- type: `string`
- defined in this schema

### toName Type

`string`

- minimum length: 1 characters

## toStationId

`toStationId`

- is optional
- type: `string`
- defined in this schema

### toStationId Type

`string`

- minimum length: 1 characters
- maximum length: 64 characters

## Pattern: `^(optionalParameters).+`

Applies to all properties that match the regular expression `^(optionalParameters).+`

`^(optionalParameters).+`

- is a property pattern
- type: multiple
- defined in this schema

### Pattern ^(optionalParameters).+ Type

Unknown type `string,number,boolean`.

```json
{
  "type": ["string", "number", "boolean"],
  "simpletype": "multiple"
}
```
