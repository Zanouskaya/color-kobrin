import { postsList } from "./modules/post_data.js";

document.getElementById("posts").innerHTML = postsList
  .map(
    (post) =>
      ` <div class='post-card' id=${post.id}>
          <a href=${post.link}>
            <div class='description'>
              <p>Блог</p>
              <h3>${post.name}</h3>
            </div>
            <div class='cover'>
              <img src=${post.image} alt='${post.imageAlt}'>
            </div>
          </a>
        </div>`
  )
  .join("");

document.getElementById("posts").innerHTML = postsList
  .map(
    (post) =>
      ` <div class='post-card' id=${post.id}>
         
            <div class='description'>
              <p>Блог</p>
              <h3>${post.name}</h3>
            </div>
            <div class='cover'>
              <img src=${post.image} alt='${post.imageAlt}'>
            </div>
         
        </div>`
  )
  .join("");
