# request Schema

```
http://maasglobal.com/tsp/journey-planner/request.json
```

Request schema for getting journey options from a TSP adapter.

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                       |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------ |
| Can be instantiated | No         | Develop | No           | Forbidden         | Permitted             | [tsp/journey-planner/request.json](request.json) |

# request Properties

| Property                  | Type     | Required   | Nullable | Defined by                                 |
| ------------------------- | -------- | ---------- | -------- | ------------------------------------------ |
| [payload](#payload)       | `object` | Optional   | No       | request (this schema)                      |
| `^(optionalParameters).+` | multiple | Pattern    | No       | request (this schema)                      |
| `*`                       | any      | Additional | Yes      | this schema _allows_ additional properties |

## payload

`payload`

- is optional
- type: `object`
- defined in this schema

### payload Type

`object` with following properties:

| Property         | Type    | Required |
| ---------------- | ------- | -------- |
| `arriveBy`       | integer | Optional |
| `arriveByReturn` | integer | Optional |
| `from`           | string  | Optional |
| `fromAddress`    | string  | Optional |
| `fromName`       | string  | Optional |
| `fromStationId`  | string  | Optional |
| `leaveAt`        | integer | Optional |
| `leaveAtReturn`  | integer | Optional |
| `mode`           | string  | Optional |
| `to`             | string  | Optional |
| `toAddress`      | string  | Optional |
| `toName`         | string  | Optional |
| `toStationId`    | string  | Optional |

#### arriveBy

POSIX time in milliseconds, https://en.wikipedia.org/wiki/Unix_time

`arriveBy`

- is optional
- type: time

##### arriveBy Type

`integer`

- minimum value: `1451606400`
- maximum value: `9007199254740991`

#### arriveByReturn

POSIX time in milliseconds, https://en.wikipedia.org/wiki/Unix_time

`arriveByReturn`

- is optional
- type: time

##### arriveByReturn Type

`integer`

- minimum value: `1451606400`
- maximum value: `9007199254740991`

#### from

Geographic latitude-longitude number-pair as a string in WGS-84 system, see
https://en.wikipedia.org/wiki/World_Geodetic_System

`from`

- is optional
- type: shortLocationString

##### from Type

`string`

- minimum length: 1 characters
- maximum length: 64 characters All instances must conform to this regular expression (test examples
  [here](<https://regexr.com/?expression=%5E%5B%2B-%5D%3F%5Cd%7B1%2C3%7D(%5C.%5Cd%2B)%3F%2C%5B%2B-%5D%3F%5Cd%7B1%2C3%7D(%5C.%5Cd%2B)%3F%24>)):

```regex
^[+-]?\d{1,3}(\.\d+)?,[+-]?\d{1,3}(\.\d+)?$
```

#### fromAddress

Componentized from address

`fromAddress`

- is optional
- type: componentAddress

##### fromAddress Type

`string`

All instances must conform to this regular expression (test examples
[here](<https://regexr.com/?expression=%5E(%3F%3A(%3F%3A(%3F%3Acountry%3A(%3F%3A%5Cp%7BL%7D%7C%5Cs%7C&#39;)%2B)%7C(%3F%3Astate%3A(%3F%3A%5Cp%7BL%7D%7C%5B%2C%5C.%3A%5C-%60&#39;%C2%B4%5Cs%5D)%2B)%7C(%3F%3Acity%3A(%3F%3A%5Cp%7BL%7D%7C%5B%2C%5C.%3A%5C-%60&#39;%C2%B4%5Cs%5D)%2B)%7C(%3F%3AzipCode%3A(%3F%3A%5Ba-zA-Z0-9%20%5D%7B3%2C10%7D%7C(%3F%3A%5Cp%7BL%7D%7C%5Cd)%7B2%2C4%7D(%5Cs(%3F%3A%5Cp%7BL%7D%7C%5Cd)%7B2%2C4%7D)%3F))%7C(%3F%3AstreetName%3A%5B%5E%7C%5D%2B)%7C(%3F%3AstreetNumber%3A%5Cd%2B))%5C%7C%3F)%7B4%2C6%7D%24>)):

```regex
^(?:(?:(?:country:(?:\p{L}|\s|')+)|(?:state:(?:\p{L}|[,\.:\-`'´\s])+)|(?:city:(?:\p{L}|[,\.:\-`'´\s])+)|(?:zipCode:(?:[a-zA-Z0-9 ]{3,10}|(?:\p{L}|\d){2,4}(\s(?:\p{L}|\d){2,4})?))|(?:streetName:[^|]+)|(?:streetNumber:\d+))\|?){4,6}$
```

#### fromName

Place name (given in autocomplete)

`fromName`

- is optional
- type: placeName

##### fromName Type

`string`

- minimum length: 1 characters

#### fromStationId

`fromStationId`

- is optional
- type: id

##### fromStationId Type

`string`

- minimum length: 1 characters
- maximum length: 64 characters

#### leaveAt

POSIX time in milliseconds, https://en.wikipedia.org/wiki/Unix_time

`leaveAt`

- is optional
- type: time

##### leaveAt Type

`integer`

- minimum value: `1451606400`
- maximum value: `9007199254740991`

#### leaveAtReturn

POSIX time in milliseconds, https://en.wikipedia.org/wiki/Unix_time

`leaveAtReturn`

- is optional
- type: time

##### leaveAtReturn Type

`integer`

- minimum value: `1451606400`
- maximum value: `9007199254740991`

#### mode

`mode`

- is optional
- type: `string`

##### mode Type

`string`

#### to

Geographic latitude-longitude number-pair as a string in WGS-84 system, see
https://en.wikipedia.org/wiki/World_Geodetic_System

`to`

- is optional
- type: shortLocationString

##### to Type

`string`

- minimum length: 1 characters
- maximum length: 64 characters All instances must conform to this regular expression (test examples
  [here](<https://regexr.com/?expression=%5E%5B%2B-%5D%3F%5Cd%7B1%2C3%7D(%5C.%5Cd%2B)%3F%2C%5B%2B-%5D%3F%5Cd%7B1%2C3%7D(%5C.%5Cd%2B)%3F%24>)):

```regex
^[+-]?\d{1,3}(\.\d+)?,[+-]?\d{1,3}(\.\d+)?$
```

#### toAddress

Componentized to address

`toAddress`

- is optional
- type: componentAddress

##### toAddress Type

`string`

All instances must conform to this regular expression (test examples
[here](<https://regexr.com/?expression=%5E(%3F%3A(%3F%3A(%3F%3Acountry%3A(%3F%3A%5Cp%7BL%7D%7C%5Cs%7C&#39;)%2B)%7C(%3F%3Astate%3A(%3F%3A%5Cp%7BL%7D%7C%5B%2C%5C.%3A%5C-%60&#39;%C2%B4%5Cs%5D)%2B)%7C(%3F%3Acity%3A(%3F%3A%5Cp%7BL%7D%7C%5B%2C%5C.%3A%5C-%60&#39;%C2%B4%5Cs%5D)%2B)%7C(%3F%3AzipCode%3A(%3F%3A%5Ba-zA-Z0-9%20%5D%7B3%2C10%7D%7C(%3F%3A%5Cp%7BL%7D%7C%5Cd)%7B2%2C4%7D(%5Cs(%3F%3A%5Cp%7BL%7D%7C%5Cd)%7B2%2C4%7D)%3F))%7C(%3F%3AstreetName%3A%5B%5E%7C%5D%2B)%7C(%3F%3AstreetNumber%3A%5Cd%2B))%5C%7C%3F)%7B4%2C6%7D%24>)):

```regex
^(?:(?:(?:country:(?:\p{L}|\s|')+)|(?:state:(?:\p{L}|[,\.:\-`'´\s])+)|(?:city:(?:\p{L}|[,\.:\-`'´\s])+)|(?:zipCode:(?:[a-zA-Z0-9 ]{3,10}|(?:\p{L}|\d){2,4}(\s(?:\p{L}|\d){2,4})?))|(?:streetName:[^|]+)|(?:streetNumber:\d+))\|?){4,6}$
```

#### toName

Place name (given in autocomplete)

`toName`

- is optional
- type: placeName

##### toName Type

`string`

- minimum length: 1 characters

#### toStationId

`toStationId`

- is optional
- type: id

##### toStationId Type

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
