# Planning
Aplicación de planning de taller automotriz

## Instalación

Para instalar dependencias, ejecutar el siguiente comando:

```bash
npm install
```

## Inicialización

```bash
nodemon index
```

Si aparecen unos errores al ejecutar la api, arreglar las dependencias con el siguiente comando:

```bash
npm audit fix 
```



## Rutas de la API


```bash
http://localhost:3000/     GET --- > Página de inicio de la api
http://localhost:3000/cars    GET --- > Listar todos los autos en el patio
http://localhost:3000/cars   POST --- > Crear nuevo auto
http://localhost:3000/cars/:car_id   PUT --- > Actualizar información de auto
http://localhost:3000/cars/:car_id   DEL --- > Borrar auto
http://localhost:3000/jobs/:plate    GET ---> Ver trabajos de un auto por la placa

```
