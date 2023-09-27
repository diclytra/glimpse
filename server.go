package main

import (
	"embed"
	"fmt"
	"io/fs"
	"log"
	"net/http"
	"os"
)

//go:embed dist
var dist embed.FS

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "1234"
	}

	publicFS, err := fs.Sub(dist, "dist")
	if err != nil {
		log.Fatal(err)
	}

	http.Handle("/", http.FileServer(http.FS(publicFS)))
	log.Printf("Listening on :%s...\n", port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%s", port), nil))
}
