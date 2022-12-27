# cliente servidor con protocolo TCP

    servidor y un cliente que permiten comunicar información con el siguiente protocolo:

    -El nombre del protocolo es HelloWorld, la idea es utilizar socket tcp (no http), y permitir las siguientes tramas

    -Longitud de trama, codigo de trama,  mensaje, Crc. Donde longitud de trama tiene una longitud de un byte e indica la cantidad de bytes que se van a enviar en la trama,

    - Código de trama puede ser: 1. saludar, 2. Enviar comando 3. despedirse

    - Mensaje puede ser texto libre para el caso de saludar y despedirse y para comando tiene que ser un número del 1 al 3

    - El mensaje de texto libre esta codificado en ASCII

    - Crc es la suma algebraica del resto de bytes