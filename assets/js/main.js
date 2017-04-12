var arrayImgs = [{url:"assets/img/img-1.jpg", alt:'TYMAN GROUp' },{url:"assets/img/img-2.jpg", alt:'NALIA ORGANICS' },
                 {url:"assets/img/img-3.jpg", alt:'NALIA ORGANICS' },{url:"assets/img/img-4.jpg", alt:'BRANSS COQ' },
                 {url:"assets/img/img-5.jpg", alt:'TYMAN GROUp' },{url:"assets/img/img-6.jpg", alt:'BRANSS COQ' },
                 {url:"assets/img/img-7.jpg", alt:'TYMAN GROUp' },{url:"assets/img/img-8.jpg", alt:'TYMAN GROUp' },
                 {url:"assets/img/img-9.jpg", alt:'TYMAN GROUp' },{url:"assets/img/img-10.jpg", alt:'TYMAN GROUp' },
                 {url:"assets/img/img-11.jpg", alt:'TYMAN GROUp' },{url:"assets/img/img-12.jpg", alt:'TYMAN GROUp' }
               ];
window.addEventListener('load',function(){
  var dfm = document.createDocumentFragment();
  arrayImgs.forEach((e,i)=>dfm.appendChild(crearImgWork(e,i)));
  document.getElementById('container-work').appendChild(dfm);
});
document.getElementsByClassName('close')[0].addEventListener('click',function(e){
  // document.getElementById('modal').style.display = 'none';
  document.getElementById('modal').classList.toggle('OpenClose');
  body.style.overflow = 'scroll';
});
function crearImgWork(elemento,id){
  var figure = document.createElement('figure');
  var img = document.createElement('img');
  var figcaption = document.createElement('figcaption');

  figure.setAttribute('class','box-work');
  figure.setAttribute('id','img-'+id);

  img.setAttribute('src',elemento.url);
  img.setAttribute('class','img-work');
  img.setAttribute('alt',elemento.alt);
  img.addEventListener('click',function(e){
    mostrarModal(e.target.getAttribute('src'));
    // document.getElementById('nextSpan').setAttribute('next-src',e.target.parentNode.nextSibling.firstChild.getAttribute('src'));
  });

  figcaption.setAttribute('class','text-uppercase text-bold')
  figcaption.innerHTML = elemento.alt;
  figure.appendChild(img);
  figure.appendChild(figcaption);
  return figure;
}
function mostrarModal(src){
  document.getElementById('modal-img').setAttribute('src',src);
  // document.getElementById('modal').style.display = 'block';
  document.getElementById('modal').classList.toggle('OpenClose');
  body.style.overflow = 'hidden';
  var spanNext = document.createElement('span');
  // spanNext.setAttribute('next-src',"assets/img/img-"+id+".jpg");
  // figure.appendChild(spanNext);
}
// document.getElementById('nextSpan').addEventListener('click',function(e){
//   // parentNode = e.target.parentNode.nextSibling.firstChild.getAttribute('src');
//   console.log(e.target.getAttribute('next-src'));
//   mostrarModal(e.target.getAttribute('next-src'));
//     document.getElementById('modal').style.display = 'block';
//
// });;
