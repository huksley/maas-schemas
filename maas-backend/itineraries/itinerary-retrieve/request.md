# request Schema

```
http://maasglobal.com/maas-backend/itineraries/itinerary-retrieve/request.json
```

Request schema for itinerary-retrieve

| Abstract            | Extensible | Status  | Identifiable | Custom Properties | Additional Properties | Defined In                                                               |
| ------------------- | ---------- | ------- | ------------ | ----------------- | --------------------- | ------------------------------------------------------------------------ |
| Can be instantiated | No         | Develop | No           | Forbidden         | Forbidden             | [maas-backend/itineraries/itinerary-retrieve/request.json](request.json) |

## Schema Hierarchy

- request `http://maasglobal.com/maas-backend/itineraries/itinerary-retrieve/request.json`
  - [units](../../../core/components/units.md) `http://maasglobal.com/core/components/units.json`
  - [api-common](../../../core/components/api-common.md) `http://maasglobal.com/core/components/api-common.json`

# request Properties

| Property                      | Type     | Required     | Nullable | Defined by            |
| ----------------------------- | -------- | ------------ | -------- | --------------------- |
| [headers](#headers)           | `object` | Optional     | No       | request (this schema) |
| [itineraryId](#itineraryid)   | `string` | **Required** | No       | request (this schema) |
| [originalFare](#originalfare) | `string` | Optional     | No       | request (this schema) |

## headers

`headers`

- is optional
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

## itineraryId

Universally unique identifier, see https://en.wikipedia.org/wiki/Universally_unique_identifier

`itineraryId`

- is **required**
- type: `string`
- defined in this schema

### itineraryId Type

`string`

All instances must conform to this regular expression

```regex
^[A-Fa-f0-9]{8}(-[A-Fa-f0-9]{4}){3}-[A-Fa-f0-9]{12}$
```

- test example:
  [4828507e-683f-41bf-9d87-689808fbf958](<https://regexr.com/?expression=%5E%5BA-Fa-f0-9%5D%7B8%7D(-%5BA-Fa-f0-9%5D%7B4%7D)%7B3%7D-%5BA-Fa-f0-9%5D%7B12%7D%24&text=4828507e-683f-41bf-9d87-689808fbf958>)

### itineraryId Example

```json
"4828507e-683f-41bf-9d87-689808fbf958"
```

## originalFare

`originalFare`

- is optional
- type: `string`
- defined in this schema

### originalFare Type

`string`
