APPLICATION := oscal-viewer

# serve frontend locally (only for development)
.PHONY: run
run:
	@echo "[run] $(APPLICATION)"
	npm start