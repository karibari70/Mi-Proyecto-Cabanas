var express= require('express');
var router= express.Router();

var util = require('util');
var cloudinary= require('cloudinary').v2;
const uploader= util.promisify(cloudinary.uploader.upload);
const destroy= util.promisify(cloudinary.uploader.destroy);

var novedadesModel= require('../../models/novedadesModel');

router.get('/', async function(req, res, next){

    var novedades= await novedadesModel.getNovedades();

    novedades= novedades.map(novedad=>{
        if (novedad.imagen_url) {
            const imagen= cloudinary.image(novedad.imagen_url,{
                width:100,
                height:100,
                crop:'fill'
            });
            return {
                ...novedad,
                imagen
            }
        } else {
            return {
                ...novedad,
                imagen:''
            }
        }
    });

    res.render('admin/novedades',{
        layout:'admin/layout',
        persona: req.session.nombre,novedades
    });
});

router.get('/agregar', (req, res, next)=>{
    res.render('admin/agregar',{
        layout:'admin/layout'
    });
})

router.post('/agregar', async (req, res, next)=>{
    try {
        var imagen_url= '';
        if (req.files && Object.keys(req.files).length > 0) {
            imagen_url= req.files.imagen_url;
            imagen_url= (await uploader(imagen_url.tempFilePath)).public_id;}

        console.log(req.body);
        if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
            await novedadesModel.insertNovedad({
                ...req.body,
                imagen_url
            });
                res.redirect('/admin/novedades')
        } else {
            res.render('admin/agregar',{
                layout:'admin/layout',
                error:true,
                message:'Todos los campos son requeridos'
            })
        }
    
    } catch (error) {
        console.log(error)
        res.render('admin/agregar',{
            layout:'admin/layout',
            error:true,
            message:'No se cargo la promocion'
        })
    }
})

router.get('/eliminar/:id', async (req, res, next)=>{
    
    var id= req.params.id;

    let novedad= await novedadesModel.getNovedadById(id);
    if (novedad.imagen_url) {
        await destroy(novedad.imagen_url);
    }

    await novedadesModel.deleteNovedadById(id);
    res.redirect('/admin/novedades');
});


router.get('/modificar/:id', async (req, res, next)=>{
    var id= req.params.id;
    console.log(req.params.id);
    var novedad= await novedadesModel.getNovedadById(id);
    res.render('admin/modificar',{
        layout:'admin/layout',
        novedad
    });
});

router.post('/modificar', async (req, res, next)=>{
    try {

        let borrar_img_vieja= false;

        if (req.body.img_delete === '1') {
            imagen_url= null;
            borrar_img_vieja= true;
        }
            
        else {
            if (req.files && Object.keys(req.files).length > 0) {
                imagen_url= req.files.imagen_url;
                imagen_url= (await uploader(imagen_url.tempFilePath)).public_id;
                borrar_img_vieja= true;
            }
        }
        if (borrar_img_vieja && req.body.img_original) {
            await destroy(req.body.img_original);
        }


        var obj={
            titulo: req.body.titulo,
            subtitulo: req.body.subtitulo,
            imagen_url,
            cuerpo: req.body.cuerpo
        };

        console.log(obj);
        console.log(req.body.id);
        await novedadesModel.modificarNovedadById(obj, req.body.id);
        res.redirect('/admin/novedades');
    } catch (error) {
        console.log(error);
        res.render('admin/modificar',{
            layout:'admin/layout',
            error:true,
            message:'No se modifico la promoción'
        })
    }
});
module.exports= router;
