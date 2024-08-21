function customRender(reactElement,Container){
    /*const domElement=document.createElement(reactElement.type);
    domElement.innerHTML= reactElement.children;
   // console.log(domElement.innerHTML);
    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target);
    //console.log(domElement);
    Container.appendChild(domElement)*/

    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML= reactElement.children;
    for (const prop in reactElement.props) {
           if(prop==='children')continue;
           domElement.setAttribute(prop,reactElement.props[prop]);
    }
    Container.appendChild(domElement)
}

const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'click me to visit google'
}

const Container=document.getElementById('#root')

customRender(reactElement,Container);eeeeeeeeed