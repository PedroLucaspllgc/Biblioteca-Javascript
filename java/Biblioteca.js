let lista = []

document.getElementById('butA').addEventListener('click', function() {

    const titulo = document.createElement('input');
    titulo.type = 'text';
    titulo.name = 'fname';
    titulo.placeholder = 'título';
    titulo.id = 'titulo';

    const autor = document.createElement('input');
    autor.type = 'text';
    autor.name = 'fname';
    autor.placeholder = 'autor';
    autor.id = 'autor';

    const ano = document.createElement('input');
    ano.type = 'number';
    ano.name = 'fname';
    ano.placeholder = 'ano de criação';
    ano.id = 'ano';

    const genero = document.createElement('input');
    genero.type = 'text';
    genero.name = 'fname';
    genero.placeholder = 'gênero';
    genero.id = 'genero';

    const confirmar = document.createElement('button');
    confirmar.type = "button";
    confirmar.id = confirmar;
    confirmar.onclick = function(){
        let ti = document.getElementById('titulo').value;
        let au = document.getElementById('autor').value;
        let an = document.getElementById('ano').value;
        let ge = document.getElementById('genero').value;
        lista.push(ti, au, an, ge)
        document.getElementById(ti).value = ''
        document.getElementById(au).value = ''
        document.getElementById(an).value = ''
        document.getElementById(ge).value = ''
    }

    document.getElementById(square).appendChild(titulo);
    document.getElementById(square).appendChild(autor);
    document.getElementById(square).appendChild(ano);
    document.getElementById(square).appendChild(genero);


})

document.getElementById(butR).addEventListener('click', function(){

    document.getElementById(square).innerHTML = ""

    const um = document.createElement('input');
    um.type = 'text';
    um.name = 'fname';
    um.placeholder = 'nome do livro';
    um.id = 'um';

    const qual = document.getElementById('h1');
    qual.innerText = 'qual texto quer excluir?';

    const conf = document.createElement('button');
    conf.type = "button";
    conf.id = conf;
    conf.textContent = confirmar;
    conf.onclick = function() {
        const inf = document.getElementById('um').value;
        if (lista.includes(inf)) {
            num = lista.indexOf(inf)
            lista.splice(num, 4)
            console.log(num,num+4)
            document.getElementById('butR').innerText = 'Livro foi excluído da tabela.'
        }
        else {
            document.getElementById('butR').innerText = 'Livro não foi encontrado.'
        }
    }        
     
    document.getElementById('square').appendChild('um')
    document.getElementById('square').appendChild('conf')
    document.getElementById('square').appendChild('qual')

    document.getElementById('mostrar').addEventListener('click', function(){

        document.getElementById('squar       ').innerHTML = ''
    
        const grid = document.createElement('div');
        grid.className='grid';
        grid.id = 'grid'
        document.getElementById('squar       ').appendChild(grid); 
        let i, len, text;
        for (let i = 0, len = lista.length, text = ''; i < len; i++) {
            let g = document.createElement('div');
            g.className = 'g'+lista[i];
            g.textContent = lista[i];
            document.getElementById('grid').appendChild(g);
         }})


})
