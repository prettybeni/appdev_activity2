const readline = require('readline');
const fs = require('fs');
const http = require('http');

const html = fs.readFileSync('./template/index.html', 'utf-8')

const server = http.createServer((req,res) => {
   let path = req.url;
   
   if(path === '/' || path.toLocaleLowerCase() === '/home'){
    res.writeHead(200);

     const homePage = `
    <h3>This is my homepage</h3>
    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem corporis vel veritatis 
        quod? Iure debitis, ullam vel vitae itaque dolores, exercitationem porro unde repellendus 
        dolorem enim, deserunt aliquam! Inventore nihil doloribus eum, quos quia ab asperiores tenetur
        rem eos ad quaerat. Voluptatem expedita amet possimus obcaecati dolores sed eaque sequi at hic
        doloremque praesentium quo quas, voluptatibus ipsum quam, provident tempora deserunt!
        Suscipit, autem deleniti facere sequi, ratione exercitationem id error voluptate illo 
        quibusdam modi similique ducimus mollitia. Magnam nulla nobis facilis tenetur? Porro officia
        quidem quo,
        ab quae culpa beatae tenetur amet inventore, nihil, magni incidunt illo eum commodi.</p>

`;

    res.end(html.replace('{{%CONTENT%}}', homePage));
   }else if(path.toLocaleLowerCase() === '/about'){
    res.writeHead(200, {
        'Content-Type' : 'text/html',
        'my-header' : 'Hello World'
    });

    const aboutMe = `
    <h3>Personal Information</h3>
    <p>Hobby: I love playing mobile games</p>

`;

    res.end(html.replace('{{%CONTENT%}}', aboutMe))
   }else if(path.toLocaleLowerCase() === '/contact'){
    res.writeHead(200, {
        'Content-Type' : 'text/html',
        'my-header' : 'Hello World'
    });

    const contactInfo = `
        <h3>Contact Information</h3>
        <p>Name: Benedict R. Rudabia</p>
        <p>Email: rodabeni27@gmail.com</p>
        <p>Phone: 09214368167</p>
    `;
    res.end(html.replace('{{%CONTENT%}}', contactInfo))
   }else if(path.toLocaleLowerCase() === '/profile'){
    res.writeHead(200, {
        'Content-Type' : 'text/html',
        'my-header' : 'Hello World'
    });

    const profile = `
        <h3>This is my Profile</h3>
        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem corporis vel veritatis 
        quod? Iure debitis, ullam vel vitae itaque dolores, exercitationem porro unde repellendus 
        dolorem enim, deserunt aliquam! Inventore nihil doloribus eum, quos quia ab asperiores tenetur
        rem eos ad quaerat. Voluptatem expedita amet possimus obcaecati dolores sed eaque sequi at hic
        doloremque praesentium quo quas, voluptatibus ipsum quam, provident tempora deserunt!
        Suscipit, autem deleniti facere sequi, ratione exercitationem id error voluptate illo 
        quibusdam modi similique ducimus mollitia. Magnam nulla nobis facilis tenetur? Porro officia
        quidem quo,
        ab quae culpa beatae tenetur amet inventore, nihil, magni incidunt illo eum commodi.</p>
        
    `;

    res.end(html.replace('{{%CONTENT%}}', profile))
   }
   else if(path.toLocaleLowerCase() === '/favorite'){
    res.writeHead(200, {
        'Content-Type' : 'text/html',
        'my-header' : 'Hello World'
    });

    const favorite = `
        <h3>This is my Favorite</h3>
        <p>Food: Spagetti</p>
        <p>Color: Purple, Maroon</p>
        <p>Songs: Taylor Swift's Song</p>
    `;

    res.end(html.replace('{{%CONTENT%}}', favorite))
   }
   else{
    res.writeHead(404, {
        'Content-Type' : 'text/html',
        'my-header' : 'Hello World'
    });
    res.end(html.replace('{{%CONTENT%}}', 'Page not Found!'))
   }

});

server.listen(3004,'127.0.0.1',() => {
    console.log('Server has started');
});


