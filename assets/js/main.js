var arrayImgs = ['','TYMAN GROUp','NALIA ORGANICS','BRANSS COQ','TYMAN GROUP','NALIA ORGANICS','BRANSS COQ','TYMAN GROUP','NALIA ORGANICS','BRANSS COQ','TYMAN GROUP','NALIA ORGANICS','BRANSS COQ'];
window.addEventListener('load',function(){
  var dfm = document.createDocumentFragment();
  for (var i = 1; i < arrayImgs.length; i++) {
    dfm.appendChild(crearImgWork("assets/img/img-"+i+".jpg",arrayImgs[i],i));
  }
  document.getElementById('container-work').appendChild(dfm);
});
document.getElementsByClassName('close')[0].addEventListener('click',function(e){
  // document.getElementById('modal').style.display = 'none';
  document.getElementById('modal').classList.toggle('OpenClose');
});
function crearImgWork(url,descripcion,id){
  var figure = document.createElement('figure');
  figure.setAttribute('class','box-work');
  figure.setAttribute('id','img-'+id);
  var img = document.createElement('img');
  img.setAttribute('src',url);
  img.setAttribute('class','img-work');
  img.setAttribute('alt',"name");
  var figcaption = document.createElement('figcaption');
  figcaption.setAttribute('class','text-uppercase text-bold')
  figcaption.innerHTML = descripcion;
  figure.appendChild(img);
  figure.appendChild(figcaption);
  img.addEventListener('click',function(e){
    console.log(e.target);
    var img = document.createElement('img');
    img.setAttribute('src',e.target.getAttribute('src'));
    document.getElementById('modal-img').setAttribute('src',e.target.getAttribute('src'));
    // document.getElementById('modal').style.display = 'block';
    document.getElementById('modal').classList.toggle('OpenClose');
  });
  return figure;
}
