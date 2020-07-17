# API LOGIN (JWT)

### Esta es una API de login usando JWT.

## ENDPOINT : 

| POINT           | HTTP   | COMENTARIO                                                                         |
| --------------- | ------ | ---------------------------------------------------------------------------------- |
| /api/user/      | GET    | Este te muestra todos los usuarios.                                                | //Uso propio de Dessarrollo |
| /api/user/      | GET    | Este te devuelve tu usuario propio, en la cabecera debes de pasarle el token.      |
| /api/user/      | POST   | Este crea un usuario.                                                              |
| /api/user/      | PUT    | Este actualiza un usuario en especifico, en la cabecera debes de pasarle el token. |
| /api/user/      | DELETE | Elimina un usuario en especifico , en la cabecera debes de pasarle el token.       |
| /api/auth/      | GET    | Este te muestra todos los usuarios que estan authenticados.                        | //Uso propio de Dessarrollo |
| /api/auth/login | POST   | Este te devuelve el token cuando haces el logueo exitoso.                          |

## ESPECIFICACIONES :

### USUARIO : 

> #### GET/ :
>>####  Este te muestra todos los usuarios. 
>>##### URL : http://localhost:4000/api/user 

> #### GET/ + TOKEN :
>>#### Este te devuelve tu usuario propio, en la cabecera debes de pasarle el token.
>>##### URL : http://localhost:4000/api/user
>>##### Header: token

> #### POST/ :
>>#### Este crea un usuario.
>>##### URL : http://localhost:4000/api/user

> #### PUT/ + TOKEN :
>>#### Este actualiza un usuario en especifico, en la cabecera debes de pasarle el token.
>>##### URL : http://localhost:4000/api/user
>>##### Header: token

> #### DELETE/ + TOKEN :
>>#### Elimina un usuario en especifico , en la cabecera debes de pasarle el token.
>>##### URL : http://localhost:4000/api/user
>>##### Header: token


### AUTH : 


> #### GET/ :
>>####  Este te muestra todos los usuarios authrntificados. 
>>##### URL : http://localhost:4000/api/auth 

> #### POST/ + TOKEN :
>>#### Este te devuelve el token cuando haces el logueo exitoso.        
>>##### URL : http://localhost:4000/api/auth
>>##### Header: token


# Author : 

[ David Prada Linarez ](https://www.facebook.com/profile.php?id=100008192493464)

@davichois