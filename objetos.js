class Empleado{
    codigo;
    nombre;
    apellido;
    correo;
    cargo;
    
    sueldoBruto(){
    let sueldo = 0;
    
    switch (this.cargo) {
    case 'Jefe':
    sueldo = 5000;
    break;
    case 'Analista':
    sueldo = 4000;
    break;
    case 'Programador':
    sueldo = 3000;
    break;
    case 'Soporte':
    sueldo = 2000;
    break;
    case 'Asistente':
    sueldo = 1500;
    break;
    default:
    sueldo = 0;
    break;
    }
    
    return sueldo;
    }
    
    descuento(){
    let sueldo = this.sueldoBruto();
    return (sueldo*12.5)/100;
    }
    
    sueldoNeto(){
    let sueldo = this.sueldoBruto();
    let descuento = this.descuento();
    return sueldo - descuento;
    }
    }
    
    $(document).ready(function(){
    $('#miFormulario').submit(function(e){
    e.preventDefault();
    
    const em1 = new Empleado();
    
    em1.codigo = $('#codigo').val();
    em1.nombre = $('#nombre').val();
    em1.apellido = $('#apellido').val();
    em1.correo = $('#correo').val();
    em1.cargo = $('#cargo').val();
    
    let sueldoBruto = em1.sueldoBruto();
    let descuento = em1.descuento();
    let sueldoNeto = em1.sueldoNeto();
    
    console.log(sueldoBruto,descuento,sueldoNeto);
    })
    
    
    })