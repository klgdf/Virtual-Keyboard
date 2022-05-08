function createImg(url, container) {
  const img = document.createElement('img');
  img.className = 'img';

  img.src = url;
  img.alt = "my cat";
  container.appendChild(img);
}

function createDiv(container) {
  const div = document.createElement('div');
  div.className = 'imposter';

  div.id = "mycat";
  container.appendChild(div);
}

export default {
  createImg,
  createDiv
}