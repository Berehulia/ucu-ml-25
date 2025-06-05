# Look-alike ML project

## Python Environment Setup

This section describes how to set up the Python environment for the **Look-alike ML project**.

### 1. Create a Virtual Environment

Choose one of the following options based on your preference:

<details>
<summary><strong>Option A: Using <code>venv</code></strong> (recommended for simplicity)</summary>

```bash
python -m venv loc-look-alike-venv
```

</details>

<details>
<summary><strong>Option B: Using <code>conda</code></strong></summary>

```bash
conda create -n loc-look-alike-venv python=3.11
```

</details>

---

### 2. Activate the Environment

Use the appropriate command depending on your environment tool and OS:

<details>
<summary><strong>venv (Unix/macOS)</strong></summary>

```bash
source loc-look-alike-venv/bin/activate
```

</details>

<details>
<summary><strong>venv (Windows)</strong></summary>

```bash
.\loc-look-alike-venv\Scripts\activate
```

</details>

<details>
<summary><strong>conda</strong></summary>

```bash
conda activate loc-look-alike-venv
```

</details>

---

### 3. Install Poetry

Install Poetry by following the instructions from the official docs:

[https://python-poetry.org/docs/#installation](https://python-poetry.org/docs/#installation)

Or with the recommended install script:

```bash
curl -sSL https://install.python-poetry.org | python3 -
```

Make sure Poetry is available in your terminal:

```bash
poetry --version
```

---

### 4. Install Project Dependencies

Once your environment is activated and Poetry is installed, run:

```bash
poetry install --no-root
```

> The `--no-root` flag ensures that only dependencies are installed, without installing the project package itself.


## PostGIS + OSM Setup Instructions

### 1. Start PostGIS Docker Container

There are two commands available depending on your CPU architecture.

#### For `x86_64` (Intel/AMD) systems:

```bash
make run_postgis_test_db_x86_64
```

#### For `arm64` (e.g., Apple M1/M2) systems:

```bash
make run_postgis_test_db_arm64
```

These commands will:

* Start a PostGIS container with 12 GB RAM and 4 CPUs
* Expose PostgreSQL on port `5432`
* Load SQL initialization scripts from `./scripts/initdb`
* Persist database data to `${HOME}/docker/volumes/postgis`

---

### 2. Restart or Reset PostGIS Instance

#### Restart container without deleting data:

```bash
make up_postgis
```

#### Restart container **and delete all stored data**:

```bash
make up_postgis_rm
```

> ⚠️ Warning: `up_postgis_rm` deletes all data in the mounted volume at `${HOME}/docker/volumes/postgis`.

---

### 3. Import OSM Data to PostGIS

To import OSM data from an `.osm.pbf` file into the running PostGIS instance, run:

```bash
make run_osm2psql
```

This command:

* Imports data from `./data/osm/ukraine-latest.osm.pbf`
* Uses a custom style file from `./data/osm/default.style`
* Stores the data in the `osm` database
* Enables `hstore` and geometry processing (`-G`)
* Uses a 4 GB cache for improved performance

> 🟡 Ensure the PostGIS container is running **before** executing this command.

---

### 4. Verify Data Import

To connect to the PostGIS container and check if data was imported:

```bash
docker exec -it postgis-docker psql -U postgres -d osm
```

Once inside `psql`, you can run queries like:

```sql
\dt                     -- List all tables
SELECT COUNT(*) FROM planet_osm_point;   -- Check number of imported points
SELECT * FROM planet_osm_line LIMIT 5;   -- Preview a few lines
```

> The `planet_osm_point`, `planet_osm_line`, `planet_osm_polygon`, and `planet_osm_roads` tables are typically created by `osm2pgsql`.
