# Crear un script multisig para una address en Cardano


Requisitos
----------

- Instalar Node.js y NPM (https://nodejs.org/en/)

- Instalar "cardano-wallet-js" en nuestro proyecto (https://github.com/tango-crypto/cardano-wallet-js)

`npm install cardano-wallet-js`


Pasos
-----

1) Ejecutar "multisig.js".

2) Enviar ADA a la dirección generada en el paso anterior.

3) Ejecutar "tx-sign.js" con los datos generados en el script del paso 1 para obtener el CBOR de la transacción multisig.

4) Copiar el CBOR completo de la transacción y pegarlo en el campo "cborHex" del archivo "tx.gcstx" (ver "Cómo descargar una transacción desde GameChanger Wallet")

5) Submitir la transacción a la blockchain de Cardano (ver "Cómo importar una transacción desde GameChanger Wallet")


Cómo descargar una transacción desde GameChanger Wallet
-------------------------------------------------------

1) Ir a "Transaction Center"

2) Hacer click en alguna transacción ejecutada exitosamente.

3) Luego, hacer click en "Manage"

4) Hacer click en el botón con el ícono de una flecha para abajo

5) Hacer click en "Download"


Cómo importar una transacción desde GameChanger Wallet
------------------------------------------------------

1) Ir a "Transaction Center"

2) Hacer click en el botón con el ícono de "+"

3) Elegir el archivo con la transacción que queremos ejecutar

4) Hacer click en "Manage"

5) Hacer click en "Submit"

6) Con la opción de "Track Status" podemos monitorear la ejecución de la transacción


Recursos
--------

- Cardano Faucet (para obtener tADA en Testnet): https://testnets.cardano.org/en/testnets/cardano/tools/faucet/
- GameChanger Wallet: https://testnet-wallet.gamechanger.finance/
- Postman: https://www.postman.com/downloads/
- TangoCrypto API (para conocer las UTxOs de una address): https://www.tangocrypto.com/api-reference/#/operations/list-address-utxos
