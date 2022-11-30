prompt ("ingrese su nombre")

let comentarios = 30
prompt ("ingrese comentario hasta 30 caracteres")

for (let i = 0; 1 < comentarios.length; i++)
     console.log(comentarios[i])

if (comentarios <= 30) {
     console.log("ingreso la cantidad de caracteres correcta")
}

else {
    alert("exediste la cantidad de caracteres disponibles")
}

saludarALosUsuarios("Facundo")
alert('bienvenido ${nombre}')