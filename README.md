# Gift List

To get started with the repository, clone it and then run `npm install` in the top-level directory to install the depedencies.

There are three folders in this repository:

## Client

You can run the client from the top-level directory with `node client/index`. This file is a script which will send an HTTP request to the server.

Think of the client as the _prover_ here. It needs to prove to the server that some `name` is in the `MERKLE_ROOT` on the server. 

## Server

You can run the server from the top-level directory with `node server/index`. This file is an express server which will be hosted on port 1225 and respond to the client's request.

Think of the server as the _verifier_ here. It needs to verify that the `name` passed by the client is in the `MERKLE_ROOT`. If it is, then we can send the gift! 

## Utils

There are a few files in utils:

- The `niceList.json` which contains all the names of the people who deserve a gift this year (this is randomly generated, feel free to add yourself and others to this list!)
- The `example.js` script shows how we can generate a root, generate a proof and verify that some value is in the root using the proof. Try it out from the top-level folder with `node/example.js`
- The `MerkleTree.js` should look familiar from the Merkle Tree module! This one has been modified so you should not have to deal with any crypto type conversion. You can import this in your client/server
- The `verifyProof.js` should also look familiar. This was the last stage in the module. You can use this function to prove a name is in the merkle root, as show in the example.

# In Spanish


# Lista de Regalos

Para comenzar con el repositorio, clónalo y luego ejecuta `npm install` en el directorio principal para instalar las dependencias.

Hay tres carpetas en este repositorio:

## Cliente

Puedes ejecutar el cliente desde el directorio principal con `node client/index`. Este archivo es un script que enviará una solicitud HTTP al servidor.

Piensa en el cliente como el _probador_ aquí. Necesita demostrarle al servidor que algún `nombre` está en el `MERKLE_ROOT` en el servidor.

## Servidor

Puedes ejecutar el servidor desde el directorio principal con `node server/index`. Este archivo es un servidor de express que estará alojado en el puerto 1225 y responderá a la solicitud del cliente.

Piensa en el servidor como el _verificador_ aquí. Necesita verificar que el `nombre` pasado por el cliente esté en el `MERKLE_ROOT`. Si lo está, ¡entonces podemos enviar el regalo!

## Utils (Utilidades)

Hay algunos archivos en la carpeta utils:

- El archivo `niceList.json` contiene todos los nombres de las personas que merecen un regalo este año (esto se genera aleatoriamente, ¡siéntete libre de agregarte a ti mismo y a otros a esta lista!)
- El script `example.js` muestra cómo podemos generar una raíz, generar una prueba y verificar que algún valor está en la raíz usando la prueba. Pruébalo desde la carpeta principal con `node example.js`.
- El archivo `MerkleTree.js` debería resultarte familiar del módulo de Árbol Merkle. Este ha sido modificado, por lo que no deberías tener que lidiar con conversiones criptográficas. Puedes importarlo en tu cliente/servidor.
- El archivo `verifyProof.js` también debería resultarte familiar. Este fue el último paso en el módulo. Puedes usar esta función para demostrar que un nombre está en la raíz de Merkle, como se muestra en el ejemplo.

