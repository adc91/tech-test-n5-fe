# REACT APP FE

## Implementación local

Si lo desea, la aplicación puede ejecutarse en su entorno local. Para lograrlo siga las siguientes instrucciones:

* Clone el repositorio: `git clone git@github.com:adc91/tech-test-n5-fe.git`
* Ingrese al directorio del proyecto creado en el paso anterior: `cd tech-test-n5-fe/`
* Instale todas las dependencias necesarias para el proyecto: `yarn install` o `npm install`
* Compile el proyecto para su versión de producción: `yarn build` o `npm run build`
* Instale el servidor NPM para ejecutar el proyecto en su entorno local: `yarn global add serve` o `npm install -g serve`
* Levante el servidor NPM con la versión compilada y optimizada del proyecto: `yarn run serve` o `npm run serve`
* Abra [http://localhost:3000](http://localhost:3000) para verlo en su navegador

## Scripts disponibles

En el directorio del proyecto, ejecute:

### `yarn start` o `npm run start`

Ejecuta la aplicación en el modo de desarrollo.\
Abra [http://localhost:3000](http://localhost:3000) para verlo en su navegador.

La página se volverá a cargar cuando realice cambios.\
También puede ver errores en consola.

### `yarn build` o `npm run build`

Construye la aplicación para producción en la carpeta `build`\
Empaqueta correctamente React en modo de producción y crea los archivos optimizados para obtener el mejor rendimiento.

La compilación se minimiza y los nombres de archivo incluyen hashes.\
Una vez completada la ejecución la aplicación estará lista para el ser implementada en producción.

### `yarn test` o `npm run test`

Ejecuta los tests en modo interactivo.
De forma predeterminada, ejecuta pruebas relacionadas con los archivos modificados desde el último commit.

#### `yarn test -- --watchAll=false` o `npm run test -- --watchAll=false`

Ejecuta todos los tests configurados sin el modo interactivo. Utilice esta opción para realizar ejecutar todos los tests.
