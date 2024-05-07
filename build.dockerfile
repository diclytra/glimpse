FROM docker.io/library/alpine:edge AS builder

RUN apk upgrade -U --no-cache
RUN apk add --no-cache go git curl nodejs yarn

RUN git clone https://github.com/anhuret/glimpse.git

WORKDIR glimpse

RUN yarn install
RUN yarn build
RUN mv dist/ server/

WORKDIR server
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -ldflags="-w -s"

FROM scratch

COPY --from=builder /glimpse/server/glimpse /glimpse

EXPOSE 1234
CMD ["/glimpse"]
