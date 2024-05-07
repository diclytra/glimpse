package main

import (
	"fmt"
	"net/http"
)

func World(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hello, World!"))
}

func Hello(w http.ResponseWriter, r *http.Request) {
	name := r.PathValue("name")
	reply := fmt.Sprintf("How are you, %v?\n", name)
	w.Write([]byte(reply))

}
