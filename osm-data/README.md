### Overpass

Extracted from [Overpass API](https://overpass-turbo.eu/index.html)

#### Kyiv

```
[out:json][timeout:300];

relation["name"="Київ"]["admin_level"="4"];

map_to_area;

nwr["amenity"](area)->.amenities;
nwr["craft"](area)->.crafts;
nwr["healthcare"](area)->.healthcare;
nwr["historic"](area)->.historic;
nwr["leisure"](area)->.leisure;
nwr["office"](area)->.offices;
nwr["public_transport"](area)->.transport;
nwr["shop"](area)->.shops;
nwr["tourism"](area)->.tourism;

(.amenities; .crafts; .healthcare; .historic; .leisure; .offices; .transport; .shops; .tourism;);

out geom;
```

#### Lviv

```
[out:json][timeout:300];

relation["name"="Львів"]["admin_level"="9"];

map_to_area;

nwr["amenity"](area)->.amenities;
nwr["craft"](area)->.crafts;
nwr["healthcare"](area)->.healthcare;
nwr["historic"](area)->.historic;
nwr["leisure"](area)->.leisure;
nwr["office"](area)->.offices;
nwr["public_transport"](area)->.transport;
nwr["shop"](area)->.shops;
nwr["tourism"](area)->.tourism;

(.amenities; .crafts; .healthcare; .historic; .leisure; .offices; .transport; .shops; .tourism;);

out geom;
```

### Datasets (kyiv.csv, lviv.csv)

- **type**: GeoJSON feature type (e.g., "Polygon").
- **street**: Street name.
- **amenity**: Public facilities (e.g., restaurant, school).
- **craft**: Craft-related POIs (e.g., shoemaker).
- **healthcare**: Medical facilities (e.g., hospital).
- **historic**: Historical sites (e.g., monument).
- **leisure**: Recreational areas (e.g., park).
- **office**: Office types (e.g., lawyer).
- **public_transport**: Transport infrastructure (e.g., stop_area, bus_stop).
- **shop**: Retail types (e.g., bakery).
- **tourism**: Tourist attractions (e.g., museum).
