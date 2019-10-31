# request Schema

```
http://maasglobal.com/maas-backend/customers/retrieve/request.json
```

MaaS customer retrieve

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                   |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------------------ |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/customers/retrieve/request.json](request.json) |

## Schema Hierarchy

- request `http://maasglobal.com/maas-backend/customers/retrieve/request.json`
  - [units](../../../core/components/units.md) `http://maasglobal.com/core/components/units.json`
  - [api-common](../../../core/components/api-common.md) `http://maasglobal.com/core/components/api-common.json`

# request Properties

| Property                  | Type     | Required     | Nullable | Defined by            |
| ------------------------- | -------- | ------------ | -------- | --------------------- |
| [customerId](#customerid) | complex  | **Required** | No       | request (this schema) |
| [headers](#headers)       | `object` | **Required** | No       | request (this schema) |
| [identityId](#identityid) | complex  | **Required** | No       | request (this schema) |

## customerId

`customerId`

- is **required**
- type: complex
- defined in this schema

### customerId Type

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

## headers

`headers`

- is **required**
- type: `object`
- defined in this schema

### headers Type

`object` with following properties:

| Property            | Type | Required |
| ------------------- | ---- | -------- |
| `Accept`            |      | Optional |
| `X-Whim-User-Agent` |      | Optional |

#### Accept

`Accept`

- is optional
- type: acceptHeader

##### Accept Type

- [acceptHeader](api-common.md) – `#/definitions/acceptHeader`

#### X-Whim-User-Agent

`X-Whim-User-Agent`

- is optional
- type: userAgentHeader

##### X-Whim-User-Agent Type

- [userAgentHeader](api-common.md) – `#/definitions/userAgentHeader`

## identityId

`identityId`

- is **required**
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
