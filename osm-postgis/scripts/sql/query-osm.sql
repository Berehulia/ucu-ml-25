SELECT way FROM planet_osm_line where waterway = 'river';

SELECT way FROM planet_osm_polygon WHERE building IS NOT null limit 1;

SELECT ST_Transform(way, 4326) as way
FROM planet_osm_polygon t
WHERE t.natural = 'water';

select distinct highway from planet_osm_line;
select distinct building from planet_osm_line;
select distinct amenity from planet_osm_line;
select distinct construction from planet_osm_line;
select distinct railway from planet_osm_line;
select distinct landuse from planet_osm_line;
select distinct leisure from planet_osm_line;
select distinct tourism from planet_osm_line;