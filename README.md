# UCU ML 2025 Project

This repository contains a collection of tools and data for infering location look-alike for Aurora stores using OpenStreetMap (OSM) data and related geospatial analysis.

## Repository Structure

- `avrora-scraper/`: Web scraping tools for scraping Aurora stores locations
- `osm-data/`: Contains GeoJSON datasets for Kyiv and Lviv extracted from Overpass API, including various POIs (amenities, crafts, healthcare, historic sites, leisure, offices, public transport, shops, and tourism)
- `osm-postgis/`: Docker-based PostGIS environment for importing and analyzing Ukraine's OSM data, with scripts for database initialization, data import using osm2pgsql, and Python tools for spatial analysis. Includes hexagonal grid analysis notebook for store location analysis and geospatial data processing (store points, hexagons, and city boundaries)
- `map-proto/`: Map visualization prototypes with Overpass API queries and extensive geodata for Kyiv and Lviv, including city boundaries, amenity locations, shop locations, and hexagonal grid polygons at different resolutions (H3 levels 7-9). Also includes Aurora store locations in both CSV and GeoJSON formats.

## Features

- **OSM Data Processing**: Tools for extracting and processing OpenStreetMap data
- **PostGIS Integration**: Database schema and tools for spatial data management
- **Data Visualization**: Map prototypes for visualizing geographical data
- **Data Collection**: Web scraping utilities for gathering additional location-based data

## Getting Started
TBD

### Prerequisites
- PostgreSQL with PostGIS extension
- QGIS for data visualization
- Node.js (for web scraping tools)


## Data Sources
- OpenStreetMap data for Kyiv and Lviv regions
- Custom collected POI data
- Web-scraped location data