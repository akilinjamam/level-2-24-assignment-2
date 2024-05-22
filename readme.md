# I have completed assignment-2 as my best way.

## 1. some instraction:

### if you want to update product give full json data

## 2. if you want to update only primitive data. dont need to update full json data. just type like this below

```
{"price": 500}

```

## 3. if you want to update non primitive data like only array. give updatable data like below:

```
{
"tags": ["iPhone"],
"newTag" "iPhone inc" // new data which will be update
}

```

## 4. if you want to update only nested array of object like variants field type like below code:

```
{

"variants": [
                {
                    "type": "Color",
                    "value": "Graphite"
                },
                {
                    "type": "Storage",
                    "value": "512GB"  // new updatable data
                }
            ],
}

```

## if you want to update only nested object like inventory field, give like below code:

```
{
"inventory": {"quantity": 40}
}
```
