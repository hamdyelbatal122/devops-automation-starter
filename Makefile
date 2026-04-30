.PHONY: help setup lint test run docker-up docker-down

help:
	@echo "Available commands:"
	@echo "  make setup      - Install app dependencies"
	@echo "  make lint       - Run lint checks"
	@echo "  make test       - Run unit tests"
	@echo "  make run        - Run app locally"
	@echo "  make docker-up  - Start app with docker compose"
	@echo "  make docker-down- Stop docker compose services"

setup:
	cd app && npm install

lint:
	cd app && npm run lint

test:
	cd app && npm test

run:
	cd app && npm start

docker-up:
	docker compose up --build -d

docker-down:
	docker compose down
