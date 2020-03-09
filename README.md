# NodeJS TypeScript Starter
===

The main purpose of this repository is to show to show an example project setup and workflow for writing **Node** in typescript and docker.

**contributions and recommendations for improvements are encouraged and will be most welcome.**



## Requirements
- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/get-started)


## Getting started

- Clone the repo
    - HTTPS 
        ```
        git clone http://tfs.888holdings.corp:8080/tfs/DefaultCollection_2010/Architecture/_git/typescript-node-starter <project_name>
        ```

    - SSH
        ```
        git clone ssh://tfs.888holdings.corp:22/tfs/DefaultCollection_2010/Architecture/_git/typescript-node-starter <project_name>
        ```

- Install dependencies
    ```
    cd <project_name>
    npm install
    ```

- Start dev environment if you already used this command before please check that worker-node conatiner is down. if you need to work with anothr project change worker-node name is docker-compse.yml file.
    ```
    npm run docker:start
    ```

- Access your worker node container in case you changed the service name please change also in packge.json
    ```
    npm run docker:bash
    ```

    - All this commands will work only if you are inside your conatiner. Run your code in watch mode ( please check that you are inside the conatiner first ) no debuuger here
        ```
        npm run watch:nodebug
        ```
        in case you want to work with the debbuger use this command and attach visual studio code to the docker
        ```
        npm run watch:debug
        ```

- Run your tests ( you should open a new cmd/bash window for that )
    ```
    npm run docker:test
    ```


Generte SelfSigend Cert:

```
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/apache-selfsigned.key -out /etc/ssl/certs/apache-selfsigned.crt
```

You will be asked a series of questions. Before we go over that, let’s take a look at what is happening in the command we are issuing:

- [openssl]: This is the basic command line tool for creating and managing OpenSSL certificates, keys, and other files.
- [req]: This subcommand specifies that we want to use X.509 certificate signing request (CSR) management. The “X.509” is a public key infrastructure standard that SSL and TLS adheres to for its key and certificate management. We want to create a new X.509 cert, so we are using this subcommand.
- [x509]: This further modifies the previous subcommand by telling the utility that we want to make a self-signed certificate instead of generating a certificate signing request, as would normally happen.
- [nodes]: This tells OpenSSL to skip the option to secure our certificate with a passphrase. We need Apache to be able to read the file, without user intervention, when the server starts up. A passphrase would prevent this from happening because we would have to enter it after every restart.
- [days 365]: This option sets the length of time that the certificate will be considered valid. We set it for one year here.
- [newkey rsa:2048]: This specifies that we want to generate a new certificate and a new key at the same time. We did not create the key that is required to sign the certificate in a previous step, so we need to create it along with the certificate. The rsa:2048 portion tells it to make an RSA key that is 2048 bits long.
- [keyout]: This line tells OpenSSL where to place the generated private key file that we are creating.
- [out]: This tells OpenSSL where to place the certificate that we are creating.

reffer to : https://flaviocopes.com/express-https-self-signed-certificate/


##Enjoy your Develop


