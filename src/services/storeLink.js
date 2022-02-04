// listando os links do localStorage
export async function getLinksSave(key){
    const myLinks = await localStorage.getItem(key);
    let linksSaves = JSON.parse(myLinks) || [];
    return linksSaves;
}

// salvando link no localStorage
export async function saveLink(key, newLink){

    let linksStorage = await getLinksSave(key);
    const hasLinks = linksStorage.some(link => link.id === newLink.id);

    if(hasLinks){
        console.log('Este link já existe em sua lista');
        return;
    }

    linksStorage.push(newLink);
    await localStorage.setItem(key, JSON.stringify(linksStorage));
    console.log('Link salvo com sucesso!');
}

// deletando links do localStorage
export function deleteLink(links, id){
    let myLinks = links.filter(item => {
        return (item.id !== id);
    });

    localStorage.setItem('@geradorlinks', JSON.stringify(myLinks));
    console.log('Link deletado com sucesso!');

    return myLinks;
}