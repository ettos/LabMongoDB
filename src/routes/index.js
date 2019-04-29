const express=require('express');
const router=express.Router();

const Vehiculo=require('../models/Vehiculo');
const Usuario=require('../models/Usuario');

router.get('/', (req,res)=> {
    res.render('index');
});

//Gestion de Vehiculos
router.get('/RegistrarVehiculos', async (req,res)=> {
    const Vehiculos=await Vehiculo.find();
    res.render('RegistrarVehiculo', {
        Vehiculos
    });
});

router.post('/RegistrarVehiculos', async (req,res)=> {
    const Vehiculos=await Vehiculo.find();
    res.render('RegistrarVehiculo', {
        Vehiculos
    });
});

router.post('/AgregarVehiculo',async (req,res)=> {
    const newVehiculo=new Vehiculo(req.body);
    await newVehiculo.save();
    res.redirect('/RegistrarVehiculos');
});

router.get('/eliminarVehiculo/:id', async (req,res)=>{
    const {id}=req.params;
    await Vehiculo.remove({_id:id});
    res.redirect('/RegistrarVehiculos');
})

router.get('/editarVehiculo/:id', async (req,res)=>{
    const {id}=req.params;
    const selectVehiculo=await Vehiculo.findById({_id:id});
    res.render('editarVehiculo', {
        selectVehiculo
    });
})

router.post('/editarVehiculo/:id', async (req,res)=>{
    const {id}=req.params;
    await Vehiculo.update({_id:id},req.body);
    res.redirect('/RegistrarVehiculos');
});


// Fin Gestion de Vehiculos




//Gestion de Usuarios

router.get('/RegistrarUsuarios', async (req,res)=> {
    const Usuarios=await Usuario.find();
    res.render('RegistrarUsuario', {
        Usuarios
    });
});

router.post('/RegistrarUsuarios', async (req,res)=> {
    const Usuarios=await Usuario.find();
    res.render('RegistrarUsuario', {
        Usuarios
    });
});

router.post('/AgregarUsuario',async (req,res)=> {
    const newUsuario=new Usuario(req.body);
    await newUsuario.save();
    res.redirect('/RegistrarUsuarios');
});

router.get('/eliminarUsuario/:id', async (req,res)=>{
    const {id}=req.params;
    await Usuario.remove({_id:id});
    res.redirect('/RegistrarUsuarios');
})

router.get('/editarUsuario/:id', async (req,res)=>{
    const {id}=req.params;
    const selectUsuario=await Usuario.findById({_id:id});
    res.render('editarUsuario', {
        selectUsuario
    });
})

router.post('/editarUsuario/:id', async (req,res)=>{
    const {id}=req.params;
    await Usuario.update({_id:id},req.body);
    res.redirect('/RegistrarUsuarios');
});

//Fin Gestion de Usuarios




//Consulta de Vechiculos

router.get('/ConsultarVehiculos', async (req,res)=> {
    const Vehiculos=await Vehiculo.find();
    res.render('ConsultaVehiculos', {
        Vehiculos
    });
});

router.post('/ConsultarVehiculos', async (req,res)=> {
    const Vehiculos=await Vehiculo.find();
    res.render('ConsultaVehiculos', {
        Vehiculos
    });
});

router.post('/BuscarVehiculo', async (req,res)=>{
    const busqueda=req.body;
    console.log(busqueda.iPlaca);
    if (busqueda.iPlaca!=""){
        const Vehiculos=await Vehiculo.find({placa:busqueda.iPlaca, });
        res.render('ConsultaVehiculos', {
        Vehiculos
        });
    }
    res.redirect('/ConsultarVehiculos');

});


//Fin Consulta de Vechiculos





module.exports=router