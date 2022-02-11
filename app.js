const express =  require('express');
const app = express();
const PORT = 3000;

app.set('views','./view');
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.get('/blog', (req, res) =>{
    res.render('blog');
});

app.get('/contact', (req, res) =>{
    res.render('contact');
});

app.get('/about', (req, res) =>{
    res.render('about');
});

app.get('/barber-shop', (req, res) =>{
    res.render('barber-shop');
});

app.get('/services', (req, res) =>{
    res.render('services');
});

app.get('/', (req, res) =>{
    res.render('acceuil');
});

app.listen(PORT, () =>{
    console.log(`Ecoutez sur le port ${PORT}`);
})