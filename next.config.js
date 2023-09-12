/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  env: {
    Api_EndPoint: "https://lesp-uat.unileversolutions.com",
    xAPi: "BXElVrdvo1ay5HE3v95ib1TQbHgc4I6faMBWUjuh",
    ratingApi: "https://7b5kb96mk4.execute-api.us-east-1.amazonaws.com",
    market: "ca",
    token: 'eyJraWQiOiIwbEg3V3J3SjgxczA5dW4yanUrQkE1YTdkY0RcL001VjV2TVoyRWd1MkIyND0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIwNjRmYjViOC1mZGEyLTQxYjUtOGVlYS05MzNjZTAxZWFlZWMiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfWWg2NFBlRjdKIiwiY29nbml0bzp1c2VybmFtZSI6IjA2NGZiNWI4LWZkYTItNDFiNS04ZWVhLTkzM2NlMDFlYWVlYyIsIm9yaWdpbl9qdGkiOiI2OGNiZTFkMS1hZTcyLTQxNzMtOTBhYy0yNDVkYjVlYmMxMTgiLCJhdWQiOiJxMDYxaGRzYjlsbjJudTBxYTM0bzQxZTliIiwiZXZlbnRfaWQiOiJhYTI2NzdlOS01OTFlLTQ0OTMtODAyYi1jNTA5ZDFjMTBhM2MiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTY5NDUwNDk1MSwiZXhwIjoxNjk0NTA4NTUxLCJpYXQiOjE2OTQ1MDQ5NTEsImp0aSI6IjdmYTFlNjU4LWFmOGMtNDE0Ny1hZWZhLTg5YWRhZDljNmY5MCIsImVtYWlsIjoiaGFyaWhhcmFuLnJlbmdhcmFqQGxhbmdvb3IubmV0In0.HHYZKGgn5YJ_75JTxITZX54-Bq2UmB60dNDazUS4Gofc17mQCewl1c-Y-BR4nQREy3vZ8PnaVh0f0qR6u79sfr8a1VgtWfNPsgxyw86owo2PKbbexwyp9bBUbVzDrJbsYiIlQ7I4eidPwkO1w01bQW7OTQV4kyCtJph48K8Pds3hXJwJjjbzyGD2FIxBN5ju1387LpFLfvStGbM4U1jyfOpcSGtrUfGw-wsc1cOs_hfhYO8KUx9QskkIqrKEak21mcM40O86ccsTLuR-pWF7BGnPJbPS5hAJfgfi400Av3SsTj1wHWgLa3fze2XHq0YTxR3kAbVjFVaQEOn7E1Gu_A',
    imageURL: "https://assets.unileversolutions.com/v1/",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.cpp.unileversolutions.com",
        port: "",
        pathname: "/i/1000507/600-600-jpeg-90/p5da335lp6z2/1000507.jpeg",
      },
    ],
  },
  images: {
    domains: [
      "assets.cpp.unileversolutions.com",
      "assets.unileversolutions.com",
    ],
  },
};

module.exports = nextConfig;
