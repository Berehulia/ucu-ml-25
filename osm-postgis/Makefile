run_postgis_test_db_x86_64:
	docker run --memory="12g" --cpus="4" --rm --name postgis-docker \
				-e POSTGRES_PASSWORD=postpass -d -p 5432:5432 \
				-v ./scripts/initdb:/docker-entrypoint-initdb.d \
 	 		  -v ${HOME}/docker/volumes/postgis:/var/lib/postgresql/data postgis/postgis:latest

run_postgis_test_db_arm64:
	docker run --memory="12g" --cpus="4" --rm --name postgis-docker \
		    -e POSTGRES_PASSWORD=postpass -d -p 5432:5432 \
		    -v ./scripts/initdb:/docker-entrypoint-initdb.d \
		    -v ${HOME}/docker/volumes/postgis:/var/lib/postgresql/data \
		    imresamu/postgis:14-3.5-alpine

up_postgis:
	docker stop postgis-docker; \
 	make run_postgis_test_db
	
up_postgis_rm:
	docker stop postgis-docker; \
 	rm -rf ${HOME}/docker/volumes/postgis; \
 	make run_postgis_test_db

download_osm_artifacts:
	wget https://download.geofabrik.de/europe/ukraine-latest.osm.pbf -P ./data/osm/ \
	&& wget https://raw.githubusercontent.com/openstreetmap/osm2pgsql/master/default.style -P ./data/osm/

run_osm2psql:
	osm2pgsql --create --slim \
	--database=osm \
	--user=postgres \
	--password \
	--host=localhost \
	--port=5432 \
	--cache 4000 \
	--hstore \
	-G \
	-S ./data/osm/default.style \
	./data/osm/ukraine-latest.osm.pbf

docker_prune:
	docker system prune && docker image prune

poetry_install_deps:
	poetry install --no-root
poetry_clear_cache:
	poetry cache clear . --all -n
poetry_get_lock:
	poetry lock
poetry_update_deps:
	poetry update
poetry_update_self:
	poetry self update
poetry_show_deps:
	poetry show
poetry_show_deps_tree:
	poetry show --tree
poetry_build:
	poetry build

pre_commit_install: .pre-commit-config.yaml
	pre-commit install
pre_commit_run: .pre-commit-config.yaml
	pre-commit run --all-files
pre_commit_rm_hooks:
	pre-commit --uninstall-hooks

nvsmi0:
	watch -n 0.5 nvidia-smi -i 0
