# Inventario de vacunación de empleados

Kruger Corporation requiere una aplicación para llevar un registro del inventario del estado de vacunación
de los empleados.

## CRUD

Se creó una aplicación donde se puede llevar el control y reistro de los empleados vacunados y no vacunados de Kruger Corp.

Posee dos vistas o roles una de administrador y una de Empleado

### Administrador

Puede registrar a los empleados con datos como nombres, apellidos, cédula y correo electrónico,
donde todos los campos son requeridos y cada input tiene sus condiciones para ser aceptados.
Puede ver la lista de empleados registrados con todos sus datos en una tabla.
Puede eliminar un registro.
Puede editar un registro.

### Empleado

Puede agregar datos al registro como fecha de nacimiento, dirección de domicilio, Teléfono móvi, Estado de vacunación con las opciones : Vacunado / No Vacunado, Tipo de vacuna, Fecha de vacunación y Número de dosis.
donde todos los campos son requeridos y cada input tiene sus condiciones para ser aceptados.

## Fake API
Para la API Fake se usó json-server y postman y se levantó en el puerto http://localhost:5050/posts
