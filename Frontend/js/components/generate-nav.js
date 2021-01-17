$(function () {
    var bar = '';
    bar +=' <nav class="navbar">'
    bar +='<ul class="navbar-nav">'
    bar +='    <li class="logo">'
    bar +='        <a href="index.html" class="nav-link">'
    bar +='            <svg class="svg-icon" viewBox="0 0 20 20">'
    bar +='                <path d="M18.092,5.137l-3.977-1.466h-0.006c0.084,0.042-0.123-0.08-0.283,0H13.82L10,5.079L6.178,3.671H6.172c0.076,0.038-0.114-0.076-0.285,0H5.884L1.908,5.137c-0.151,0.062-0.25,0.207-0.25,0.369v10.451c0,0.691,0.879,0.244,0.545,0.369l3.829-1.406l3.821,1.406c0.186,0.062,0.385-0.029,0.294,0l3.822-1.406l3.83,1.406c0.26,0.1,0.543-0.08,0.543-0.369V5.506C18.342,5.344,18.242,5.199,18.092,5.137 M5.633,14.221l-3.181,1.15V5.776l3.181-1.15V14.221z M9.602,15.371l-3.173-1.15V4.626l3.173,1.15V15.371z M13.57,14.221l-3.173,1.15V5.776l3.173-1.15V14.221z M17.547,15.371l-3.182-1.15V4.626l3.182,1.15V15.371z"></path>'
    bar +='            </svg>'
    bar +='            <span class="link-text">Електронна библиотека</span>'
    bar +='        </a>'
    bar +='    </li>'
    bar +='            <li class="nav-item">'
    bar +='        <a href="index.html" class="nav-link">'
    bar +='            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"  viewBox="0 0 330.34 330.34" style="enable-background:new 0 0 330.34 330.34;" xml:space="preserve">'
    bar +='                <g>'                        
    bar +='                    <path d="M306.756,165.93c-1.54-4.211-6.201-6.371-10.389-4.826L220.482,188.9l61.341-61.293c1.519-1.511,2.367-3.576,2.367-5.729    c0-2.144-0.849-4.206-2.367-5.73l-47.45-47.477c-3.164-3.164-8.29-3.164-11.454,0l-60.162,60.12l33.742-80.04    c0.833-1.98,0.844-4.211,0.042-6.199c-0.812-1.988-2.378-3.575-4.361-4.406l-61.844-26.077c-4.127-1.759-8.878,0.201-10.613,4.316    L86.4,95.434V11.27c0-4.472-3.628-8.1-8.1-8.1H8.1c-4.472,0-8.1,3.628-8.1,8.1V319.07c0,4.472,3.628,8.1,8.1,8.1h70.2    c0.989,0,1.928-0.206,2.803-0.527c0.876,0.316,1.788,0.527,2.737,0.527c0.931,0,1.869-0.158,2.787-0.496l238.396-87.338    c4.197-1.54,6.359-6.191,4.819-10.389L306.756,165.93z M47.883,310.97H16.2v-13.362v-8.786v-6.012v-20.846V19.37h54v114.491    v20.849v20.854v45.727v11.443v11.222v0.232v50.182v8.427v2.579v0.453v5.142h-1.464h-4.854H47.883z M178.427,49.924    l-46.045,109.224l-8.343,19.786l-8.345,19.786l-14.244,33.786l-8.604,20.403L86.4,268.218v-12.946v-17.249v-10.024v-11.454    v-11.443v-67.962l45.106-106.99L178.427,49.924z M113.643,245.289l8.604-20.402l23.828-56.526l82.561-82.506l36.002,36.018    l-80.335,80.286l-27.253,27.231L93.63,292.766L113.643,245.289z M107.552,301.757l85.672-85.614l101.108-37.04l17.513,47.809    L107.552,301.757z"/>'
    bar +='                    <path d="M43.2,277.668c-0.356,0-0.691,0.079-1.036,0.101c-3.035,0.274-5.719,1.672-7.642,3.817    c-1.268,1.414-2.204,3.133-2.668,5.042c-0.211,0.886-0.356,1.793-0.356,2.742c0,2.573,0.854,4.925,2.257,6.855    c2.127,2.921,5.55,4.841,9.445,4.841c0.566,0,1.107-0.084,1.653-0.169c2.336-0.332,4.442-1.345,6.117-2.848    c0.809-0.728,1.523-1.55,2.106-2.479c0.96-1.519,1.545-3.28,1.711-5.168c0.032-0.348,0.103-0.686,0.103-1.039    C54.902,282.904,49.663,277.668,43.2,277.668z"/>'
    bar +='                </g>   '             
    bar +='                </svg>'
    bar +='            <span class="link-text">Начало</span>'
    bar +='        </a>'
    bar +='    </li>'
    bar +='    <li class="nav-item">'
    bar +='        <a href="catalogue.html" class="nav-link">'
    bar +='            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"  viewBox="0 0 330.34 330.34" style="enable-background:new 0 0 330.34 330.34;" xml:space="preserve">'
    bar +='                <g>'                        
    bar +='                    <path d="M306.756,165.93c-1.54-4.211-6.201-6.371-10.389-4.826L220.482,188.9l61.341-61.293c1.519-1.511,2.367-3.576,2.367-5.729    c0-2.144-0.849-4.206-2.367-5.73l-47.45-47.477c-3.164-3.164-8.29-3.164-11.454,0l-60.162,60.12l33.742-80.04    c0.833-1.98,0.844-4.211,0.042-6.199c-0.812-1.988-2.378-3.575-4.361-4.406l-61.844-26.077c-4.127-1.759-8.878,0.201-10.613,4.316    L86.4,95.434V11.27c0-4.472-3.628-8.1-8.1-8.1H8.1c-4.472,0-8.1,3.628-8.1,8.1V319.07c0,4.472,3.628,8.1,8.1,8.1h70.2    c0.989,0,1.928-0.206,2.803-0.527c0.876,0.316,1.788,0.527,2.737,0.527c0.931,0,1.869-0.158,2.787-0.496l238.396-87.338    c4.197-1.54,6.359-6.191,4.819-10.389L306.756,165.93z M47.883,310.97H16.2v-13.362v-8.786v-6.012v-20.846V19.37h54v114.491    v20.849v20.854v45.727v11.443v11.222v0.232v50.182v8.427v2.579v0.453v5.142h-1.464h-4.854H47.883z M178.427,49.924    l-46.045,109.224l-8.343,19.786l-8.345,19.786l-14.244,33.786l-8.604,20.403L86.4,268.218v-12.946v-17.249v-10.024v-11.454    v-11.443v-67.962l45.106-106.99L178.427,49.924z M113.643,245.289l8.604-20.402l23.828-56.526l82.561-82.506l36.002,36.018    l-80.335,80.286l-27.253,27.231L93.63,292.766L113.643,245.289z M107.552,301.757l85.672-85.614l101.108-37.04l17.513,47.809    L107.552,301.757z"/>'
    bar +='                    <path d="M43.2,277.668c-0.356,0-0.691,0.079-1.036,0.101c-3.035,0.274-5.719,1.672-7.642,3.817    c-1.268,1.414-2.204,3.133-2.668,5.042c-0.211,0.886-0.356,1.793-0.356,2.742c0,2.573,0.854,4.925,2.257,6.855    c2.127,2.921,5.55,4.841,9.445,4.841c0.566,0,1.107-0.084,1.653-0.169c2.336-0.332,4.442-1.345,6.117-2.848    c0.809-0.728,1.523-1.55,2.106-2.479c0.96-1.519,1.545-3.28,1.711-5.168c0.032-0.348,0.103-0.686,0.103-1.039    C54.902,282.904,49.663,277.668,43.2,277.668z"/>'
    bar +='                </g>   '             
    bar +='                </svg>'
    bar +='            <span class="link-text">Каталог</span>'
    bar +='        </a>'
    bar +='    </li>'
    bar +='    <li class="nav-item">'
    bar +='        <a href="bulgarianBooks.html" class="nav-link">'
    bar +='            <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" enable-background="new 0 0 512 512" viewBox="0 0 512 512">'
    bar +='                <g>'
    bar +='                    <path d="m436 452c8.284 0 15-6.716 15-15v-390c0-8.284-6.716-15-15-15h-141.957c-10.077-19.013-30.068-32-53.043-32h-45c-8.284 0-15 6.716-15 15v17h-75c-24.813 0-45 20.187-45 45v390c0 24.813 20.187 45 45 45h330c8.284 0 15-6.716 15-15s-6.716-15-15-15h-15v-30zm-15-30h-128.072c5.123-8.833 8.072-19.075 8.072-30v-30h75c8.284 0 15-6.716 15-15s-6.716-15-15-15h-75v-30h75c8.284 0 15-6.716 15-15s-6.716-15-15-15h-75v-30h75c8.284 0 15-6.716 15-15s-6.716-15-15-15h-75v-30h75c8.284 0 15-6.716 15-15v-60c0-8.284-6.716-15-15-15h-75v-30h120zm-120-300h60v30h-60zm-90-92h30c18.946 0 30 16.296 30 30v280.072c-8.833-5.123-19.075-8.072-30-8.072h-30zm-105 32h75v285c0 8.284 6.716 15 15 15h45c16.542 0 30 13.458 30 30s-13.458 30-30 30h-135c-5.258 0-10.305.915-15 2.58v-347.58c0-8.271 6.729-15 15-15zm285 420h-285c-8.271 0-15-6.729-15-15s6.729-15 15-15h285z"/>'
    bar +='                </g>'
    bar +='            </svg>'
    bar +='            <span class="link-text">Български книги</span>'
    bar +='        </a>'
    bar +='    </li>'
    bar +='    <li class="nav-item">'
    bar +='        <a href="foreignBooks.html" class="nav-link">'
    bar +='            <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" enable-background="new 0 0 512 512" viewBox="0 0 512 512">'
    bar +='                <g>'
    bar +='                    <path d="m436 452c8.284 0 15-6.716 15-15v-390c0-8.284-6.716-15-15-15h-141.957c-10.077-19.013-30.068-32-53.043-32h-45c-8.284 0-15 6.716-15 15v17h-75c-24.813 0-45 20.187-45 45v390c0 24.813 20.187 45 45 45h330c8.284 0 15-6.716 15-15s-6.716-15-15-15h-15v-30zm-15-30h-128.072c5.123-8.833 8.072-19.075 8.072-30v-30h75c8.284 0 15-6.716 15-15s-6.716-15-15-15h-75v-30h75c8.284 0 15-6.716 15-15s-6.716-15-15-15h-75v-30h75c8.284 0 15-6.716 15-15s-6.716-15-15-15h-75v-30h75c8.284 0 15-6.716 15-15v-60c0-8.284-6.716-15-15-15h-75v-30h120zm-120-300h60v30h-60zm-90-92h30c18.946 0 30 16.296 30 30v280.072c-8.833-5.123-19.075-8.072-30-8.072h-30zm-105 32h75v285c0 8.284 6.716 15 15 15h45c16.542 0 30 13.458 30 30s-13.458 30-30 30h-135c-5.258 0-10.305.915-15 2.58v-347.58c0-8.271 6.729-15 15-15zm285 420h-285c-8.271 0-15-6.729-15-15s6.729-15 15-15h285z"/>'
    bar +='                </g>'
    bar +='            </svg>'
    bar +='            <span class="link-text">Чуждестранни книги на български език</span>'
    bar +='        </a>'
    bar +='    </li>'
    bar +='    <li class="nav-item">'
    bar +='        <a href="englishBooks.html" class="nav-link">'
    bar +='            <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" enable-background="new 0 0 512 512" viewBox="0 0 512 512">'
    bar +='                <g>'
    bar +='                    <path d="m436 452c8.284 0 15-6.716 15-15v-390c0-8.284-6.716-15-15-15h-141.957c-10.077-19.013-30.068-32-53.043-32h-45c-8.284 0-15 6.716-15 15v17h-75c-24.813 0-45 20.187-45 45v390c0 24.813 20.187 45 45 45h330c8.284 0 15-6.716 15-15s-6.716-15-15-15h-15v-30zm-15-30h-128.072c5.123-8.833 8.072-19.075 8.072-30v-30h75c8.284 0 15-6.716 15-15s-6.716-15-15-15h-75v-30h75c8.284 0 15-6.716 15-15s-6.716-15-15-15h-75v-30h75c8.284 0 15-6.716 15-15s-6.716-15-15-15h-75v-30h75c8.284 0 15-6.716 15-15v-60c0-8.284-6.716-15-15-15h-75v-30h120zm-120-300h60v30h-60zm-90-92h30c18.946 0 30 16.296 30 30v280.072c-8.833-5.123-19.075-8.072-30-8.072h-30zm-105 32h75v285c0 8.284 6.716 15 15 15h45c16.542 0 30 13.458 30 30s-13.458 30-30 30h-135c-5.258 0-10.305.915-15 2.58v-347.58c0-8.271 6.729-15 15-15zm285 420h-285c-8.271 0-15-6.729-15-15s6.729-15 15-15h285z"/>'
    bar +='                </g>'
    bar +='            </svg>'
    bar +='            <span class="link-text">Чуждестранни книги на английски език</span>'
    bar +='        </a>'
    bar +='    </li>'   
    bar +='    <li class="nav-item">'
    bar +='        <a href="#myLoginModal" class="nav-link" data-toggle="modal">'
    bar +='            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 45.532 45.532" style="enable-background:new 0 0 45.532 45.532;" xml:space="preserve">'
    bar +='                <g>'
    bar +='                    <path d="M22.766,0.001C10.194,0.001,0,10.193,0,22.766s10.193,22.765,22.766,22.765c12.574,0,22.766-10.192,22.766-22.765   S35.34,0.001,22.766,0.001z M22.766,6.808c4.16,0,7.531,3.372,7.531,7.53c0,4.159-3.371,7.53-7.531,7.53   c-4.158,0-7.529-3.371-7.529-7.53C15.237,10.18,18.608,6.808,22.766,6.808z M22.761,39.579c-4.149,0-7.949-1.511-10.88-4.012   c-0.714-0.609-1.126-1.502-1.126-2.439c0-4.217,3.413-7.592,7.631-7.592h8.762c4.219,0,7.619,3.375,7.619,7.592   c0,0.938-0.41,1.829-1.125,2.438C30.712,38.068,26.911,39.579,22.761,39.579z"/>'
    bar +='                </g>  '                 
    bar +='            </svg>'
    bar +='            <span class="link-text">Вход</span>'
    bar +='        </a>'
    bar +='    </li>'
    bar +='    <li class="nav-item">'
    bar +='        <a href="#mySignupModal" class="nav-link" data-toggle="modal">'
    bar +='            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">'
    bar +='                <g>'
    bar +='                    <path d="M352.459,220c0-11.046-8.954-20-20-20h-206c-11.046,0-20,8.954-20,20s8.954,20,20,20h206     C343.505,240,352.459,231.046,352.459,220z"/>'
    bar +='                    <path d="M126.459,280c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20H251.57c11.046,0,20-8.954,20-20c0-11.046-8.954-20-20-20     H126.459z"/>'
    bar +='                    <path d="M173.459,472H106.57c-22.056,0-40-17.944-40-40V80c0-22.056,17.944-40,40-40h245.889c22.056,0,40,17.944,40,40v123     c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20V80c0-44.112-35.888-80-80-80H106.57c-44.112,0-80,35.888-80,80v352     c0,44.112,35.888,80,80,80h66.889c11.046,0,20-8.954,20-20C193.459,480.954,184.505,472,173.459,472z"/>'
    bar +='                    <path d="M467.884,289.572c-23.394-23.394-61.458-23.395-84.837-0.016l-109.803,109.56c-2.332,2.327-4.052,5.193-5.01,8.345     l-23.913,78.725c-2.12,6.98-0.273,14.559,4.821,19.78c3.816,3.911,9,6.034,14.317,6.034c1.779,0,3.575-0.238,5.338-0.727     l80.725-22.361c3.322-0.92,6.35-2.683,8.79-5.119l109.573-109.367C491.279,351.032,491.279,312.968,467.884,289.572z      M333.776,451.768l-40.612,11.25l11.885-39.129l74.089-73.925l28.29,28.29L333.776,451.768z M439.615,346.13l-3.875,3.867     l-28.285-28.285l3.862-3.854c7.798-7.798,20.486-7.798,28.284,0C447.399,325.656,447.399,338.344,439.615,346.13z"/>'
    bar +='                    <path d="M332.459,120h-206c-11.046,0-20,8.954-20,20s8.954,20,20,20h206c11.046,0,20-8.954,20-20S343.505,120,332.459,120z"/>'
    bar +='                </g>'
    bar +='            </svg>'
    bar +='            <span class="link-text">Регистрация</span>'
    bar +='        </a>'
    bar +='    </li>'
    bar +=' </ul>'
    bar +=' </nav>'
    bar +='<div id="myLoginModal" class="modal fade">'
	bar +='<div class="modal-dialog modal-login">'
	bar +='	<div class="modal-content">'
	bar +='		<div class="modal-header">		'		
	bar +='			<h4 class="modal-title">Вход за потребители</h4>'
	bar +='			<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'
	bar +='		</div>'
	bar +='		<div class="modal-body">'
	bar +='			<form action="example.html" method="post">'
	bar +='				<div class="form-group">'
	bar +='					<i class="fa fa-user"></i>'
	bar +='					<input type="text" class="form-control" placeholder="Потребителско име" required="required">'
	bar +='				</div>'
	bar +='				<div class="form-group">'
	bar +='					<i class="fa fa-lock"></i>'
	bar +='					<input type="password" class="form-control" placeholder="Парола" required="required">	'				
	bar +='				</div>'
	bar +='				<div class="form-group">'
	bar +='					<input type="submit" class="btn btn-primary btn-block btn-lg" value="Вход">'
	bar +='				</div>'
	bar +='			</form>'
	bar +='		</div>'
	bar +='	</div>'
	bar +='</div>'
    bar +='</div>'
    bar +='<div id="mySignupModal" class="modal fade">'
	bar +='<div class="modal-dialog modal-login">'
	bar +='	<div class="modal-content">'
	bar +='		<div class="modal-header">		'		
	bar +='			<h4 class="modal-title">Регистрация</h4>'
	bar +='			<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'
	bar +='		</div>'
	bar +='		<div class="modal-body">'
	bar +='			<form action="example.html" method="post">'
	bar +='				<div class="form-group">'
	bar +='					<i class="fa fa-user"></i>'
	bar +='					<input type="text" class="form-control" placeholder="Потребителско име" required="required">'
	bar +='				</div>'
	bar +='				<div class="form-group">'
	bar +='					<i class="fa fa-lock"></i>'
	bar +='					<input type="password" class="form-control" placeholder="Парола" required="required">	'				
	bar +='				</div>'
	bar +='				<div class="form-group">'
	bar +='					<input type="submit" class="btn btn-primary btn-block btn-lg" value="Регистрация">'
	bar +='				</div>'
	bar +='			</form>'
	bar +='		</div>'	
	bar +='	</div>'
	bar +='</div>'
    bar +='</div>'

    $("#nav-placeholder").html(bar);

    
    var id = getValueByName("id");
    $("#" + id).addClass("active");

     function getValueByName(name) {
        var url = document.getElementById('generate-nav').getAttribute('src');
        var param = new Array();
        if (url.indexOf("?") != -1) {
            var source = url.split("?")[1];
            items = source.split("&");
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                var parameters = item.split("=");
                if (parameters[0] == "id") {
                    return parameters[1];
                }
            }
        }
    }
});
