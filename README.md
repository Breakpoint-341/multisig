# Crear un script multisig para una address en Cardano

Requisitos
----------

- Instalar Node.js y NPM (https://nodejs.org/en/)

- Instalar "cardano-wallet-js" en nuestro proyecto:

`npm install cardano-wallet-js`

Pasos
-----

1) Ejecutar "multisig.js".

2) Enviar ADA a la dirección generada en el paso anterior.

3) Ejecutar "tx-sign.js" con los datos generados en el script del paso 1 para obtener el CBOR de la transacción multisig.

4) Submitir la transacción a la blockchain de Cardano.

Recursos
--------

- Librería base utilizada: https://github.com/tango-crypto/cardano-wallet-js
