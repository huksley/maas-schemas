# agencyOptions Schema

```
http://maasglobal.com/core/components/agencyOptions.json
```

Options that can be used for available booking options

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                               |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | -------------------------------------------------------- |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [core/components/agencyOptions.json](agencyOptions.json) |

## Schema Hierarchy

- agencyOptions `http://maasglobal.com/core/components/agencyOptions.json`
  - [travel-mode](travel-mode.md) `http://maasglobal.com/core/components/travel-mode.json`
  - [common](common.md) `http://maasglobal.com/core/components/common.json`
  - [units](units.md) `http://maasglobal.com/core/components/units.json`
  - [units-geo](units-geo.md) `http://maasglobal.com/core/components/units-geo.json`
  - [address](address.md) `http://maasglobal.com/core/components/address.json`

# agencyOptions Properties

| Property                    | Type        | Required | Nullable | Defined by                  |
| --------------------------- | ----------- | -------- | -------- | --------------------------- |
| [agencyId](#agencyid)       | `string`    | Optional | No       | agencyOptions (this schema) |
| [endTime](#endtime)         | `integer`   | Optional | No       | agencyOptions (this schema) |
| [from](#from)               | `string`    | Optional | No       | agencyOptions (this schema) |
| [fromAddress](#fromaddress) | `string`    | Optional | No       | agencyOptions (this schema) |
| [fromName](#fromname)       | `string`    | Optional | No       | agencyOptions (this schema) |
| [fromRadius](#fromradius)   | `number`    | Optional | No       | agencyOptions (this schema) |
| [mode](#mode)               | travel-mode | Optional | No       | agencyOptions (this schema) |
| [startTime](#starttime)     | `integer`   | Optional | No       | agencyOptions (this schema) |
| [to](#to)                   | `string`    | Optional | No       | agencyOptions (this schema) |
| [toAddress](#toaddress)     | `string`    | Optional | No       | agencyOptions (this schema) |
| [toName](#toname)           | `string`    | Optional | No       | agencyOptions (this schema) |
| [toRadius](#toradius)       | `number`    | Optional | No       | agencyOptions (this schema) |

## agencyId

`agencyId`

- is optional
- type: `string`
- defined in this schema

### agencyId Type

`string`

- minimum length: 2 characters
- maximum length: 64 characters

## endTime

POSIX time in milliseconds, https://en.wikipedia.org/wiki/Unix_time

`endTime`

- is optional
- type: `integer`
- defined in this schema

### endTime Type

`integer`

- minimum value: `1451606400`
- maximum value: `9007199254740991`

## from

Geographic latitude-longitude number-pair as a string in WGS-84 system, see
https://en.wikipedia.org/wiki/World_Geodetic_System

`from`

- is optional
- type: `string`
- defined in this schema

### from Type

`string`

- minimum length: 1 characters
- maximum length: 64 characters All instances must conform to this regular expression (test examples
  [here](<https://regexr.com/?expression=%5E%5B%2B-%5D%3F%5Cd%7B1%2C3%7D(%5C.%5Cd%2B)%3F%2C%5B%2B-%5D%3F%5Cd%7B1%2C3%7D(%5C.%5Cd%2B)%3F%24>)):

```regex
^[+-]?\d{1,3}(\.\d+)?,[+-]?\d{1,3}(\.\d+)?$
```

## fromAddress

Componentized from address

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

The human understandable name for 'from'

`fromName`

- is optional
- type: `string`
- defined in this schema

### fromName Type

`string`

- minimum length: 1 characters

## fromRadius

Distance in meters

`fromRadius`

- is optional
- type: `number`
- defined in this schema

### fromRadius Type

`number`

- minimum value: `0`
- maximum value: `40075000`
- must be a multiple of `1`

## mode

`mode`

- is optional
- type: travel-mode
- defined in this schema

### mode Type

- [travel-mode](travel-mode.md) – `http://maasglobal.com/core/components/travel-mode.json`

## startTime

POSIX time in milliseconds, https://en.wikipedia.org/wiki/Unix_time

`startTime`

- is optional
- type: `integer`
- defined in this schema

### startTime Type

`integer`

- minimum value: `1451606400`
- maximum value: `9007199254740991`

## to

Geographic latitude-longitude number-pair as a string in WGS-84 system, see
https://en.wikipedia.org/wiki/World_Geodetic_System

`to`

- is optional
- type: `string`
- defined in this schema

### to Type

`string`

- minimum length: 1 characters
- maximum length: 64 characters All instances must conform to this regular expression (test examples
  [here](<https://regexr.com/?expression=%5E%5B%2B-%5D%3F%5Cd%7B1%2C3%7D(%5C.%5Cd%2B)%3F%2C%5B%2B-%5D%3F%5Cd%7B1%2C3%7D(%5C.%5Cd%2B)%3F%24>)):

```regex
^[+-]?\d{1,3}(\.\d+)?,[+-]?\d{1,3}(\.\d+)?$
```

## toAddress

Componentized to address

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

The human understandable name for 'to'

`toName`

- is optional
- type: `string`
- defined in this schema

### toName Type

`string`

- minimum length: 1 characters

## toRadius

Distance in meters

`toRadius`

- is optional
- type: `number`
- defined in this schema

### toRadius Type

`number`

- minimum value: `0`
- maximum value: `40075000`
- must be a multiple of `1`
