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
