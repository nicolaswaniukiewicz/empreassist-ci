# EmpreAssist - Módulo de stock y pedidos

EmpreAssist es una plataforma simple para la gestión de pequeños negocios que venden productos. Este repositorio contiene una implementación inicial del módulo funcional de **stock y pedidos a proveedores**, utilizado para la Actividad #8 de Integración Continua.

## Módulo trabajado

El módulo permite validar productos, controlar niveles de stock, detectar productos con bajo stock, calcular totales de pedidos, generar mensajes de reposición y verificar permisos básicos de usuario para la carga de información.

## Requisitos

- Node.js 20 o superior
- npm 10 o superior
- Git

## Clonar el proyecto

git clone https://github.com/nicolaswaniukiewicz/empreassist-ci.git
cd empreassist-ci
npm install


## Ejecutar pruebas unitarias
npm test

## Ejecutar linter
npm run lint

## Compilar / verificar build
npm run build

## Integración continua

El proyecto usa GitHub Actions como herramienta de integración continua. El archivo de configuración se encuentra en:
.github/workflows/ci.yml

El pipeline se ejecuta automáticamente cuando se realiza un `push` o un `pull request` hacia las ramas `main` o `develop`.

### Pasos automatizados

1. Descarga el código del repositorio.
2. Configura Node.js 20.
3. Instala dependencias con `npm ci`.
4. Ejecuta el linter con `npm run lint`.
5. Ejecuta las pruebas unitarias con `npm test`.
6. Ejecuta la compilación/verificación TypeScript con `npm run build`.
7. Informa si el pipeline finalizó correctamente o con errores.

## Estrategia de ramas

* `main`: rama principal estable.
* `develop`: rama de integración previa a main.
* `dev/usui-stock`: desarrollo de lógica de stock.
* `dev/stupniki-tests`: pruebas unitarias.
* `dev/tarnowski-ui`: integración de interfaz.
* `dev/waniukiewicz-ci`: configuración de CI, linter y documentación técnica.

## Pruebas unitarias incluidas

El proyecto incluye seis pruebas unitarias sobre el módulo de stock y pedidos:

1. Valida que un producto con datos correctos sea aceptado.
2. Rechaza productos con precio negativo.
3. Detecta bajo stock cuando la cantidad actual es menor o igual al mínimo.
4. Calcula correctamente el total de un pedido.
5. Verifica permisos de un encargado para cargar stock.
6. Genera un mensaje de reposición con productos faltantes.

## Funcionamiento de la integración continua

Cada vez que un integrante sube cambios al repositorio o crea un pull request, GitHub Actions ejecuta automáticamente el pipeline. Si el código no compila, si un test falla o si el linter detecta errores de estilo o sintaxis, el pipeline queda en estado fallido. Esto permite detectar problemas antes de integrar cambios a la rama principal.

## Simulación de errores

Para cumplir con la actividad, se simularon errores comunes dentro del proceso de integración continua:

* Un test fallido dentro del módulo de stock.
* Un error de sintaxis o estilo detectado por el pipeline.

Luego de detectar los errores, se corrigieron los archivos afectados y se volvió a ejecutar el pipeline hasta obtener un estado exitoso.

## Enlaces del proyecto

* Repositorio: https://github.com/nicolaswaniukiewicz/empreassist-ci
* Archivo de configuración CI: https://github.com/nicolaswaniukiewicz/empreassist-ci/blob/main/.github/workflows/ci.yml
* Pipeline CI: https://github.com/nicolaswaniukiewicz/empreassist-ci/actions
* Herramienta de gestión del TIF / backlog: https://trello.com/b/RhDKbxrE/empreassist
