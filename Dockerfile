FROM docker.io/library/alpine:edge AS builder

RUN apk upgrade -U
RUN apk add go git curl nodejs yarn

RUN git clone https://github.com/anhuret/glimpse.git

WORKDIR glimpse

RUN yarn install
RUN yarn build

RUN GOOS=linux GOARCH=amd64 go build -ldflags="-w -s" server.go

FROM scratch

COPY --from=builder /glimpse/server /

CMD ["/server"]
