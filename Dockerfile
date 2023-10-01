FROM docker.io/library/alpine:edge AS builder

RUN apk upgrade -U --no-cache
RUN apk add --no-cache go git curl nodejs yarn

RUN git clone https://github.com/anhuret/glimpse.git

WORKDIR glimpse

RUN yarn install
RUN yarn build

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -ldflags="-w -s" server.go

FROM scratch

COPY --from=builder /glimpse/server /glimpse

EXPOSE 1234
CMD ["/glimpse"]
