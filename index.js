window.addEventListener("load", async function () {
  var response = await fetch("code-test.json");
  var data = await response.json();
  var htmlWrapper = document.querySelector("#main");
  var htmlTemplate = "";
  for (let i of data.articles) {
    htmlTemplate += `<div class="main-wrapper">
	  <div class="content-wrapper">
	  <div class="primary-section-route-name">${
      i.primarySectionRouteName || ""
    }</div>
	<div class="headline"><a href="${i.link || ""}">${i.headline || ""}</a>
	    <div class="stand-first">${i.standfirst || ""}</div>
	    </div>
	  </div>
	  <div class="image-wrapper">
		<div>
		  <img width="${i.thumbnail ? i.thumbnail.width + "px" : "200"}" height="${
      i.thumbnail ? i.thumbnail.height + "px" : "200"
    }" title="${i.thumbnail ? i.thumbnail.title : ""}"
			src="${
        i.thumbnail
          ? i.thumbnail.src
          : "https://content.api.news/v3/images/bin/7fb8522d275a99adfaa6e642ea23fa83?width=316"
      }"
			alt=""
			srcset=""
		  />
		</div>
	  </div>
	</div>`;
  }

  htmlWrapper.innerHTML = htmlTemplate;
});
