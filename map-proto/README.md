### Overpass Queries

#### Kyiv Boundary

```
[out:json][timeout:60];

relation["name"="Київ"]["place"="city"];

out geom;
```

#### Lviv Boundary

```
[out:json][timeout:60];

relation["name"="Львів"]["place"="city"];

out geom;
```

#### Kyiv Amenities

```
[out:json][timeout:60];

relation["name"="Київ"]["place"="city"];

map_to_area;

(
	node["amenity"](area);
);

out geom;
```

#### Lviv Amenities

```
[out:json][timeout:60];

relation["name"="Львів"]["place"="city"];

map_to_area;

(
	node["amenity"](area);
);

out geom;
```
